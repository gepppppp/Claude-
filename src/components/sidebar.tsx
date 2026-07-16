"use client";

import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Boxes,
  LayoutDashboard,
  Settings,
  Users,
  X,
  Zap,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview", icon: LayoutDashboard, active: true },
  { label: "Analytics", href: "#analytics", icon: BarChart3, active: false },
  { label: "Users", href: "#users", icon: Users, active: false },
  { label: "Services", href: "#services", icon: Boxes, active: false },
  { label: "Alerts", href: "#alerts", icon: AlertTriangle, active: false },
  { label: "Live", href: "#live", icon: Activity, active: false },
];

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 cursor-pointer bg-black/40 lg:hidden"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 shrink-0 flex-col border-r border-(--color-border) bg-(--color-surface) transition-transform duration-300 ease-out lg:sticky lg:top-0 lg:h-dvh lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-(--color-primary) to-(--color-secondary) text-(--color-on-primary)">
              <Zap className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <span className="font-mono text-lg font-semibold tracking-tight text-(--color-foreground)">
              Pulse
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-(--color-muted-foreground) hover:bg-(--color-muted) lg:hidden"
          >
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2" aria-label="Primary">
          {NAV_ITEMS.map(({ label, href, icon: Icon, active }) => (
            <Link
              key={label}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors duration-150 ${
                active
                  ? "bg-(--color-primary)/10 text-(--color-primary)"
                  : "text-(--color-muted-foreground) hover:bg-(--color-muted) hover:text-(--color-foreground)"
              }`}
            >
              <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-(--color-border) p-3">
          <Link
            href="#settings"
            className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-(--color-muted-foreground) transition-colors duration-150 hover:bg-(--color-muted) hover:text-(--color-foreground)"
          >
            <Settings className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
            Settings
          </Link>
        </div>
      </aside>
    </>
  );
}
