"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { trendSeries } from "@/lib/data";

function TrendTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-(--color-border) bg-(--color-surface) px-3 py-2 text-sm shadow-md">
      <p className="font-medium text-(--color-foreground)">{label}</p>
      <p className="font-mono tabular-nums text-(--color-muted-foreground)">
        {payload[0].value.toLocaleString()} events
      </p>
    </div>
  );
}

export function TrendChart() {
  return (
    <div className="rounded-xl border border-(--color-border) bg-(--color-surface) p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-(--color-foreground)">Event volume</h3>
          <p className="text-xs text-(--color-muted-foreground)">Last 9 days</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-(--color-muted-foreground)">
          <span className="h-2 w-2 rounded-full bg-(--color-primary)" aria-hidden="true" />
          Events
        </span>
      </div>

      <div
        className="h-64"
        role="img"
        aria-label={`Line chart of daily event volume from ${trendSeries[0].date} to ${trendSeries[trendSeries.length - 1].date}, rising from ${trendSeries[0].events.toLocaleString()} to ${trendSeries[trendSeries.length - 1].events.toLocaleString()} events.`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendSeries} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="eventsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.25} />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={48}
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              tickFormatter={(v: number) => `${Math.round(v / 1000)}k`}
            />
            <Tooltip content={<TrendTooltip />} />
            <Area
              type="monotone"
              dataKey="events"
              stroke="var(--color-primary)"
              strokeWidth={2}
              fill="url(#eventsFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <details className="mt-3">
        <summary className="cursor-pointer text-xs font-medium text-(--color-muted-foreground) hover:text-(--color-foreground)">
          View as table
        </summary>
        <table className="mt-2 w-full text-left text-xs">
          <caption className="sr-only">Daily event volume</caption>
          <thead>
            <tr className="text-(--color-muted-foreground)">
              <th scope="col" className="py-1 pr-4 font-medium">Day</th>
              <th scope="col" className="py-1 font-medium">Events</th>
            </tr>
          </thead>
          <tbody>
            {trendSeries.map((row, i) => (
              <tr key={`${row.date}-${i}`} className="border-t border-(--color-border)">
                <td className="py-1 pr-4 text-(--color-foreground)">{row.date}</td>
                <td className="py-1 font-mono tabular-nums text-(--color-foreground)">
                  {row.events.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
}
