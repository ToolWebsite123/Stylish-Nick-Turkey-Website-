export type SymbolCategory =
  | 'hearts'
  | 'stars'
  | 'crowns'
  | 'arrows'
  | 'flowers'
  | 'gaming'
  | 'decorative'
  | 'brackets'
  | 'cute'
  | 'special';

export interface SymbolCategoryDefinition {
  id: SymbolCategory;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface SymbolItem {
  id: string;
  character: string;
  name: string;
  nameTr?: string;
  category: SymbolCategory;
  keywords: string[];
  popularity: number; // Rating from 1 to 100
  tags: string[];
}

export interface SymbolQueryOptions {
  category?: SymbolCategory | 'all';
  searchQuery?: string;
  limit?: number;
  offset?: number;
  sortBy?: 'popularity' | 'name' | 'id';
  sortOrder?: 'asc' | 'desc';
}

export interface SymbolValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  totalCount: number;
  categoryCounts: Record<SymbolCategory, number>;
}
