export type Kpi = {
  label: string;
  value: string;
  delta: number;
  deltaLabel: string;
  trend: "up" | "down";
  goodDirection: "up" | "down";
};

export const kpis: Kpi[] = [
  {
    label: "Active Users",
    value: "48,291",
    delta: 12.4,
    deltaLabel: "vs last week",
    trend: "up",
    goodDirection: "up",
  },
  {
    label: "Events / min",
    value: "9,842",
    delta: 4.1,
    deltaLabel: "vs last week",
    trend: "up",
    goodDirection: "up",
  },
  {
    label: "Error Rate",
    value: "0.34%",
    delta: -0.12,
    deltaLabel: "vs last week",
    trend: "down",
    goodDirection: "down",
  },
  {
    label: "P95 Latency",
    value: "182ms",
    delta: 8.6,
    deltaLabel: "vs last week",
    trend: "up",
    goodDirection: "down",
  },
];

export const trendSeries = [
  { date: "Mon", events: 6200, errors: 42 },
  { date: "Tue", events: 7100, errors: 38 },
  { date: "Wed", events: 6800, errors: 51 },
  { date: "Thu", events: 8300, errors: 33 },
  { date: "Fri", events: 9100, errors: 29 },
  { date: "Sat", events: 5400, errors: 18 },
  { date: "Sun", events: 4900, errors: 15 },
  { date: "Mon", events: 8600, errors: 27 },
  { date: "Tue", events: 9842, errors: 22 },
];

export const endpointComparison = [
  { endpoint: "/api/search", requests: 18420 },
  { endpoint: "/api/checkout", requests: 12310 },
  { endpoint: "/api/auth", requests: 9840 },
  { endpoint: "/api/feed", requests: 8120 },
  { endpoint: "/api/upload", requests: 5230 },
  { endpoint: "/api/webhooks", requests: 3110 },
];

export type EventSeverity = "info" | "warning" | "critical";
export type EventStatus = "resolved" | "investigating" | "open";

export type ActivityEvent = {
  id: string;
  title: string;
  service: string;
  severity: EventSeverity;
  status: EventStatus;
  time: string;
};

export const activityEvents: ActivityEvent[] = [
  {
    id: "evt_1",
    title: "Elevated error rate on /api/checkout",
    service: "checkout-service",
    severity: "critical",
    status: "investigating",
    time: "2 min ago",
  },
  {
    id: "evt_2",
    title: "Latency spike on search-index",
    service: "search-service",
    severity: "warning",
    status: "open",
    time: "14 min ago",
  },
  {
    id: "evt_3",
    title: "Deploy completed: api-gateway v2.14.0",
    service: "api-gateway",
    severity: "info",
    status: "resolved",
    time: "38 min ago",
  },
  {
    id: "evt_4",
    title: "Rate limit threshold reached",
    service: "auth-service",
    severity: "warning",
    status: "resolved",
    time: "1 hr ago",
  },
  {
    id: "evt_5",
    title: "Database connection pool exhausted",
    service: "postgres-primary",
    severity: "critical",
    status: "resolved",
    time: "3 hr ago",
  },
  {
    id: "evt_6",
    title: "Scheduled maintenance window started",
    service: "infra",
    severity: "info",
    status: "resolved",
    time: "6 hr ago",
  },
];
