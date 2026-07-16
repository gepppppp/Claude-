"use client";

import { Bell, Menu, Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-(--color-border) bg-(--color-surface)/90 px-4 backdrop-blur-sm sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-(--color-muted-foreground) hover:bg-(--color-muted) lg:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      <label className="relative hidden max-w-md flex-1 sm:block">
        <span className="sr-only">Search</span>
        <Search
          className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-(--color-muted-foreground)"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Search events, services, users…"
          className="h-10 w-full rounded-lg border border-(--color-border) bg-(--color-background) pl-9 pr-3 text-sm text-(--color-foreground) outline-none transition-colors duration-150 placeholder:text-(--color-muted-foreground) focus-visible:border-(--color-primary) focus-visible:ring-2 focus-visible:ring-(--color-ring)/30"
        />
      </label>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          aria-label="Notifications, 3 unread"
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-(--color-border) bg-(--color-surface) text-(--color-foreground) transition-colors duration-150 hover:bg-(--color-muted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ring)"
        >
          <Bell className="h-[18px] w-[18px]" aria-hidden="true" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-(--color-destructive)" aria-hidden="true" />
        </button>
        <ThemeToggle />
        <button
          type="button"
          aria-label="Open account menu"
          className="ml-1 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-linear-to-br from-(--color-primary) to-(--color-secondary) text-sm font-semibold text-(--color-on-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ring)"
        >
          BG
        </button>
      </div>
    </header>
  );
}
