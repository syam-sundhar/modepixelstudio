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
    coverImage: '/images/projects/project-01/hero-front.png',
    secondaryPreviewImage: '/images/projects/project-01/lifestyle-sidewalk.png',
    statusTag: 'Self-Initiated Concept Campaign',
    clientType: 'Contemporary D2C Apparel Brand',
    creativeConcept: 'Demonstrate how an oversized vintage graphic T-shirt with heavy typography can be elevated from flat e-commerce photos into an international streetwear lookbook, capturing urban attitude, natural sunlight, and tactile fabric drape without booking a physical European on-location crew.',
    visualDirection: 'Natural sunlit sidewalk chiaroscuro, desaturated architectural tones, cinematic 35mm lens depth of field, neutral European cobblestone textures, and tactile heavyweight cotton texture preservation.',
    lightingSetup: 'High-contrast golden hour exterior sun paired with low-key studio rim lights to sculpt the drop-shoulder silhouette.',
    colorPalette: ['#171719', '#e8e8e3', '#9c9285', '#3f4247', '#d88b48'],
    deliverables: [
      'Front-facing Hero Commercial Portrait',
      'Sunlit Sidewalk Lifestyle Campaign Shot',
      'Studio Typography & Back Graphic Shot ("Don\'t Give Up")',
      'European Fashion Street On-Model Shot with Sunglasses',
      'Close-up Dog Tag & Collar Stitching Detail'
    ],
    beforeAfterComparison: {
      beforeUrl: '/images/projects/project-01/reference-raw.jpg',
      afterUrl: '/images/projects/project-01/hero-front.png',
      beforeLabel: 'Client Product Reference (E-Commerce Flat)',
      afterLabel: 'MODEPIXEL Final AI Campaign Production',
      caption: 'From a standard e-commerce garment flat into a high-fashion, mood-driven European street editorial.'
    },
    gallery: [
      {
        id: 'p1-1',
        url: '/images/projects/project-01/hero-front.png',
        title: 'Front Hero Portrait',
        caption: 'Minimalist studio framing focusing on neckline tension, garment proportion, and drop-shoulder drape.',
        category: 'hero',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 2
      },
      {
        id: 'p1-2',
        url: '/images/projects/project-01/lifestyle-sidewalk.png',
        title: 'Sunlit Sidewalk Editorial',
        caption: 'Dynamic outdoor lookbook framing with golden raking light across chest graphic typography.',
        category: 'lifestyle',
        aspectRatio: 'aspect-square',
        colSpan: 1
      },
      {
        id: 'p1-3',
        url: '/images/projects/project-01/street-sunglasses.png',
        title: 'European Street Lifestyle',
        caption: '35mm focal perspective on cobblestone architecture capturing contemporary editorial styling.',
        category: 'street',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      },
      {
        id: 'p1-4',
        url: '/images/projects/project-01/back-view.png',
        title: 'Studio Back Graphic Perspective',
        caption: 'Back graphic integrity: "Don’t Give Up" typography placement faithfully rendered on heavy cotton jersey.',
        category: 'back',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 2
      }
    ],
    detailShots: [
      {
        id: 'p1-d1',
        url: '/images/projects/project-01/portrait-detail.png',
        title: 'Accessory & Collar Detail',
        caption: 'Charcoal streetwear portrait with dog tag chain, showing ribbed collar construction and natural skin texture.',
        category: 'detail'
      },
      {
        id: 'p1-d2',
        url: '/images/projects/project-01/reference-concept.png',
        title: 'Fitting & Model Try-On Study',
        caption: 'Iterative virtual styling checkpoint verifying shoulder fit, drop length, and torso silhouette alignment.',
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
    coverImage: '/images/projects/project-02/hero-front.png',
    secondaryPreviewImage: '/images/projects/project-02/texture-macro.png',
    statusTag: 'Self-Initiated Concept Campaign',
    clientType: 'Premium Independent Knitwear Label',
    creativeConcept: 'Elevate a plush gradient fleece hoodie by spotlighting tactile sensorial fleece micro-textures, delicate icy blue-to-white ombré color transitions, and relaxed high-fashion silhouette styling under controlled cold-spectrum studio illumination.',
    visualDirection: 'Subtle high-key coolness, frosted slate backgrounds, sculptural drapery, extreme tactile fiber definition, and editorial model calm.',
    lightingSetup: 'Broad softbox diffuse overhead illumination with sharp metallic side specular kickers to emphasize fuzzy fleece pile.',
    colorPalette: ['#121824', '#7da8cc', '#cce5f7', '#f4f8fc', '#2b394a'],
    deliverables: [
      'Front Hero Studio Portrait in Plush Ombré',
      'Fluffy Back View Showing Gradient Transition',
      'Macro Fiber & Texture Close-up Photography',
      'Urban Architectural Streetwear Lookbook Frame',
      'Full-Length Campaign Editorial Composition'
    ],
    beforeAfterComparison: {
      beforeUrl: '/images/projects/project-02/reference-raw.jpg',
      afterUrl: '/images/projects/project-02/hero-front.png',
      beforeLabel: 'Client Garment Photo (Raw Reference)',
      afterLabel: 'MODEPIXEL Campaign Production',
      caption: 'Translating a flat product snapshot into a tactile, hyper-realistic plush knitwear hero photograph.'
    },
    gallery: [
      {
        id: 'p2-1',
        url: '/images/projects/project-02/hero-front.png',
        title: 'Plush Blue Ombré Front Portrait',
        caption: 'Atmospheric front-facing portrait capturing plush fleece density, kangaroo pocket ribbing, and soft ombré gradient.',
        category: 'hero',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 2
      },
      {
        id: 'p2-2',
        url: '/images/projects/project-02/back-view.png',
        title: 'Gradient Back Silhouette',
        caption: 'Back view emphasizing the seamless ombre transition from icy white shoulder yoke to sky-blue waistband.',
        category: 'back',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      },
      {
        id: 'p2-3',
        url: '/images/projects/project-02/urban-portrait.png',
        title: 'Modern Urban Character',
        caption: 'Contemporary model styling matching the garment with minimalist tailored accessories.',
        category: 'lifestyle',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      },
      {
        id: 'p2-4',
        url: '/images/projects/project-02/campaign-full.png',
        title: 'Full-Length Campaign Editorial',
        caption: 'Cinematic full-body presentation balancing architectural proportion and luxury streetwear presence.',
        category: 'street',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 2
      }
    ],
    detailShots: [
      {
        id: 'p2-d1',
        url: '/images/projects/project-02/texture-macro.png',
        title: 'Icy Blue-to-White Fiber Macro',
        caption: 'Extreme close-up revealing individual brushed sherpa yarn loops, color depth, and tactile plush softness.',
        category: 'macro'
      },
      {
        id: 'p2-d2',
        url: '/images/projects/project-02/reference-concept.png',
        title: 'Garment Form & Volumetric Study',
        caption: 'Pre-production volumetric evaluation checking hood drop, fabric weight simulation, and seam integrity.',
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
    coverImage: '/images/projects/project-03/hero-sneaker.jpg',
    secondaryPreviewImage: '/images/projects/project-03/sole-detail.jpg',
    statusTag: 'Self-Initiated Concept Campaign',
    clientType: 'High-Performance Luxury Sneaker House',
    creativeConcept: 'Present a sculpted luxury sneaker as an industrial design masterpiece, contrasting volcanic basalt stone plinths with precision titanium hardware, ballistic mesh textures, and dynamic sole grip architecture.',
    visualDirection: 'Minimal dark architectural studio, razor-sharp edge definition, wet obsidian reflections, dramatic low-angle perspective, and textural contrast between raw stone and engineered polymers.',
    lightingSetup: 'Dual-edge rim lighting in cool metallic cyan and warm tungsten accent to reveal contour ridges and carbon fiber arch geometry.',
    colorPalette: ['#0b0c10', '#1f2833', '#c5a880', '#45a29e', '#e5e5e5'],
    deliverables: [
      'Hero Low-Angle Architectural Studio Shot on Basalt Plinth',
      'Macro Technical Outsole & Tread Geometry Photography',
      'Extreme Close-Up: Italian Full-Grain Leather & Topstitching',
      'Reflective Wet Pavement On-Foot Urban Lifestyle Editorial'
    ],
    gallery: [
      {
        id: 'p3-1',
        url: '/images/projects/project-03/hero-sneaker.jpg',
        title: 'Architectural Basalt Plinth Hero',
        caption: 'Low-angle sculptural hero composition capturing upper mesh geometry, metallic hardware, and sole cantilever.',
        category: 'hero',
        aspectRatio: 'aspect-[4/3]',
        colSpan: 2
      },
      {
        id: 'p3-2',
        url: '/images/projects/project-03/sole-detail.jpg',
        title: 'Outsole & Tread Architecture',
        caption: 'Tread grip pods and carbon-arch bridge illuminated by precision raking rim lights.',
        category: 'sole',
        aspectRatio: 'aspect-square',
        colSpan: 1
      },
      {
        id: 'p3-3',
        url: '/images/projects/project-03/onfoot-lifestyle.jpg',
        title: 'On-Foot Streetwear Lifestyle',
        caption: 'Reflective wet asphalt editorial capture pairing the technical sneaker with relaxed tailored trousers.',
        category: 'lifestyle',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      }
    ],
    detailShots: [
      {
        id: 'p3-d1',
        url: '/images/projects/project-03/material-stitching.jpg',
        title: 'Full-Grain Leather & Topstitching',
        caption: 'Macro lens examination of double-stitched leather panels, ballistic mesh weave, and polished titanium eyelets.',
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
    coverImage: '/images/projects/project-04/hero-serum.jpg',
    secondaryPreviewImage: '/images/projects/project-04/ingredients-composition.jpg',
    statusTag: 'Self-Initiated Concept Campaign',
    clientType: 'Prestige Botanical Skincare Brand',
    creativeConcept: 'Craft an ethereal, hyper-tactile beauty campaign communicating organic potency through dark basalt stone reflections, floating botanical elements, golden honey-toned lighting, and microscopic liquid refraction.',
    visualDirection: 'Deep chiaroscuro contrast, glowing amber liquid translucency, delicate mist particles, organic dried immortelle botanicals, and luminous human skin radiance.',
    lightingSetup: 'Warm golden backlit illumination through glass bottle combined with soft front feather fill on dewy model skin.',
    colorPalette: ['#0d0c0b', '#2c1e13', '#c98a3c', '#d8aa60', '#f4ecd8'],
    deliverables: [
      'Obsidian Slab Hero Product Shot with Water Droplets',
      'Ingredient-Inspired Botanical Composition with Golden Immortelle',
      'Macro Pipette Dropper Liquid Refraction Close-up',
      'High-Fashion Chiaroscuro Editorial Beauty Model Portrait'
    ],
    gallery: [
      {
        id: 'p4-1',
        url: '/images/projects/project-04/hero-serum.jpg',
        title: 'Product Hero on Obsidian Plinth',
        caption: 'Amber glass luminescence and crisp micro-droplets on reflective dark basalt stone.',
        category: 'hero',
        aspectRatio: 'aspect-[4/3]',
        colSpan: 2
      },
      {
        id: 'p4-2',
        url: '/images/projects/project-04/ingredients-composition.jpg',
        title: 'Botanical & Mineral Origin',
        caption: 'Stylized pairing with golden immortelle flowers and raw amber resin under subtle atmospheric mist.',
        category: 'composition',
        aspectRatio: 'aspect-square',
        colSpan: 1
      },
      {
        id: 'p4-3',
        url: '/images/projects/project-04/editorial-model.jpg',
        title: 'Editorial Campaign Portrait',
        caption: 'High-fashion model portrait exhibiting radiant dewy skin and intimate product interaction.',
        category: 'lifestyle',
        aspectRatio: 'aspect-[3/4]',
        colSpan: 1
      }
    ],
    detailShots: [
      {
        id: 'p4-d1',
        url: '/images/projects/project-04/macro-dropper.jpg',
        title: 'Pipette Droplet Viscosity Macro',
        caption: 'Extreme optical magnification capturing golden liquid surface tension, micro bubbles, and crystal refraction.',
        category: 'macro'
      }
    ]
  }
];
