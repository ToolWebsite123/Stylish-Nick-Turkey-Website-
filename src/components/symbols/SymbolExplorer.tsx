'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { SymbolItem } from '@/types/symbol';
import {
  getAllSymbols,
  getPopularSymbols,
  getSymbolsByCategory,
  searchSymbols,
} from '@/lib/symbols';
import { SymbolCategoryNav, ExtendedSymbolCategory } from './SymbolCategoryNav';
import { SymbolSearch } from './SymbolSearch';
import { SymbolGrid } from './SymbolGrid';
import { Toast } from '@/components/ui/Toast';

export function SymbolExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ExtendedSymbolCategory>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Compute matching symbols based on search query & active category tab
  const filteredSymbols = useMemo(() => {
    const cleanQuery = searchQuery.trim();

    // 1. Popular tab logic
    if (activeCategory === 'popular') {
      const popular = getPopularSymbols(40);
      if (!cleanQuery) return popular;
      return searchSymbols(cleanQuery).filter((s) => s.popularity >= 88);
    }

    // 2. All or Specific Category logic with text search
    if (cleanQuery) {
      const categoryFilter = activeCategory !== 'all' ? activeCategory : undefined;
      return searchSymbols(cleanQuery, { category: categoryFilter });
    }

    // 3. Category only logic
    if (activeCategory !== 'all') {
      return getSymbolsByCategory(activeCategory);
    }

    return getAllSymbols();
  }, [searchQuery, activeCategory]);

  const isFiltered = Boolean(searchQuery.trim()) || activeCategory !== 'all';

  const handleResetFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
  }, []);

  const handleCopySuccess = useCallback((symbol: SymbolItem) => {
    setToastMessage(`'${symbol.character}' sembolü kopyalandı! 📋`);
  }, []);

  return (
    <div className="w-full space-y-6">
      {/* 1. Category Navigation Tabs */}
      <SymbolCategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 2. Search Bar & Result Counter */}
      <SymbolSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultCount={filteredSymbols.length}
        isFiltered={isFiltered}
        onResetFilters={handleResetFilters}
      />

      {/* 3. Responsive Symbol Grid */}
      <SymbolGrid
        symbols={filteredSymbols}
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
