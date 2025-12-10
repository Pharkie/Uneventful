import { useEffect, useCallback } from 'react';

interface KeyboardShortcutHandlers {
  onSelectAll?: () => void;
  onDelete?: () => void;
  onEscape?: () => void;
  onFocusSearch?: () => void;
  onShowShortcuts?: () => void;
}

export function useKeyboardShortcuts(handlers: KeyboardShortcutHandlers) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const isInputFocused = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
    const isMod = event.metaKey || event.ctrlKey;

    // Escape - always works to close modals
    if (event.key === 'Escape') {
      handlers.onEscape?.();
      return;
    }

    // Show shortcuts with ? (when not in input)
    if (event.key === '?' && !isInputFocused) {
      event.preventDefault();
      handlers.onShowShortcuts?.();
      return;
    }

    // Ctrl/Cmd + A - Select all (prevent default only when not in input)
    if (isMod && event.key === 'a' && !isInputFocused) {
      event.preventDefault();
      handlers.onSelectAll?.();
      return;
    }

    // Delete/Backspace - Open delete modal (when not in input)
    if ((event.key === 'Delete' || event.key === 'Backspace') && !isInputFocused) {
      event.preventDefault();
      handlers.onDelete?.();
      return;
    }

    // Ctrl/Cmd + F - Focus search (override browser find)
    if (isMod && event.key === 'f') {
      event.preventDefault();
      handlers.onFocusSearch?.();
      return;
    }

    // / - Quick focus search (when not in input)
    if (event.key === '/' && !isInputFocused) {
      event.preventDefault();
      handlers.onFocusSearch?.();
      return;
    }
  }, [handlers]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
