export interface SavedFavorite {
  id: string;
  text: string;
  styleName?: string;
  category?: string;
  savedAt: number;
}

export interface CopyHistoryItem {
  id: string;
  text: string;
  copiedAt: number;
}

const FAVORITES_KEY = 'sekilli_nick_favorites_v1';
const HISTORY_KEY = 'sekilli_nick_history_v1';
const MAX_HISTORY_ITEMS = 20;

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

/**
 * Get saved favorites list from LocalStorage
 */
export function getFavorites(): SavedFavorite[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to read favorites from localStorage', err);
    return [];
  }
}

/**
 * Add a new nickname / text to favorites
 */
export function saveFavorite(item: Omit<SavedFavorite, 'id' | 'savedAt'>): SavedFavorite[] {
  if (!isBrowser()) return [];
  try {
    const current = getFavorites();
    // Avoid duplicate text items
    if (current.some((fav) => fav.text === item.text)) {
      return current;
    }
    const newItem: SavedFavorite = {
      ...item,
      id: `fav_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      savedAt: Date.now(),
    };
    const updated = [newItem, ...current];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    // Dispatch custom event for cross-component reactive sync
    window.dispatchEvent(new Event('favorites-updated'));
    return updated;
  } catch (err) {
    console.error('Failed to save favorite to localStorage', err);
    return getFavorites();
  }
}

/**
 * Remove an item from favorites by id or text
 */
export function removeFavorite(idOrText: string): SavedFavorite[] {
  if (!isBrowser()) return [];
  try {
    const current = getFavorites();
    const updated = current.filter((fav) => fav.id !== idOrText && fav.text !== idOrText);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('favorites-updated'));
    return updated;
  } catch (err) {
    console.error('Failed to remove favorite from localStorage', err);
    return getFavorites();
  }
}

/**
 * Check if a specific text is already in favorites
 */
export function isFavorite(text: string): boolean {
  if (!isBrowser()) return false;
  const current = getFavorites();
  return current.some((fav) => fav.text === text);
}

/**
 * Toggle favorite status
 */
export function toggleFavorite(item: Omit<SavedFavorite, 'id' | 'savedAt'>): boolean {
  if (isFavorite(item.text)) {
    removeFavorite(item.text);
    return false;
  } else {
    saveFavorite(item);
    return true;
  }
}

/**
 * Get copy history items from LocalStorage
 */
export function getCopyHistory(): CopyHistoryItem[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to read copy history from localStorage', err);
    return [];
  }
}

/**
 * Record a new copied text entry
 */
export function addCopyHistory(text: string): CopyHistoryItem[] {
  if (!isBrowser() || !text || text.trim() === '') return getCopyHistory();
  try {
    const current = getCopyHistory();
    // Remove previous instance if it exists to push to top
    const filtered = current.filter((item) => item.text !== text);
    const newItem: CopyHistoryItem = {
      id: `hist_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      text,
      copiedAt: Date.now(),
    };
    const updated = [newItem, ...filtered].slice(0, MAX_HISTORY_ITEMS);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('copy-history-updated'));
    return updated;
  } catch (err) {
    console.error('Failed to add copy history to localStorage', err);
    return getCopyHistory();
  }
}

/**
 * Clear all copy history entries
 */
export function clearCopyHistory(): CopyHistoryItem[] {
  if (!isBrowser()) return [];
  try {
    localStorage.removeItem(HISTORY_KEY);
    window.dispatchEvent(new Event('copy-history-updated'));
    return [];
  } catch (err) {
    console.error('Failed to clear copy history from localStorage', err);
    return [];
  }
}
