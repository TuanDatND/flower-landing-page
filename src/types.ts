export type FlowerCategory = 'all' | 'cuc-dai-doa' | 'canh-dai' | 'cuc-chum' | 'ngon-giong';

export interface FlowerItem {
  id: string;
  code: string;
  name: string;
  category: 'cuc-dai-doa' | 'canh-dai' | 'cuc-chum' | 'ngon-giong';
  badge: string;
  badgeType?: 'primary' | 'outline' | 'subtle';
  photoTag: string;
  subTag: string;
  description: string;
  specLabel: string;
  specValue: string;
  imageUrl: string;
  alt: string;
  seoPath?: string;
  details?: {
    floweringTime: string;
    origin: string;
    features: string[];
    careGuide: string;
  };
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  flowerType: string;
  quantity: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  imageUrl: string;
  alt: string;
  colSpan: string;
  aspect: string;
}
