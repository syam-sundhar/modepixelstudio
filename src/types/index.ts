export interface ProjectImage {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: 'hero' | 'back' | 'detail' | 'macro' | 'lifestyle' | 'street' | 'sole' | 'composition';
  aspectRatio?: string;
  colSpan?: number;
}

export interface ComparisonPair {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel: string;
  afterLabel: string;
  caption: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  season: string;
  year: string;
  coverImage: string;
  secondaryPreviewImage: string;
  creativeConcept: string;
  visualDirection: string;
  lightingSetup: string;
  colorPalette: string[];
  deliverables: string[];
  clientType: string;
  statusTag: string; // e.g. "Concept Campaign"
  beforeAfterComparison?: ComparisonPair;
  gallery: ProjectImage[];
  detailShots: ProjectImage[];
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  previewImage: string;
  aspectRatio: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  clientRequirement: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  idealFor: string;
  imagesCount: string;
  turnaround: string;
  revisions: string;
  features: string[];
  isPopular?: boolean;
}
