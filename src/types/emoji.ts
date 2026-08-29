export type EmojiCategory =
  | 'smileys-emotion'
  | 'people-body'
  | 'animals-nature'
  | 'food-drink'
  | 'travel-places'
  | 'activities'
  | 'objects'
  | 'symbols'
  | 'flags';

export interface EmojiCategoryDefinition {
  id: EmojiCategory;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface EmojiItem {
  id: string;
  character: string;
  name: string;
  nameTr?: string;
  category: EmojiCategory;
  subcategory?: string;
  subcategoryNameTr?: string;
  keywords: string[];
  popularity?: number;
}

export interface EmojiGroup {
  id: string;
  nameTr: string;
  icon?: string;
  emojis: EmojiItem[];
}

export interface EmojiQueryOptions {
  category?: EmojiCategory | 'all';
  searchQuery?: string;
  limit?: number;
  offset?: number;
  sortBy?: 'popularity' | 'name' | 'id';
  sortOrder?: 'asc' | 'desc';
}
