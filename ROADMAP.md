# Unplanr Roadmap

This document outlines future feature ideas and enhancements for Unplanr. Features are organized by priority and complexity.

## Completed ✅

- Google OAuth with minimal permissions
- Multi-calendar simultaneous view with colored chips
- Date range filtering with presets
- Instant search (accent-insensitive)
- Bulk deletion (up to 100 events)
- Dark mode (follows system preference)
- Mobile-first responsive design
- Session management with graceful expiration
- Privacy-focused analytics (Umami, no cookies)

---

## Planned Features

### High Priority (Simple → Medium Complexity)

#### 3. Event Details Expansion
**Status:** Planned
**Complexity:** Medium
**Description:** Add expandable details panel to show full event information before deletion.

**Why it's valuable:**
- Reduces accidental deletions by showing full context
- Users can see attendees, location, full description, attachments
- Better confidence in bulk operations

**Implementation notes:**
- Add expand/collapse UI to EventList items
- Show full event object data when expanded
- Consider truncation for very long descriptions
- Google Calendar API already provides this data

---

#### 4. Pagination / Load More Events
**Status:** Planned
**Complexity:** Medium
**Description:** Handle more than 100 events with pagination or "Load More" functionality.

**Why it's valuable:**
- Current 100-event limit restricts power users
- Common for active users to have 100+ upcoming events
- Better coverage for bulk operations

**Implementation notes:**
- Google Calendar API supports `pageToken` parameter natively
- Add "Load More" button or automatic pagination
- Track total event count across pages
- Consider performance for very large event lists

---

#### 5. Recurring Event Handling
**Status:** Planned
**Complexity:** Complex
**Description:** Add support for deleting entire recurring event series.

**Why it's valuable:**
- Google Calendar repeating events appear as individual instances
- Users often want to delete entire series at once
- Avoids tedious one-by-one deletion of recurring events

**Implementation notes:**
- Detect recurring events using `recurringEventId` field
- Add UI indicator for recurring events (repeat icon)
- Offer "Delete this event only" vs "Delete entire series" options
- Use Google Calendar API's recurring event endpoints
- Handle edge cases (modified instances, exceptions)

---

#### 6. Event Preview Before Delete
**Status:** Planned
**Complexity:** Simple
**Description:** Show a detailed summary of selected events before confirming bulk deletion.

**Why it's valuable:**
- Final sanity check before permanent deletion
- Shows event titles, dates, and count
- Reduces deletion anxiety

**Implementation notes:**
- Enhance DeleteConfirmModal to show event list
- Display first 10 events with "and X more..." if over limit
- Show total date range covered by selected events
- Quick implementation (UI enhancement only)

---

### Medium Priority (Complex)

#### 7. Undo/Archive Feature
**Status:** Planned
**Complexity:** Complex (requires new infrastructure)
**Description:** Temporary "undo" window or event archive before permanent deletion.

**Why it's valuable:**
- Deletion is currently irreversible
- Significantly reduces user anxiety about bulk operations
- Safety net for accidental deletions

**Implementation notes:**
- **Requires database layer** (new dependency - PostgreSQL, MongoDB, or serverless DB)
- Store deleted events temporarily (30 seconds - 24 hours)
- Add "Undo" toast notification after deletion
- Optional: Add "Trash" view to see archived events
- Consider storage costs and cleanup strategy
- Alternative: Use Google Calendar API's "Trash" feature if available

---

### Lower Priority (Nice to Have)

#### 8. Keyboard Shortcuts
**Status:** Idea
**Complexity:** Simple
**Description:** Add keyboard shortcuts for common actions.

**Examples:**
- `Ctrl/Cmd + A` - Select all events
- `Delete` - Open delete confirmation modal
- `Escape` - Close modals
- `Ctrl/Cmd + F` - Focus search bar
- `/` - Quick focus search

---

#### 9. Export Before Delete
**Status:** Idea
**Complexity:** Medium
**Description:** Export selected events to .ics or JSON before deletion.

**Why it's valuable:**
- Backup before permanent deletion
- Transfer events to other calendars
- Audit trail for deleted events

**Implementation notes:**
- Generate .ics file from Google Calendar event data
- Use browser download API
- Alternative: JSON export for easier parsing

---

#### 10. Duplicate Event Detection
**Status:** Idea
**Complexity:** Medium
**Description:** Identify and highlight potential duplicate events.

**Why it's valuable:**
- Common problem with calendar syncing issues
- Multiple calendar integrations create duplicates
- Save time identifying duplicates manually

**Implementation notes:**
- Match on title + date/time similarity
- Use fuzzy matching for title comparison
- Group potential duplicates visually
- Offer "delete duplicates" action

---

#### 11. Filter Presets / Saved Filters
**Status:** Idea
**Complexity:** Simple
**Description:** Save commonly used filter combinations.

**Examples:**
- "All-day events this month"
- "Past week's events"
- "Events with no description"

---

#### 12. Multiple Calendar Operations
**Status:** ✅ COMPLETED (see "Completed" section above)

---

#### 13. Advanced Filters
**Status:** Idea
**Complexity:** Medium
**Description:** More granular filtering options.

**Examples:**
- Filter by attendees (e.g., "all events with person X")
- Filter by location
- Filter by event status (confirmed, tentative, cancelled)
- Filter all-day events vs timed events
- Filter by event creator

---

## Non-Goals

These are explicitly **NOT** planned for Unplanr to maintain simplicity:

- ❌ Full calendar management (editing events, creating new events)
- ❌ Calendar sync functionality
- ❌ Trying to replace Google Calendar
- ❌ Supporting every calendar provider (focus on Google)
- ❌ Mobile app (web-first, responsive design)
- ❌ Complex scheduling features
- ❌ Team/collaboration features

---

## Contributing Ideas

Have a feature idea? Here's how to suggest it:

1. Check this ROADMAP.md to ensure it's not already listed
2. Consider if it aligns with Unplanr's core mission: **bulk calendar event management**
3. Open a GitHub issue with:
   - Clear use case description
   - Why it's valuable
   - Rough complexity estimate (if known)

Remember: Unplanr values **simplicity over features**. Every feature should solve a real problem for bulk calendar event management.

---

## Version History

- **v1.0.0** (Current) - Multi-calendar simultaneous view, calendar chips with event counts, X icons for delete intent, improved UX
- **v0.3.0** - Accent-insensitive search, smart date picker, session management, analytics, SEO, mobile improvements
- **v0.2.0** - Date range filtering, search/filter, calendar selection, dark mode
- **v0.1.0** - Initial release with basic OAuth and bulk deletion

---

Last updated: 2025-12-06
