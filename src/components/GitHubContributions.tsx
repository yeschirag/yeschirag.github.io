import {
  fetchGitHubContributions,
  type ContributionDay,
} from "@/lib/github";
import { GitHubContributionsClient } from "./GitHubContributionsClient";

const CELL_SIZE = 11;
const CELL_GAP = 3;
const CELL_PITCH = CELL_SIZE + CELL_GAP; // 14
const YEAR = new Date().getFullYear();
const MONTH_LABEL_HEIGHT = 22;
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const LEVEL_CLASSES: Record<number, string> = {
  0: "fill-muted-foreground/5",
  1: "fill-muted-foreground/20",
  2: "fill-muted-foreground/40",
  3: "fill-muted-foreground/60",
  4: "fill-muted-foreground/80",
};

interface CellPosition {
  x: number;
  y: number;
  day: ContributionDay;
}

interface GridData {
  cells: CellPosition[];
  width: number;
  height: number;
  monthLabels: { text: string; x: number }[];
}

function buildGrid(days: ContributionDay[]): GridData {
  if (days.length === 0) {
    return { cells: [], width: 0, height: 0, monthLabels: [] };
  }

  // Calculate the reference Sunday (start of the first week)
  const firstDate = new Date(days[0].date + "T00:00:00");
  const startSunday = new Date(firstDate);
  startSunday.setDate(startSunday.getDate() - startSunday.getDay());

  const cells: CellPosition[] = [];
  const weekMonths = new Map<number, number>();

  for (const day of days) {
    const d = new Date(day.date + "T00:00:00");
    const diffMs = d.getTime() - startSunday.getTime();
    const daysSince = Math.round(diffMs / (24 * 60 * 60 * 1000));
    const weekIndex = Math.floor(daysSince / 7);
    const dayOfWeek = daysSince % 7;

    const x = weekIndex * CELL_PITCH;
    const y = dayOfWeek * CELL_PITCH + MONTH_LABEL_HEIGHT;

    cells.push({ x, y, day });

    // Track first day of each week for month labels
    if (!weekMonths.has(weekIndex)) {
      weekMonths.set(weekIndex, d.getMonth());
    }
  }

  // Generate month labels at the first week of each new month
  const monthLabels: { text: string; x: number }[] = [];
  let lastMonth = -1;
  const sortedWeeks = [...weekMonths.entries()].sort((a, b) => a[0] - b[0]);

  for (const [weekIndex, month] of sortedWeeks) {
    if (month !== lastMonth) {
      monthLabels.push({
        text: MONTHS[month],
        x: weekIndex * CELL_PITCH,
      });
      lastMonth = month;
    }
  }

  const maxX = Math.max(...cells.map((c) => c.x));
  const width = maxX + CELL_SIZE;
  const height = 6 * CELL_PITCH + CELL_SIZE + MONTH_LABEL_HEIGHT;

  return { cells, width, height, monthLabels };
}

export default async function GitHubContributions({
  username = "yeschirag",
}: {
  username?: string;
}) {
  const data = await fetchGitHubContributions(username);

  if (!data || data.days.length === 0) {
    return null;
  }

  const { cells, width, height, monthLabels } = buildGrid(data.days);

  // Prepare serializable cell data for the client component
  const cellData = cells.map((cell) => ({
    date: cell.day.date,
    count: cell.day.count,
    level: cell.day.level,
    x: cell.x,
    y: cell.y,
  }));

  return (
    <GitHubContributionsClient
      cellData={cellData}
      monthLabels={monthLabels}
      width={width}
      height={height}
      totalContributions={data.totalContributions}
      year={YEAR}
      username={username}
      cellSize={CELL_SIZE}
      levelClasses={LEVEL_CLASSES}
    />
  );
}
