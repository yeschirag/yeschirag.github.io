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
      const cellCenterX = e.currentTarget.getBoundingClientRect().left +
        cellSize / 2 - rect.left;
      const cellTop = e.currentTarget.getBoundingClientRect().top - rect.top;

      const text =
        cell.count > 0
          ? `${cell.count} contributions on ${formatDate(cell.date)}`
          : `No contributions on ${formatDate(cell.date)}`;

      setTooltip({ text, x: cellCenterX, y: cellTop });
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
                  className={`${levelClasses[cell.level] ?? levelClasses[0]} cursor-crosshair`}
                  onMouseEnter={(e) => handleMouseEnter(cell, e)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </svg>

            {/* Custom instant tooltip */}
            {tooltip && (
              <div
                className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-full rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background shadow-lg whitespace-nowrap"
                style={{
                  left: tooltip.x,
                  top: tooltip.y - 6,
                }}
              >
                {tooltip.text}
                {/* Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground" />
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
