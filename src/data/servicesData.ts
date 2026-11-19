import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    id: 'ai-fashion-photography',
    title: 'AI Fashion Photography',
    tagline: 'Hyper-realistic on-model apparel campaigns without casting agencies or location permits.',
    description: 'We place your garments onto diverse, natural-looking editorial models across tailored poses, lighting conditions, and aesthetic directions. Product colors, stitch lines, and front/back graphics remain meticulously faithful to the physical reference.',
    deliverables: [
      'On-model front, back, and 3/4 perspective shoots',
      'Realistic fabric fold dynamics and drape physics',
      'Customizable model demographics, styling, and hairstyles',
      'High-resolution commercial print and digital master files'
    ],
    previewImage: '/images/projects/project-01/hero-front.png',
    aspectRatio: 'aspect-[4/5]',
    tags: ['Streetwear', 'High Fashion', 'Lookbooks', 'Model Casting']
  },
  {
    number: '02',
    id: 'product-photography',
    title: 'Product Photography',
    tagline: 'Architectural, studio-grade product hero shots on stone, obsidian, and minimalist sets.',
    description: 'Elevate footwear, cosmetics, fragrances, and luxury accessories into museum-grade hero visuals. We sculpt light around glass, brushed metals, embossed leather, and technical materials with microscopic optical accuracy.',
    deliverables: [
      'Sculpted rim lighting and dark-mode plinth staging',
      'Material texture and reflective surface control',
      'Micro-macro detail and exploded component styling',
      'Seamless transparent PNG or custom studio backdrops'
    ],
    previewImage: '/images/projects/project-04/hero-serum.jpg',
    aspectRatio: 'aspect-square',
    tags: ['Beauty & Skincare', 'Footwear', 'Luxury Goods', 'Hero Shots']
  },
  {
    number: '03',
    id: 'lifestyle-campaigns',
    title: 'Lifestyle Campaigns',
    tagline: 'Transport your collection into evocative real-world atmospheres and global architecture.',
    description: 'Place your products in sun-drenched European avenues, minimalist Tokyo concrete lofts, or atmospheric misty landscapes without arranging flights, crews, or weather contingencies. We build an emotional world around your brand.',
    deliverables: [
      'Location curation matching brand ethos',
      'Environmental golden-hour and overcast mood direction',
      'Contextual model interactions and natural candid styling',
      'Multi-platform social media crops and aspect ratios'
    ],
    previewImage: '/images/projects/project-01/lifestyle-sidewalk.png',
    aspectRatio: 'aspect-[4/3]',
    tags: ['Editorial', 'Atmospheric', 'Urban Environments', 'Storytelling']
  },
  {
    number: '04',
    id: 'creative-advertising',
    title: 'Creative Advertising',
    tagline: 'High-impact key visuals designed to stop the scroll and elevate brand perception.',
    description: 'Turn your seasonal drops into viral digital billboards, paid Meta & TikTok creatives, and full-bleed lookbook spreads. We craft surreal, high-fashion art direction that combines conceptual storytelling with strong commercial conversion.',
    deliverables: [
      'Key visuals with deliberate copy negative space',
      'Scroll-stopping visual hooks and artistic compositions',
      'A/B creative variations across moods and lighting',
      'Color-graded for digital feeds, retargeting, and billboards'
    ],
    previewImage: '/images/projects/project-04/ingredients-composition.jpg',
    aspectRatio: 'aspect-[3/4]',
    tags: ['Paid Media', 'Billboard Visuals', 'Campaign Drops', 'Art Direction']
  },
  {
    number: '05',
    id: 'ecommerce-catalogues',
    title: 'E-commerce Catalogues',
    tagline: 'Standardized, high-volume consistency for luxury online stores and marketplaces.',
    description: 'Maintain uniform lighting, camera focal distance, and shadow alignment across 50+ SKUs. Clean, color-accurate catalogue photography that builds customer trust and reduces return rates caused by mismatched expectations.',
    deliverables: [
      'Strict color calibration against physical fabric pantones',
      'Consistent model poses and camera angles across entire lines',
      'Optimized web formats (WebP, AVIF) with fast load footprints',
      'Clean white, neutral grey, or custom brand backdrop presets'
    ],
    previewImage: '/images/projects/project-02/back-view.png',
    aspectRatio: 'aspect-square',
    tags: ['High Volume', 'Color Accuracy', 'Shopify / D2C', 'Zero Fluff']
  }
];
