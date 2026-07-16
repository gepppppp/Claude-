"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { activityEvents, type EventSeverity, type EventStatus } from "@/lib/data";

const SEVERITY_STYLES: Record<EventSeverity, string> = {
  critical: "bg-(--color-destructive)/10 text-(--color-destructive)",
  warning: "bg-(--color-accent)/15 text-(--color-accent)",
  info: "bg-(--color-secondary)/15 text-(--color-secondary)",
};

const STATUS_STYLES: Record<EventStatus, string> = {
  open: "bg-(--color-destructive)/10 text-(--color-destructive)",
  investigating: "bg-(--color-accent)/15 text-(--color-accent)",
  resolved: "bg-(--color-success)/10 text-(--color-success)",
};

type SortDir = "asc" | "desc";

export function ActivityTable() {
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const rows = useMemo(() => {
    return [...activityEvents].sort((a, b) =>
      sortDir === "asc" ? a.service.localeCompare(b.service) : b.service.localeCompare(a.service),
    );
  }, [sortDir]);

  return (
    <div className="rounded-xl border border-(--color-border) bg-(--color-surface) p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-(--color-foreground)">Recent activity</h3>
        <p className="text-xs text-(--color-muted-foreground)">{rows.length} events</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-125 text-left text-sm">
          <caption className="sr-only">Recent activity events across services</caption>
          <thead>
            <tr className="border-b border-(--color-border) text-xs text-(--color-muted-foreground)">
              <th scope="col" className="py-2 pr-4 font-medium">Event</th>
              <th scope="col" aria-sort={sortDir === "asc" ? "ascending" : "descending"} className="py-2 pr-4 font-medium">
                <button
                  type="button"
                  onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
                  className="flex cursor-pointer items-center gap-1 hover:text-(--color-foreground)"
                >
                  Service
                  <ArrowUpDown className="h-3 w-3" aria-hidden="true" />
                </button>
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">Severity</th>
              <th scope="col" className="py-2 pr-4 font-medium">Status</th>
              <th scope="col" className="py-2 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((event) => (
              <tr key={event.id} className="border-b border-(--color-border) last:border-0">
                <td className="max-w-75 truncate py-2.5 pr-4 text-(--color-foreground)">{event.title}</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-(--color-muted-foreground)">
                  {event.service}
                </td>
                <td className="py-2.5 pr-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${SEVERITY_STYLES[event.severity]}`}
                  >
                    {event.severity}
                  </span>
                </td>
                <td className="py-2.5 pr-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${STATUS_STYLES[event.status]}`}
                  >
                    {event.status}
                  </span>
                </td>
                <td className="py-2.5 text-xs tabular-nums text-(--color-muted-foreground)">
                  {event.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
