import { useMemo } from 'react';
import type { CalendarEvent } from '../types';
import { highlightText, containsQuery } from '../utils/highlightText';
import { stripHtml } from '../utils/stripHtml';

interface EventListProps {
  events: CalendarEvent[];
  selectedIds: Set<string>;
  onToggle: (eventId: string) => void;
  loading: boolean;
  searchQuery?: string;
}

export function EventList({ events, selectedIds, onToggle, loading, searchQuery = '' }: EventListProps) {
  // Sort events to prioritize title matches
  const sortedEvents = useMemo(() => {
    if (!searchQuery) return events;

    return [...events].sort((a, b) => {
      const aInTitle = containsQuery(a.summary, searchQuery);
      const bInTitle = containsQuery(b.summary, searchQuery);

      // Title matches first
      if (aInTitle && !bInTitle) return -1;
      if (!aInTitle && bInTitle) return 1;
      return 0;
    });
  }, [events, searchQuery]);
  if (loading) {
    return (
      <div className="p-12 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent dark:border-blue-400"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium">Loading your events...</p>
      </div>
    );
  }

  if (sortedEvents.length === 0) {
    return (
      <div className="p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full mb-4">
          <svg className="w-8 h-8 text-slate-400 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-slate-600 dark:text-slate-400 font-medium">
          {searchQuery ? `No events found matching "${searchQuery}"` : 'No events found'}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {searchQuery ? 'Try a different search term' : 'Try adjusting your date range or calendar selection'}
        </p>
      </div>
    );
  }

  const formatDate = (event: CalendarEvent) => {
    const dateStr = event.start.dateTime || event.start.date;
    if (!dateStr) return 'No date';

    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      ...(event.start.dateTime && {
        hour: 'numeric',
        minute: '2-digit',
      }),
    });
  };

  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-700">
      {sortedEvents.map((event) => (
        <div
          key={event.id}
          className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer border-l-4 ${
            selectedIds.has(event.id) ? 'bg-red-50 dark:bg-red-900/20' : ''
          }`}
          style={{ borderLeftColor: event.calendarColor || '#3b82f6' }}
          onClick={() => onToggle(event.id)}
        >
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={selectedIds.has(event.id)}
              onChange={() => onToggle(event.id)}
              className="mt-1 h-5 w-5 text-red-600 dark:text-red-500 rounded border-slate-300 dark:border-slate-600 focus:ring-red-500 dark:focus:ring-red-400 bg-white dark:bg-slate-700"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white truncate md:whitespace-normal">
                {searchQuery ? highlightText(event.summary || '(No title)', searchQuery) : (event.summary || '(No title)')}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formatDate(event)}
              </p>
              {event.description && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                  {searchQuery ? highlightText(stripHtml(event.description), searchQuery) : stripHtml(event.description)}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
