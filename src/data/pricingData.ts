import { PricingTier } from '../types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Pilot',
    price: '₹999',
    idealFor: 'Small D2C brands testing an initial hero product or single garment drop.',
    imagesCount: '5 Final High-Res Images',
    turnaround: '3 – 4 Business Days',
    revisions: '1 Round of Adjustments',
    features: [
      '5 Master commercial fashion photographs',
      '1 garment or product focus',
      '2 model poses / styling variations',
      'Neutral studio or clean urban background',
      'Product color & graphic accuracy check',
      'High-resolution JPG/PNG delivery',
      'Commercial web & social usage rights'
    ]
  },
  {
    id: 'brand-collection',
    name: 'Brand Collection',
    price: '₹1,799',
    idealFor: 'Established streetwear and apparel brands seeking a comprehensive lookbook.',
    imagesCount: '10 Final High-Res Images',
    turnaround: '3 – 5 Business Days',
    revisions: '2 Rounds of Adjustments',
    isPopular: true,
    features: [
      '10 Master commercial campaign photographs',
      'Up to 2 products or styling configurations',
      'Front, back, 3/4, and lifestyle angles',
      'Close-up fabric and stitching texture capture',
      'Custom environment (European street, minimal studio)',
      'Digital retouching & color grade alignment',
      'Full commercial usage rights included'
    ]
  },
  {
    id: 'campaign-complete',
    name: 'Full Campaign Capsule',
    price: '₹3,499',
    idealFor: 'Seasonal lookbooks, key advertising visual drops, and digital billboard suites.',
    imagesCount: '15 Masters + 5 Social Crops',
    turnaround: '5 – 7 Business Days',
    revisions: 'Priority Iteration & Polish',
    features: [
      '15 Master high-resolution campaign photographs',
      '5 Formatted social media crops (9:16 Reels & 1:1 Feeds)',
      'Up to 3 products / full capsule collection',
      'Diverse model pairings and dynamic lighting moods',
      'Extreme macro material detail shots included',
      'Dedicated art direction consultation',
      'Master cloud archive with lifetime access'
    ]
  }
];
