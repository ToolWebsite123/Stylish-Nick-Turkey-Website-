'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  SavedFavorite,
  CopyHistoryItem,
  getFavorites,
  saveFavorite,
  removeFavorite,
  toggleFavorite as toggleFavUtil,
  isFavorite as isFavUtil,
  getCopyHistory,
  clearCopyHistory as clearHistUtil,
} from '@/lib/storage';

export function useFavorites() {
  const [favorites, setFavorites] = useState<SavedFavorite[]>([]);

  useEffect(() => {
    const handleUpdate = () => setFavorites(getFavorites());
    queueMicrotask(handleUpdate);

    window.addEventListener('favorites-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('favorites-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const add = useCallback((item: Omit<SavedFavorite, 'id' | 'savedAt'>) => {
    const updated = saveFavorite(item);
    setFavorites(updated);
  }, []);

  const remove = useCallback((idOrText: string) => {
    const updated = removeFavorite(idOrText);
    setFavorites(updated);
  }, []);

  const toggle = useCallback((item: Omit<SavedFavorite, 'id' | 'savedAt'>) => {
    const isFavNow = toggleFavUtil(item);
    setFavorites(getFavorites());
    return isFavNow;
  }, []);

  const checkIsFavorite = useCallback((text: string) => {
    return isFavUtil(text);
  }, []);

  return {
    favorites,
    addFavorite: add,
    removeFavorite: remove,
    toggleFavorite: toggle,
    isFavorite: checkIsFavorite,
    count: favorites.length,
  };
}

export function useCopyHistory() {
  const [history, setHistory] = useState<CopyHistoryItem[]>([]);

  useEffect(() => {
    const handleUpdate = () => setHistory(getCopyHistory());
    queueMicrotask(handleUpdate);

    window.addEventListener('copy-history-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('copy-history-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const clear = useCallback(() => {
    const empty = clearHistUtil();
    setHistory(empty);
  }, []);

  return {
    history,
    clearHistory: clear,
    count: history.length,
  };
}
