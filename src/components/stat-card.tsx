import { ArrowDown, ArrowUp } from "lucide-react";
import type { Kpi } from "@/lib/data";

export function StatCard({ kpi }: { kpi: Kpi }) {
  const isGood = kpi.trend === kpi.goodDirection;
  const Arrow = kpi.trend === "up" ? ArrowUp : ArrowDown;

  return (
    <div className="rounded-xl border border-(--color-border) bg-(--color-surface) p-5 shadow-sm">
      <p className="text-sm font-medium text-(--color-muted-foreground)">{kpi.label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="font-mono text-2xl font-semibold tabular-nums text-(--color-foreground)">
          {kpi.value}
        </p>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-sm">
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-medium tabular-nums ${
            isGood
              ? "bg-(--color-success)/10 text-(--color-success)"
              : "bg-(--color-destructive)/10 text-(--color-destructive)"
          }`}
        >
          <Arrow className="h-3.5 w-3.5" aria-hidden="true" />
          {Math.abs(kpi.delta)}%
        </span>
        <span className="text-(--color-muted-foreground)">{kpi.deltaLabel}</span>
      </div>
    </div>
  );
}
