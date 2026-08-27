'use client';

import React from 'react';
import {
  SearchCategoryFilter,
  SearchCompatibilityFilter,
  CATEGORY_FILTER_OPTIONS,
  COMPATIBILITY_FILTER_OPTIONS,
} from '@/lib/unicode/search';

interface GeneratorSearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: SearchCategoryFilter;
  onCategoryChange: (category: SearchCategoryFilter) => void;
  selectedCompatibility: SearchCompatibilityFilter;
  onCompatibilityChange: (compatibility: SearchCompatibilityFilter) => void;
  totalResultsCount: number;
  onResetFilters: () => void;
}

export function GeneratorSearchFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedCompatibility,
  onCompatibilityChange,
  totalResultsCount,
  onResetFilters,
}: GeneratorSearchFilterProps) {
  const isFiltered =
    Boolean(searchQuery.trim()) || selectedCategory !== 'all' || selectedCompatibility !== 'all';

  return (
    <div className="w-full space-y-4">
      {/* 1. Search Bar & Platform Dropdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Search Input Box */}
        <div className="md:col-span-2 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Stil adı veya kelime ara... (Örn: Gotik, Kalın, PUBG, Tırnaklı)"
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              title="Aramayı Temizle"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Platform & Compatibility Selector */}
        <div>
          <select
            value={selectedCompatibility}
            onChange={(e) => onCompatibilityChange(e.target.value as SearchCompatibilityFilter)}
            className="w-full py-2.5 px-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--primary)] transition-all"
          >
            {COMPATIBILITY_FILTER_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 2. Category Filter Chips (Horizontal Scrollable) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {CATEGORY_FILTER_OPTIONS.map((tab) => {
          const isActive = selectedCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onCategoryChange(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 border ${
                isActive
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-xs'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border-[var(--border-subtle)]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 3. Filter Bar Header: Result Count & Reset Action */}
      <div className="flex items-center justify-between text-xs pt-1 px-1">
        <span className="font-bold uppercase tracking-wider text-[var(--text-muted)]">
          {totalResultsCount} Şekilli Font Stili Bulundu
        </span>

        {isFiltered && (
          <button
            type="button"
            onClick={onResetFilters}
            className="text-xs font-medium text-rose-500 hover:text-rose-600 hover:underline flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Filtreleri Temizle</span>
          </button>
        )}
      </div>
    </div>
  );
}
