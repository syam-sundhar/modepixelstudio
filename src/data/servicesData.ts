import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    id: 'ai-fashion-photography',
    title: 'Fashion Campaigns',
    tagline: 'High-fashion on-model editorials crafted from physical garment references.',
    description: 'We place your garments onto diverse editorial models across tailored poses, realistic drape, and custom studio or on-location lighting.',
    deliverables: [
      'Front, back & 3/4 on-model perspectives',
      'Realistic fabric drape & fold physics',
      'Custom model styling & atmospheric lighting',
      'Print & digital commercial master files'
    ],
    previewImage: '/images/projects/project-01/hero-front.webp',
    aspectRatio: 'aspect-[4/5]',
    tags: ['Streetwear', 'Outerwear', 'Lookbooks']
  },
  {
    number: '02',
    id: 'product-photography',
    title: 'Product Staging',
    tagline: 'Architectural, studio-grade hero visuals on obsidian and stone plinths.',
    description: 'Sculpted lighting and dark-mode plinth staging for footwear, cosmetics, and luxury accessories with microscopic surface detail.',
    deliverables: [
      'Precision rim lighting & reflection control',
      'True-to-life material textures & finishes',
      'Macro detail & hero perspective angles',
      'Seamless studio backdrops or transparent PNGs'
    ],
    previewImage: '/images/projects/project-04/hero-serum.webp',
    aspectRatio: 'aspect-square',
    tags: ['Footwear', 'Beauty', 'Hero Staging']
  },
  {
    number: '03',
    id: 'lifestyle-campaigns',
    title: 'Editorial Environments',
    tagline: 'Transport your collection into evocative international architecture.',
    description: 'Place your collection in European cobblestone streets, minimalist concrete lofts, or golden hour cityscapes without travel costs.',
    deliverables: [
      'Architectural backdrops tailored to brand ethos',
      'Golden hour & natural ambient lighting',
      'Candid model poses & environmental styling',
      'Social & e-commerce aspect ratio formats'
    ],
    previewImage: '/images/projects/project-01/lifestyle-sidewalk.webp',
    aspectRatio: 'aspect-[4/3]',
    tags: ['Location', 'Atmospheric', 'Urban']
  },
  {
    number: '04',
    id: 'creative-advertising',
    title: 'Creative Key Visuals',
    tagline: 'High-impact visuals engineered for digital lookbooks and billboard print.',
    description: 'Bold art direction and striking compositions designed to elevate brand perception and stop the scroll across paid media.',
    deliverables: [
      'Key visuals with intentional copy negative space',
      'High-contrast editorial lighting & color grading',
      'A/B creative variations across moods',
      'Billboard & paid feed ready assets'
    ],
    previewImage: '/images/projects/project-04/ingredients-composition.webp',
    aspectRatio: 'aspect-[3/4]',
    tags: ['Billboards', 'Lookbooks', 'Paid Feeds']
  },
  {
    number: '05',
    id: 'ecommerce-catalogues',
    title: 'Catalogue Consistency',
    tagline: 'Uniform lighting and angles across 20+ SKUs to build client trust.',
    description: 'Standardized camera angles, lighting falloff, and color-accurate fabric calibration across your entire seasonal lineup.',
    deliverables: [
      'Strict color matching against physical swatches',
      'Standardized model poses across all SKUs',
      'Optimized lightweight web formats (WebP/AVIF)',
      'Consistent neutral grey or studio backdrops'
    ],
    previewImage: '/images/projects/project-02/back-view.webp',
    aspectRatio: 'aspect-square',
    tags: ['E-Commerce', 'Catalogues', 'Color Accurate']
  }
];
