export interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

export interface ContributionData {
  days: ContributionDay[];
  totalContributions: number;
}

export async function fetchGitHubContributions(
  username: string
): Promise<ContributionData | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${username}/contributions`,
      {
        headers: {
          Accept: "text/html",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) return null;

    const html = await res.text();
    return parseContributionsHTML(html);
  } catch {
    return null;
  }
}

function parseContributionsHTML(html: string): ContributionData {
  const days: ContributionDay[] = [];
  const seenDates = new Set<string>();

  // Match elements with both data-date and data-level attributes (either order)
  const patterns = [
    /data-date="(\d{4}-\d{2}-\d{2})"[^>]*?data-level="([0-4])"/g,
    /data-level="([0-4])"[^>]*?data-date="(\d{4}-\d{2}-\d{2})"/g,
  ];

  for (const regex of patterns) {
    let match;
    while ((match = regex.exec(html)) !== null) {
      // Pattern 1: date is group 1, level is group 2
      // Pattern 2: level is group 1, date is group 2
      const isFirstPattern = regex === patterns[0];
      const date = isFirstPattern ? match[1] : match[2];
      const level = parseInt(isFirstPattern ? match[2] : match[1]);

      if (!seenDates.has(date)) {
        seenDates.add(date);
        days.push({
          date,
          level,
          count: estimateCount(level),
        });
      }
    }
    if (days.length > 0) break; // First pattern worked, skip alternate
  }

  let totalContributions = 0;

  // Try to extract actual total from the page
  const totalMatch = html.match(
    /([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/i
  );
  if (totalMatch) {
    totalContributions = parseInt(totalMatch[1].replace(/,/g, ""));
  } else {
    totalContributions = days.reduce((sum, d) => sum + d.count, 0);
  }

  // Sort chronologically
  days.sort((a, b) => a.date.localeCompare(b.date));

  return { days, totalContributions };
}

function estimateCount(level: number): number {
  const counts: Record<number, number> = { 0: 0, 1: 3, 2: 6, 3: 9, 4: 12 };
  return counts[level] ?? 0;
}
