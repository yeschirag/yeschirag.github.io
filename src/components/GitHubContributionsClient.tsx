"use client";

import { useState, useRef, useCallback } from "react";

interface CellData {
  date: string;
  count: number;
  level: number;
  x: number;
  y: number;
}

interface Props {
  cellData: CellData[];
  monthLabels: { text: string; x: number }[];
  width: number;
  height: number;
  totalContributions: number;
  year: number;
  username: string;
  cellSize: number;
  levelClasses: Record<number, string>;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function GitHubContributionsClient({
  cellData,
  monthLabels,
  width,
  height,
  totalContributions,
  year,
  username,
  cellSize,
  levelClasses,
}: Props) {
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseEnter = useCallback(
    (cell: CellData, e: React.MouseEvent<SVGRectElement>) => {
      const svgEl = svgRef.current;
      if (!svgEl) return;

      const rect = svgEl.getBoundingClientRect();
      const cellRect = e.currentTarget.getBoundingClientRect();
      const cellCenterX = cellRect.left + cellSize / 2 - rect.left;
      const cellTop = cellRect.top - rect.top;
      const cellBottom = cellRect.bottom - rect.top;

      const text =
        cell.count > 0
          ? `${cell.count} contributions on ${formatDate(cell.date)}`
          : `No contributions on ${formatDate(cell.date)}`;

      // Estimate tooltip height (approx 36px), width (estimate 180px), and margin (6px)
      const tooltipHeight = 36;
      const tooltipWidth = 180;
      const margin = 6;
      let position = 'top';
      let y = cellTop;
      let x = cellCenterX;
      // Clamp so tooltip never goes above the container
      if (cellTop - tooltipHeight - margin < 0) {
        position = 'bottom';
        y = cellBottom;
      }
      // If still above, clamp to margin
      if (position === 'top' && (cellTop - tooltipHeight - margin < 0)) {
        y = tooltipHeight + margin;
      }
      // Clamp horizontally so tooltip doesn't overflow left/right of SVG
      const minX = tooltipWidth / 2 + 4; // 4px padding
      const maxX = width - tooltipWidth / 2 - 4;
      if (x < minX) x = minX;
      if (x > maxX) x = maxX;
      setTooltip({ text, x, y, position });
    },
    [cellSize]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  return (
    <section className="screen-line-before screen-line-after border-x border-edge">
      <h2 className="sr-only">GitHub Contributions</h2>
      <div
        className="flex w-max max-w-full flex-col gap-2 mx-auto py-2"
        style={{ fontSize: 14 }}
      >
        {/* Scrollable graph area */}
        <div
          className="max-w-full overflow-x-auto overflow-y-hidden px-2"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="relative">
            <svg
              ref={svgRef}
              className="block overflow-visible"
              height={height}
              viewBox={`0 0 ${width} ${height}`}
              width={width}
            >
              {/* Month labels */}
              <g
                className="fill-current text-muted-foreground"
                style={{ fontSize: 10 }}
              >
                {monthLabels.map((label, i) => (
                  <text key={i} dominantBaseline="hanging" x={label.x} y={0}>
                    {label.text}
                  </text>
                ))}
              </g>

              {/* Contribution cells */}
              {cellData.map((cell) => (
                <rect
                  key={cell.date}
                  data-count={cell.count}
                  data-date={cell.date}
                  data-level={cell.level}
                  height={cellSize}
                  width={cellSize}
                  rx={0}
                  ry={0}
                  x={cell.x}
                  y={cell.y}
                  className={levelClasses[cell.level] ?? levelClasses[0]}
                  onMouseEnter={(e) => handleMouseEnter(cell, e)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </svg>

            {/* Custom instant tooltip */}
            {tooltip && (
              <div
                className={`pointer-events-none absolute z-[9999] -translate-x-1/2 rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background shadow-lg whitespace-nowrap ${tooltip.position === 'top' ? '-translate-y-full' : 'translate-y-2'}`}
                style={{
                  left: tooltip.x,
                  top: tooltip.position === 'top' ? tooltip.y - 6 : tooltip.y + 6,
                }}
              >
                {tooltip.text}
                {/* Arrow */}
                {tooltip.position === 'top' ? (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground" />
                ) : (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-foreground" />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Summary + Legend */}
        <div className="flex items-center justify-between gap-2 px-2 text-xs text-muted-foreground">
          <span>
            {totalContributions.toLocaleString()} contributions in {year} on{" "}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline-offset-4 hover:underline text-foreground"
            >
              GitHub
            </a>
          </span>

          {/* Less → More legend */}
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <svg width="70" height="11" className="overflow-visible">
              {[0, 1, 2, 3, 4].map((level) => (
                <rect
                  key={level}
                  width={10}
                  height={10}
                  rx={0}
                  ry={0}
                  x={level * 14}
                  y={0}
                  className={levelClasses[level]}
                />
              ))}
            </svg>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
