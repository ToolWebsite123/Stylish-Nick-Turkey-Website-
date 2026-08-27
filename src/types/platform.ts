export type PlatformId = 'pubg' | 'instagram' | 'discord' | 'whatsapp' | 'tiktok';

export type PlatformCompatibilityStatus = 'full' | 'partial' | 'unsupported' | 'unknown';

export interface Platform {
  id: PlatformId;
  name: string;
  slug: string;
  icon: string;
  descriptionTr: string;
  maxCharacterLength?: number;
  maxByteLength?: number;
  disclaimerTr?: string;
}

export interface PlatformStyleCompatibility {
  styleId: string;
  platformId: PlatformId;
  status: PlatformCompatibilityStatus;
  notesTr?: string;
}

export interface PlatformStatusDisplay {
  status: PlatformCompatibilityStatus;
  labelTr: string;
  badgeClass: string;
  icon: string;
}
