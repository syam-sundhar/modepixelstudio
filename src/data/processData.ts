import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'SHARE YOUR PRODUCT',
    subtitle: 'Asset Collection & Quality Check',
    description: 'You send clear photographs of your actual garment or product, along with vector logos, brand typography, and any moodboard references you love. No high-end camera needed — clean smartphone photos work brilliantly as references.',
    clientRequirement: 'Provide front & back photos, fabric close-up, and original graphic files.',
    deliverables: ['Intake verification', 'Product geometry analysis', 'Initial styling alignment'],
    timeline: 'Day 1'
  },
  {
    number: '02',
    title: 'DEVELOP THE CONCEPT',
    subtitle: 'Art Direction & Moodboard Alignment',
    description: 'We establish the visual direction, selecting model demographics, hair, makeup, lighting setup (sunlit street, dark studio, warm sunset), and architectural backdrops that amplify your brand identity.',
    clientRequirement: 'Review and approve the creative treatment direction before production.',
    deliverables: ['Moodboard mood sheet', 'Model casting palette', 'Camera perspective plan'],
    timeline: 'Day 1 — 2'
  },
  {
    number: '03',
    title: 'CREATE THE CAMPAIGN',
    subtitle: 'AI Synthesis, Accuracy Check & Retouching',
    description: 'We generate initial candidate images, rigorously verify product fidelity (logos, seam locations, fabric weave, proportions), and refine the finest compositions through post-production digital retouching.',
    clientRequirement: 'Select your preferred hero angles from the watermarked preview set.',
    deliverables: ['High-resolution candidate generation', 'Fidelity inspection', 'Retouching & grading'],
    timeline: 'Day 2 — 4'
  },
  {
    number: '04',
    title: 'FINAL DELIVERY',
    subtitle: 'Commercial Master Files & Assets',
    description: 'You review the refined previews and complete final approval. We package the full-resolution uncompressed master images, social media cutouts, and commercial usage documentation in an organized cloud vault.',
    clientRequirement: 'Final sign-off and balance completion.',
    deliverables: ['Full-resolution TIFF/PNG files', '4:5, 9:16, 1:1 social crops', 'Cloud archive link'],
    timeline: 'Day 4 — 5'
  }
];

export const CLIENT_CHECKLIST = [
  { item: 'Front product photograph (flat or mannequin)', required: true },
  { item: 'Back product photograph (showing graphics & collar)', required: true },
  { item: 'Side silhouette photograph', required: false },
  { item: 'Fabric texture and seam close-up', required: false },
  { item: 'Original vector logo / graphic print artwork (PNG/SVG)', required: true },
  { item: 'Target customer / preferred model styling cues', required: false },
  { item: 'Desired background / mood references', required: false }
];
