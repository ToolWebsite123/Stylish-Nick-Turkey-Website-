'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { transformText } from '@/lib/unicode/engine';
import {
  filterTransformResults,
  SearchCategoryFilter,
  SearchCompatibilityFilter,
} from '@/lib/unicode/search';
import { PlatformId } from '@/types/platform';
import { GeneratorInput } from './GeneratorInput';
import { GeneratorOptions } from './GeneratorOptions';
import { GeneratorSearchFilter } from './GeneratorSearchFilter';
import { StyleCardList } from './StyleCardList';
import { Toast } from '@/components/ui/Toast';

export function Generator() {
  const [inputText, setInputText] = useState('Merhaba Dünya');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SearchCategoryFilter>('all');
  const [selectedCompatibility, setSelectedCompatibility] = useState<SearchCompatibilityFilter>('all');
  const [simplifyTurkish, setSimplifyTurkish] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 1. Transform text across all available Unicode styles
  const allResults = useMemo(() => {
    if (!inputText.trim()) return [];
    return transformText(inputText, {
      simplifyTurkish,
    });
  }, [inputText, simplifyTurkish]);

  // 2. Filter results based on search query, category, and platform compatibility
  const filteredResults = useMemo(() => {
    return filterTransformResults(allResults, {
      query: searchQuery,
      category: selectedCategory,
      compatibility: selectedCompatibility,
    });
  }, [allResults, searchQuery, selectedCategory, selectedCompatibility]);

  const platformIdFilter: PlatformId | undefined =
    selectedCompatibility === 'pubg' ||
    selectedCompatibility === 'instagram' ||
    selectedCompatibility === 'discord' ||
    selectedCompatibility === 'whatsapp'
      ? selectedCompatibility
      : undefined;

  const handleResetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedCompatibility('all');
  }, []);

  const handleCopySuccess = useCallback((styleName: string) => {
    setToastMessage(`"${styleName}" metni kopyalandı! 📋`);
  }, []);

  return (
    <div className="w-full space-y-6">
      {/* 1. Large Input Area */}
      <GeneratorInput
        value={inputText}
        onChange={setInputText}
        onClear={() => setInputText('')}
      />

      {/* 2. Turkish Character Mode Switch */}
      <GeneratorOptions
        simplifyTurkish={simplifyTurkish}
        onToggleSimplifyTurkish={setSimplifyTurkish}
      />

      {/* 3. Search & Category / Compatibility Filter Bar */}
      <GeneratorSearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedCompatibility={selectedCompatibility}
        onCompatibilityChange={setSelectedCompatibility}
        totalResultsCount={filteredResults.length}
        onResetFilters={handleResetFilters}
      />

      {/* 4. Real-Time Style Results Grid */}
      <StyleCardList
        results={filteredResults}
        inputText={inputText}
        selectedPlatformId={platformIdFilter}
        onCopySuccess={handleCopySuccess}
        onQuickSample={setInputText}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Toast Feedback Alert */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
