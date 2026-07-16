import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { TrendChart } from "@/components/charts/trend-chart";
import { ComparisonChart } from "@/components/charts/comparison-chart";
import { ActivityTable } from "@/components/activity-table";
import { kpis } from "@/lib/data";

export default function Home() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-1">
          <h1 className="text-xl font-semibold tracking-tight text-(--color-foreground)">
            Overview
          </h1>
          <p className="text-sm text-(--color-muted-foreground)">
            Live product analytics across every service, updated in real time.
          </p>
        </div>

        <section aria-label="Key metrics" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <StatCard key={kpi.label} kpi={kpi} />
          ))}
        </section>

        <section aria-label="Charts" className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TrendChart />
          </div>
          <ComparisonChart />
        </section>

        <section aria-label="Recent activity" className="mt-6">
          <ActivityTable />
        </section>
      </div>
    </DashboardShell>
  );
}
