import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Project, ProjectImage } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateProject: (direction: 'next' | 'prev') => void;
  onStartSimilarProject: (category: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNavigateProject,
  onStartSimilarProject,
}) => {
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<ProjectImage | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedLightboxImage) {
          setSelectedLightboxImage(null);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight' && !selectedLightboxImage) {
        onNavigateProject('next');
      } else if (e.key === 'ArrowLeft' && !selectedLightboxImage) {
        onNavigateProject('prev');
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, selectedLightboxImage, onClose, onNavigateProject]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#08080a]/95 backdrop-blur-2xl"
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-12 py-4 bg-[#08080a]/85 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center space-x-4">
            <span className="font-mono text-xs tracking-widest text-[#d4ff00]">
              CASE STUDY // {project.number}
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
            <span className="hidden sm:inline-block font-sans text-xs tracking-wider text-[#a1a1aa] uppercase">
              {project.category}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Prev / Next Navigation buttons */}
            <div className="flex items-center space-x-1 pr-3 border-r border-white/10">
              <button
                onClick={() => onNavigateProject('prev')}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors duration-200"
                title="Previous Project (Left Arrow)"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigateProject('next')}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors duration-200"
                title="Next Project (Right Arrow)"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close Modal button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-[#d4ff00] text-white hover:text-black transition-colors duration-200"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Case Study Content Container */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-16 flex flex-col space-y-20 md:space-y-24">
          
          {/* 1. Campaign Cover & Hero Header */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00] font-mono text-[10px] tracking-wider uppercase font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {project.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#a1a1aa] font-mono text-[10px] tracking-wider uppercase">
                {project.season} · {project.year}
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 font-mono text-[10px] tracking-wider uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#d4ff00]" />
                {project.statusTag}
              </span>
            </div>

            {/* Campaign Name */}
            <div>
              <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.98] mb-3">
                {project.title}
              </h1>
              <p className="font-sans text-lg sm:text-xl text-[#9b9ba3] font-light max-w-2xl">
                {project.subtitle}
              </p>
            </div>

            {/* Full-bleed Campaign Cover Frame - Adaptive & Fully Visible Without Cropping */}
            <div className="relative w-full min-h-[380px] sm:min-h-[480px] max-h-[82vh] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07070a] shadow-2xl flex items-center justify-center p-3 sm:p-6">
              {/* Ambient Blurred Backdrop for Luxury Glow */}
              <div
                className="absolute inset-0 opacity-20 filter blur-3xl scale-125 pointer-events-none"
                style={{
                  backgroundImage: `url(${project.coverImage})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
              
              <img
                src={project.coverImage}
                alt={project.title}
                className="relative z-10 max-h-[72vh] md:max-h-[76vh] w-auto h-auto max-w-full object-contain mx-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-[0.96]"
                loading="eager"
                decoding="async"
              />
              
              <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 pointer-events-none z-20">
                <span className="font-mono text-[11px] tracking-widest text-[#d4ff00] block mb-1">
                  OFFICIAL HERO FRAME
                </span>
                <span className="font-editorial text-2xl md:text-3xl text-white">
                  {project.title}
                </span>
              </div>
            </div>
          </div>

          {/* 4 & 5. Creative Concept, Visual Direction & Setup Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 pt-8 border-t border-white/[0.08]">
            {/* Left Column: Creative Concept */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase">
                // 04 CREATIVE CONCEPT
              </span>
              <p className="font-sans text-lg md:text-xl text-[#e5e5ea] font-light leading-relaxed">
                {project.creativeConcept}
              </p>

              <div className="pt-4">
                <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase block mb-3">
                  // 05 VISUAL DIRECTION
                </span>
                <p className="font-sans text-base text-[#9b9ba3] leading-relaxed font-light">
                  {project.visualDirection}
                </p>
              </div>

              {/* Lighting Setup */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-[11px] tracking-wider text-[#d4ff00] uppercase block mb-1.5 font-semibold">
                  LIGHTING & CAMERA ARCHITECTURE
                </span>
                <p className="font-mono text-xs text-[#a1a1aa] leading-normal">
                  {project.lightingSetup}
                </p>
              </div>
            </div>

            {/* Right Column: Specifications & Deliverables */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:pl-6 lg:border-l border-white/[0.08]">
              <div>
                <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase block mb-2">
                  TARGET INDUSTRY / CLIENT
                </span>
                <span className="text-white font-medium text-base">
                  {project.clientType}
                </span>
              </div>

              {/* Color Palette Swatches */}
              <div>
                <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase block mb-3">
                  CAMPAIGN COLOR PALETTE
                </span>
                <div className="flex items-center space-x-2">
                  {project.colorPalette.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-1">
                      <div
                        className="w-10 h-10 rounded-lg border border-white/20 shadow-inner"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                      <span className="font-mono text-[9px] text-[#71717a]">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign Deliverables */}
              <div>
                <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase block mb-3">
                  DELIVERABLE SPECIFICATIONS
                </span>
                <ul className="space-y-2">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#c5c5d0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Draggable Before & After Comparison Slider */}
          {project.beforeAfterComparison && (
            <div className="flex flex-col space-y-6 pt-8 border-t border-white/[0.08]">
              <div className="flex flex-col space-y-2">
                <span className="font-mono text-xs tracking-widest text-[#d4ff00] uppercase">
                  // PRODUCT REFERENCE TRANSFORMATION
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-white">
                  RAW INPUT VERSUS FINAL PRODUCTION
                </h3>
                <p className="font-sans text-sm text-[#9b9ba3] max-w-xl font-light">
                  Drag the center divider to inspect how ordinary flat garment references are transformed into cinematic on-model campaign photographs while maintaining 100% product fidelity.
                </p>
              </div>

              <BeforeAfterSlider
                beforeUrl={project.beforeAfterComparison.beforeUrl}
                afterUrl={project.beforeAfterComparison.afterUrl}
                beforeLabel={project.beforeAfterComparison.beforeLabel}
                afterLabel={project.beforeAfterComparison.afterLabel}
                caption={project.beforeAfterComparison.caption}
              />
            </div>
          )}

          {/* 6. Full-Resolution Image Gallery */}
          <div className="flex flex-col space-y-8 pt-8 border-t border-white/[0.08]">
            <div className="flex flex-col space-y-2">
              <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase">
                // 06 FULL-RESOLUTION IMAGE GALLERY
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white">
                CAMPAIGN EXHIBITION ANGLES
              </h3>
            </div>

            {/* Asymmetric Gallery Grid with Smooth Zoom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {project.gallery.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedLightboxImage(image)}
                  className={`group relative rounded-xl overflow-hidden bg-[#0c0c10] border border-white/[0.08] cursor-pointer hover:border-[#d4ff00]/40 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    image.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <div className={`w-full ${image.aspectRatio || 'aspect-[4/5]'} bg-[#07070a] overflow-hidden flex items-center justify-center relative`}>
                    <div
                      className="absolute inset-0 opacity-15 filter blur-2xl scale-125 pointer-events-none"
                      style={{
                        backgroundImage: `url(${image.url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                      }}
                    />
                    <img
                      src={image.url}
                      alt={image.title}
                      className="relative z-10 w-full h-full max-h-[72vh] object-contain transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Caption Bar */}
                  <div className="p-4 bg-[#0a0a0d] border-t border-white/[0.05] flex items-center justify-between">
                    <div>
                      <h4 className="font-sans text-sm font-medium text-white group-hover:text-[#d4ff00] transition-colors duration-200">
                        {image.title}
                      </h4>
                      <p className="font-mono text-[11px] text-[#71717a] mt-0.5">
                        {image.caption}
                      </p>
                    </div>
                    <span className="font-mono text-[9px] text-[#a1a1aa] uppercase px-2 py-1 rounded bg-white/[0.04]">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Product Detail & Macro Photography */}
          {project.detailShots.length > 0 && (
            <div className="flex flex-col space-y-8 pt-8 border-t border-white/[0.08]">
              <div className="flex flex-col space-y-2">
                <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase">
                  // 07 PRODUCT DETAIL & MACRO PHOTOGRAPHY
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-white">
                  FABRIC, TEXTURE & GRAPHIC FIDELITY
                </h3>
                <p className="font-sans text-sm text-[#9b9ba3] max-w-xl font-light">
                  Commercial fashion photography relies on convincing tactile textures — from brushed fleece fibers and heavy rib stitching to sharp vector print boundaries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.detailShots.map((detail) => (
                  <div
                    key={detail.id}
                    onClick={() => setSelectedLightboxImage(detail)}
                    className="group relative rounded-xl overflow-hidden bg-[#0c0c10] border border-white/[0.08] cursor-pointer hover:border-white/20 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <div className="w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-[#07070a] flex items-center justify-center relative">
                      <div
                        className="absolute inset-0 opacity-15 filter blur-xl scale-125 pointer-events-none"
                        style={{
                          backgroundImage: `url(${detail.url})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover'
                        }}
                      />
                      <img
                        src={detail.url}
                        alt={detail.title}
                        className="relative z-10 w-full h-full object-contain transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-4 bg-[#0a0a0d] border-t border-white/[0.05]">
                      <h4 className="font-sans text-sm font-medium text-white">
                        {detail.title}
                      </h4>
                      <p className="font-mono text-[11px] text-[#71717a] mt-0.5">
                        {detail.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. Final Campaign Presentation & Next Steps */}
          <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-mono text-xs tracking-widest text-[#d4ff00] uppercase block mb-2">
                // 08 READY TO COMMENCE
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white mb-3">
                WANT A SIMILAR CAMPAIGN FOR YOUR PRODUCT?
              </h3>
              <p className="font-sans text-sm text-[#9b9ba3] font-light">
                Provide your product photos, target mood, and garment specs. We deliver campaign-ready commercial photographs within 3–5 business days.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onStartSimilarProject(project.category);
              }}
              className="px-8 py-4 rounded-full bg-[#d4ff00] hover:bg-white text-black font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_24px_rgba(212,255,0,0.22)] flex items-center space-x-2 shrink-0"
            >
              <span>COMMISSION THIS STYLE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Footer Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-white/[0.08] font-mono text-xs">
            <button
              onClick={() => onNavigateProject('prev')}
              className="flex items-center space-x-2 text-[#9b9ba3] hover:text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREVIOUS CAMPAIGN</span>
            </button>
            <button
              onClick={onClose}
              className="text-[#71717a] hover:text-[#d4ff00] transition-colors duration-200"
            >
              BACK TO PORTFOLIO
            </button>
            <button
              onClick={() => onNavigateProject('next')}
              className="flex items-center space-x-2 text-[#9b9ba3] hover:text-white transition-colors duration-200"
            >
              <span>NEXT CAMPAIGN</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Lightbox Modal for Full-Resolution Inspection */}
        <AnimatePresence>
          {selectedLightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-60 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 md:p-10 cursor-zoom-out"
              onClick={() => setSelectedLightboxImage(null)}
            >
              <button
                onClick={() => setSelectedLightboxImage(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#d4ff00] text-white hover:text-black transition-colors duration-200"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className="max-w-5xl max-h-[85vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedLightboxImage.url}
                  alt={selectedLightboxImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10 shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <h4 className="font-editorial text-2xl text-white">
                    {selectedLightboxImage.title}
                  </h4>
                  <p className="font-mono text-xs text-[#9b9ba3] mt-1">
                    {selectedLightboxImage.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
