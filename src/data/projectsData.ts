import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-01-tshirt',
    number: '01',
    title: 'OVERSIZED STREETWEAR EDITORIAL',
    subtitle: 'Graphic Vintage Tee Commercial Campaign',
    category: 'Apparel / Streetwear',
    tag: 'Streetwear Campaign',
    season: 'Autumn / Winter',
    year: '2026',
    coverImage: '/images/projects/project-01/hero-front.webp',
    secondaryPreviewImage: '/images/projects/project-01/lifestyle-sidewalk.webp',
    statusTag: 'Self-Initiated Concept Campaign',
    clientType: 'Contemporary D2C Apparel Brand',
    creativeConcept: 'Elevating an oversized vintage graphic tee into an international streetwear lookbook with urban attitude and natural sunlight.',
    visualDirection: 'Sunlit sidewalk chiaroscuro, desaturated tones, cinematic 35mm depth of field.',
    lightingSetup: 'Golden hour sun with studio rim lights for drop-shoulder sculpting.',
    colorPalette: ['#171719', '#e8e8e3', '#9c9285', '#3f4247', '#d88b48'],
    deliverables: [
      'Front Hero Portrait',
      'Sidewalk Lifestyle Shot',
      'Back Graphic View',
      'Street Editorial with Sunglasses',
      'Collar & Stitching Detail'
    ],
    beforeAfterComparison: {
      beforeUrl: '/images/projects/project-01/reference-raw.webp',
      afterUrl: '/images/projects/project-01/hero-front.webp',
      beforeLabel: 'Client Product Reference',
      afterLabel: 'MODEPIXEL Campaign Production',
      caption: 'E-commerce flat → cinematic street editorial.'
    },
    gallery: [
      {
        id: 'p1-1',
        url: '/images/projects/project-01/hero-front.webp',
        title: 'Front Hero Portrait',
        caption: 'Studio framing, drop-shoulder drape.',
        category: 'hero',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      },
      {
        id: 'p1-4',
        url: '/images/projects/project-01/back-view.webp',
        title: 'Back Graphic View',
        caption: '"Don\'t Give Up" typography on cotton.',
        category: 'back',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      },
      {
        id: 'p1-2',
        url: '/images/projects/project-01/lifestyle-sidewalk.webp',
        title: 'Sunlit Sidewalk Editorial',
        caption: 'Golden light across chest graphic.',
        category: 'lifestyle',
        aspectRatio: 'aspect-square',
        colSpan: 1
      },
      {
        id: 'p1-3',
        url: '/images/projects/project-01/street-sunglasses.webp',
        title: 'European Street Lifestyle',
        caption: 'Cobblestone editorial styling.',
        category: 'street',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      }
    ],
    detailShots: [
      {
        id: 'p1-d1',
        url: '/images/projects/project-01/portrait-detail.webp',
        title: 'Accessory & Collar Detail',
        caption: 'Dog tag chain, ribbed collar.',
        category: 'detail'
      },
      {
        id: 'p1-d2',
        url: '/images/projects/project-01/reference-concept.webp',
        title: 'Model Try-On Study',
        caption: 'Shoulder fit and silhouette check.',
        category: 'composition'
      }
    ]
  },
  {
    id: 'project-02-hoodie',
    number: '02',
    title: 'ICY OMBRÉ PLUSH KNIT HOODIE',
    subtitle: 'High-Texture Gradient Apparel Showcase',
    category: 'Luxury Knitwear / Outerwear',
    tag: 'Plush Outerwear Campaign',
    season: 'Fall / Winter Capsule',
    year: '2026',
    coverImage: '/images/projects/project-02/hero-front.webp',
    secondaryPreviewImage: '/images/projects/project-02/texture-macro.webp',
    statusTag: 'Self-Initiated Concept Campaign',
    clientType: 'Premium Independent Knitwear Label',
    creativeConcept: 'Spotlighting tactile fleece micro-textures and icy ombré transitions under cold-spectrum studio illumination.',
    visualDirection: 'Frosted backgrounds, sculptural drapery, extreme fiber definition.',
    lightingSetup: 'Broad softbox overhead with metallic side kickers for fleece pile.',
    colorPalette: ['#121824', '#7da8cc', '#cce5f7', '#f4f8fc', '#2b394a'],
    deliverables: [
      'Front Hero in Plush Ombré',
      'Back View Gradient Transition',
      'Macro Fiber Close-up',
      'Urban Streetwear Frame',
      'Full-Length Campaign Composition'
    ],
    beforeAfterComparison: {
      beforeUrl: '/images/projects/project-02/reference-raw.webp',
      afterUrl: '/images/projects/project-02/hero-front.webp',
      beforeLabel: 'Client Garment Photo',
      afterLabel: 'MODEPIXEL Campaign Production',
      caption: 'Flat snapshot → hyper-realistic plush knitwear hero.'
    },
    gallery: [
      {
        id: 'p2-1',
        url: '/images/projects/project-02/hero-front.webp',
        title: 'Plush Ombré Front Portrait',
        caption: 'Fleece density, kangaroo pocket detail.',
        category: 'hero',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      },
      {
        id: 'p2-2',
        url: '/images/projects/project-02/back-view.webp',
        title: 'Gradient Back Silhouette',
        caption: 'White-to-blue ombré transition.',
        category: 'back',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      },
      {
        id: 'p2-3',
        url: '/images/projects/project-02/urban-portrait.webp',
        title: 'Modern Urban Character',
        caption: 'Minimalist styling and accessories.',
        category: 'lifestyle',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      },
      {
        id: 'p2-4',
        url: '/images/projects/project-02/campaign-full.webp',
        title: 'Full-Length Campaign Editorial',
        caption: 'Full-body luxury streetwear presence.',
        category: 'street',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      }
    ],
    detailShots: [
      {
        id: 'p2-d1',
        url: '/images/projects/project-02/texture-macro.webp',
        title: 'Fiber Texture Macro',
        caption: 'Brushed sherpa yarn loops close-up.',
        category: 'macro'
      },
      {
        id: 'p2-d2',
        url: '/images/projects/project-02/reference-concept.webp',
        title: 'Volumetric Study',
        caption: 'Hood drop and fabric weight check.',
        category: 'detail'
      }
    ]
  },
  {
    id: 'project-03-footwear',
    number: '03',
    title: 'ARCHITECTURAL KINETIC SNEAKER',
    subtitle: 'Technical Luxury Footwear Campaign',
    category: 'Footwear & Hardware',
    tag: 'Technical Sneaker Campaign',
    season: 'Spring / Summer Lookbook',
    year: '2026',
    coverImage: '/images/projects/project-03/hero-sneaker.webp',
    secondaryPreviewImage: '/images/projects/project-03/sole-detail.webp',
    statusTag: 'Self-Initiated Concept Campaign',
    clientType: 'High-Performance Luxury Sneaker House',
    creativeConcept: 'Presenting a sculpted luxury sneaker as an industrial design masterpiece on volcanic basalt.',
    visualDirection: 'Dark studio, razor-sharp edges, wet obsidian reflections.',
    lightingSetup: 'Dual-edge rim lighting in cyan and tungsten accent.',
    colorPalette: ['#0b0c10', '#1f2833', '#c5a880', '#45a29e', '#e5e5e5'],
    deliverables: [
      'Hero Architectural Studio Shot',
      'Outsole & Tread Detail',
      'Leather & Topstitching Macro',
      'On-Foot Urban Editorial'
    ],
    gallery: [
      {
        id: 'p3-1',
        url: '/images/projects/project-03/hero-sneaker.webp',
        title: 'Basalt Plinth Hero',
        caption: 'Sculptural hero on volcanic stone.',
        category: 'hero',
        aspectRatio: 'aspect-[4/3]',
        colSpan: 2
      },
      {
        id: 'p3-2',
        url: '/images/projects/project-03/sole-detail.webp',
        title: 'Outsole Architecture',
        caption: 'Tread grip and carbon-arch detail.',
        category: 'sole',
        aspectRatio: 'aspect-square',
        colSpan: 1
      },
      {
        id: 'p3-3',
        url: '/images/projects/project-03/onfoot-lifestyle.webp',
        title: 'On-Foot Lifestyle',
        caption: 'Wet asphalt editorial capture.',
        category: 'lifestyle',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      }
    ],
    detailShots: [
      {
        id: 'p3-d1',
        url: '/images/projects/project-03/material-stitching.webp',
        title: 'Leather & Topstitching',
        caption: 'Double-stitched panels and titanium eyelets.',
        category: 'detail'
      }
    ]
  },
  {
    id: 'project-04-beauty',
    number: '04',
    title: 'MODEPIXEL ESSENCE — BOTANICAL SERUM',
    subtitle: 'Luxury Skincare Hero & Ingredient Campaign',
    category: 'Beauty & Skincare',
    tag: 'Luxury Beauty Campaign',
    season: 'Signature Product Launch',
    year: '2026',
    coverImage: '/images/projects/project-04/hero-serum.webp',
    secondaryPreviewImage: '/images/projects/project-04/ingredients-composition.webp',
    statusTag: 'Self-Initiated Concept Campaign',
    clientType: 'Prestige Botanical Skincare Brand',
    creativeConcept: 'Ethereal beauty campaign communicating organic potency through dark reflections and golden lighting.',
    visualDirection: 'Deep chiaroscuro, amber translucency, botanical elements.',
    lightingSetup: 'Golden backlit illumination with soft front feather fill.',
    colorPalette: ['#0d0c0b', '#2c1e13', '#c98a3c', '#d8aa60', '#f4ecd8'],
    deliverables: [
      'Obsidian Slab Hero Shot',
      'Botanical Ingredient Composition',
      'Pipette Dropper Macro',
      'Editorial Beauty Portrait'
    ],
    gallery: [
      {
        id: 'p4-1',
        url: '/images/projects/project-04/hero-serum.webp',
        title: 'Hero on Obsidian Plinth',
        caption: 'Amber luminescence on dark basalt.',
        category: 'hero',
        aspectRatio: 'aspect-[4/3]',
        colSpan: 2
      },
      {
        id: 'p4-2',
        url: '/images/projects/project-04/ingredients-composition.webp',
        title: 'Botanical & Mineral Origin',
        caption: 'Golden immortelle and amber resin.',
        category: 'composition',
        aspectRatio: 'aspect-square',
        colSpan: 1
      },
      {
        id: 'p4-3',
        url: '/images/projects/project-04/editorial-model.webp',
        title: 'Editorial Campaign Portrait',
        caption: 'Dewy skin and product interaction.',
        category: 'lifestyle',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      }
    ],
    detailShots: [
      {
        id: 'p4-d1',
        url: '/images/projects/project-04/macro-dropper.webp',
        title: 'Pipette Droplet Macro',
        caption: 'Golden liquid surface tension.',
        category: 'macro'
      }
    ]
  }
];
