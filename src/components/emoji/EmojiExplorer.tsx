'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { EmojiItem } from '@/types/emoji';
import {
  getAllEmoji,
  getEmojiByCategory,
  searchEmoji,
} from '@/lib/emoji';
import { EmojiCategoryNav, ExtendedEmojiCategory } from './EmojiCategoryNav';
import { EmojiSearch } from './EmojiSearch';
import { EmojiGrid } from './EmojiGrid';
import { Toast } from '@/components/ui/Toast';

export function EmojiExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ExtendedEmojiCategory>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Compute matching emojis based on search query & active category tab
  const filteredEmojis = useMemo(() => {
    const cleanQuery = searchQuery.trim();

    // Specific Category logic with text search
    if (cleanQuery) {
      const categoryFilter = activeCategory !== 'all' ? activeCategory : undefined;
      return searchEmoji(cleanQuery, { category: categoryFilter });
    }

    // Category only logic
    if (activeCategory !== 'all') {
      return getEmojiByCategory(activeCategory);
    }

    return getAllEmoji();
  }, [searchQuery, activeCategory]);

  const isFiltered = Boolean(searchQuery.trim()) || activeCategory !== 'all';

  const handleResetFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
  }, []);

  const handleCopySuccess = useCallback((emoji: EmojiItem) => {
    const name = emoji.nameTr || emoji.name;
    setToastMessage(`'${emoji.character}' (${name}) emojisi kopyalandı! 📋`);
  }, []);

  return (
    <div className="w-full space-y-6">
      {/* 1. Category Navigation Tabs */}
      <EmojiCategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 2. Search Bar & Result Counter */}
      <EmojiSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultCount={filteredEmojis.length}
        isFiltered={isFiltered}
        onResetFilters={handleResetFilters}
      />

      {/* 3. Responsive Emoji Grid */}
      <EmojiGrid
        emojis={filteredEmojis}
        onCopy={handleCopySuccess}
        onResetFilters={handleResetFilters}
      />

      {/* 4. Toast Notification Alert */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
