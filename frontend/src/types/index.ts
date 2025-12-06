export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthStatus {
  authenticated: boolean;
  user?: User;
}

export interface Calendar {
  id: string;
  summary: string;
  summaryOverride?: string;
  description?: string;
  primary?: boolean;
  backgroundColor?: string;
}

export interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  htmlLink?: string;
  calendarId: string;
  calendarColor?: string;
}

export interface DeleteResult {
  succeeded: number;
  failed: number;
  total: number;
}

export interface DateRangeFilter {
  timeMin: string;  // ISO string
  timeMax: string | null;  // ISO string or null for "all upcoming"
}

export interface EventFilters {
  dateRange: DateRangeFilter;
  searchQuery: string;
}
