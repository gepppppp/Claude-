"use client";

import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { endpointComparison } from "@/lib/data";

const sorted = [...endpointComparison].sort((a, b) => b.requests - a.requests);

export function ComparisonChart() {
  return (
    <div className="rounded-xl border border-(--color-border) bg-(--color-surface) p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-(--color-foreground)">Top endpoints</h3>
        <p className="text-xs text-(--color-muted-foreground)">Requests, last 24h</p>
      </div>

      <div
        className="h-64"
        role="img"
        aria-label={`Bar chart comparing request counts across ${sorted.length} endpoints, led by ${sorted[0].endpoint} with ${sorted[0].requests.toLocaleString()} requests.`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sorted}
            layout="vertical"
            margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" horizontal={false} />
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="endpoint"
              tickLine={false}
              axisLine={false}
              width={110}
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12, fontFamily: "var(--font-mono)" }}
            />
            <Bar dataKey="requests" fill="var(--color-secondary)" radius={[0, 6, 6, 0]} barSize={18}>
              <LabelList
                dataKey="requests"
                position="right"
                formatter={(v: string | number | boolean | null | undefined) =>
                  typeof v === "number" ? v.toLocaleString() : v
                }
                style={{ fill: "var(--color-foreground)", fontSize: 12, fontFamily: "var(--font-mono)" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
