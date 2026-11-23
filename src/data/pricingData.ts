import { PricingTier } from '../types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Pilot',
    price: '₹999',
    idealFor: 'For brands testing an initial product hero or single garment drop.',
    imagesCount: '5 Final Master Images',
    turnaround: '3 – 4 Days',
    revisions: '1 Round Included',
    features: [
      '5 Master commercial fashion photographs',
      '1 product / garment focus',
      'Front, 3/4 and detail perspectives',
      'Studio or clean architectural background',
      'Product color & graphic accuracy check',
      'Full commercial usage rights included'
    ]
  },
  {
    id: 'brand-collection',
    name: 'Brand Collection',
    price: '₹1,799',
    idealFor: 'For established brands seeking a comprehensive seasonal lookbook.',
    imagesCount: '10 Final Master Images',
    turnaround: '3 – 5 Days',
    revisions: '2 Rounds Included',
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
    idealFor: 'For seasonal lookbooks, billboard suites, and paid advertising drops.',
    imagesCount: '15 Masters + Social Crops',
    turnaround: '5 – 7 Days',
    revisions: 'Priority Polish Included',
    features: [
      '15 Master high-resolution campaign photographs',
      'Formatted social crops (9:16 Reels & 1:1 Feeds)',
      'Up to 3 products / full capsule collection',
      'Diverse model styling and dynamic lighting moods',
      'Extreme macro material detail shots',
      'Dedicated art direction consultation',
      'Master cloud archive with lifetime access'
    ]
  }
];
