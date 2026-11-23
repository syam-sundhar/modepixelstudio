import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'SEND REFERENCES',
    subtitle: 'Asset Collection & Check',
    description: 'Share clean phone photos of your product, graphic prints, and preferred mood notes.',
    clientRequirement: 'Provide front & back photos and vector logos/graphics.',
    deliverables: ['Asset verification', 'Product fidelity check', 'Initial styling alignment'],
    timeline: 'Day 1'
  },
  {
    number: '02',
    title: 'ART DIRECTION',
    subtitle: 'Styling & Lighting Concept',
    description: 'We establish model casting, lighting architecture, and environments that amplify your brand.',
    clientRequirement: 'Approve the creative moodboard before production.',
    deliverables: ['Curated moodboard', 'Lighting & location setup', 'Shot perspective plan'],
    timeline: 'Day 1 — 2'
  },
  {
    number: '03',
    title: 'PRODUCTION',
    subtitle: 'Synthesis & Retouching',
    description: 'We generate initial candidate images, inspect garment details, and perform master retouching.',
    clientRequirement: 'Select your preferred hero angles from watermarked previews.',
    deliverables: ['Candidate generation', 'Fidelity inspection', 'Color grading & retouching'],
    timeline: 'Day 2 — 4'
  },
  {
    number: '04',
    title: 'FINAL DELIVERY',
    subtitle: 'Commercial Master Files',
    description: 'Receive full-resolution uncompressed master files, multi-platform crops, and commercial usage rights.',
    clientRequirement: 'Final sign-off and balance completion.',
    deliverables: ['Full-res master files', '4:5, 9:16 & 1:1 crops', 'Organized cloud vault link'],
    timeline: 'Day 4 — 5'
  }
];

export const CLIENT_CHECKLIST = [
  { item: 'Front product photo (flat or on hanger)', required: true },
  { item: 'Back product photo (showing graphics & collar)', required: true },
  { item: 'Original vector graphic/logo (PNG or SVG)', required: true },
  { item: 'Fabric texture or stitching close-up', required: false },
  { item: 'Preferred model styling or mood cues', required: false },
  { item: 'Target backdrop or architectural style', required: false }
];
