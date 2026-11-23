import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';
import { Project, ProjectImage } from '../types';

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

  // Gather the 4 output images for the transformation block
  const outputImages = project.gallery.slice(0, 4);
  const hasTransformation = !!project.beforeAfterComparison;

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
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-16 flex flex-col space-y-16 md:space-y-20">
          
          {/* 1. Title Header — Minimal */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00] font-mono text-[10px] tracking-wider uppercase font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {project.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#a1a1aa] font-mono text-[10px] tracking-wider uppercase">
                {project.season} · {project.year}
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.98]">
              {project.title}
            </h1>
            <p className="font-sans text-lg text-[#9b9ba3] font-light max-w-xl">
              {project.subtitle}
            </p>
          </div>

          {/* 2. INPUT → OUTPUTS Transformation Block */}
          {hasTransformation ? (
            <div className="flex flex-col space-y-6">
              {/* Section Label */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-[#d4ff00] uppercase">
                  // TRANSFORMATION
                </span>
                <div className="flex-1 h-px bg-white/[0.08]" />
              </div>

              {/* Input → Outputs Layout */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                
                {/* INPUT Card */}
                <div className="lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col items-center">
                  <div className="relative w-full rounded-xl overflow-hidden border-2 border-white/[0.12] bg-[#0c0c10] group cursor-pointer"
                       onClick={() => setSelectedLightboxImage({
                         id: 'input-ref',
                         url: project.beforeAfterComparison!.beforeUrl,
                         title: 'Client Reference',
                         caption: project.beforeAfterComparison!.beforeLabel,
                         category: 'detail'
                       })}
                  >
                    {/* INPUT Badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-3 py-1.5 rounded-md bg-white/90 text-black font-mono text-[10px] tracking-widest uppercase font-bold shadow-lg">
                        INPUT
                      </span>
                    </div>
                    <img
                      src={project.beforeAfterComparison!.beforeUrl}
                      alt="Client Reference Input"
                      className="w-full h-auto block object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <span className="mt-3 font-mono text-[11px] text-[#71717a] tracking-wide text-center">
                    CLIENT REFERENCE PHOTO
                  </span>
                </div>

                {/* Arrow Connector */}
                <div className="flex items-center justify-center lg:self-center py-2 lg:py-0">
                  {/* Mobile: horizontal arrow */}
                  <div className="flex items-center gap-2 text-[#d4ff00]">
                    <div className="w-8 h-px bg-[#d4ff00]/60 hidden lg:block" />
                    <ArrowRight className="w-6 h-6 lg:w-5 lg:h-5" />
                  </div>
                </div>

                {/* OUTPUT Cards Grid */}
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {outputImages.map((image, idx) => (
                      <div
                        key={image.id}
                        onClick={() => setSelectedLightboxImage(image)}
                        className="relative rounded-xl overflow-hidden border border-[#d4ff00]/20 bg-[#0c0c10] group cursor-pointer hover:border-[#d4ff00]/50 transition-[border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      >
                        {/* OUTPUT Badge — only on first */}
                        {idx === 0 && (
                          <div className="absolute top-3 left-3 z-20">
                            <span className="px-3 py-1.5 rounded-md bg-[#d4ff00] text-black font-mono text-[10px] tracking-widest uppercase font-bold shadow-lg">
                              OUTPUTS
                            </span>
                          </div>
                        )}
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-auto block object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pointer-events-none">
                          <span className="font-sans text-xs text-white/90 font-medium">
                            {image.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-3 font-mono text-[11px] text-[#71717a] tracking-wide block text-center lg:text-left">
                    AI-GENERATED CAMPAIGN PHOTOGRAPHS
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Projects without before/after (03, 04): Show all outputs in a clean grid */
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-[#d4ff00] uppercase">
                  // AI-GENERATED CAMPAIGN
                </span>
                <div className="flex-1 h-px bg-white/[0.08]" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {outputImages.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => setSelectedLightboxImage(image)}
                    className="relative rounded-xl overflow-hidden border border-[#d4ff00]/20 bg-[#0c0c10] group cursor-pointer hover:border-[#d4ff00]/50 transition-[border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-auto block object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pointer-events-none">
                      <span className="font-sans text-xs text-white/90 font-medium">
                        {image.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Detail & Macro Photography — Compact */}
          {project.detailShots.length > 0 && (
            <div className="flex flex-col space-y-6 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-[#71717a] uppercase">
                  // DETAIL & TEXTURE
                </span>
                <div className="flex-1 h-px bg-white/[0.08]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                {project.detailShots.map((detail) => (
                  <div
                    key={detail.id}
                    onClick={() => setSelectedLightboxImage(detail)}
                    className="group relative rounded-xl overflow-hidden bg-[#0c0c10] border border-white/[0.08] cursor-pointer hover:border-[#d4ff00]/40 transition-[border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <img
                      src={detail.url}
                      alt={detail.title}
                      className="w-full h-auto block object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-3 bg-[#0a0a0d] border-t border-white/[0.05]">
                      <h4 className="font-sans text-sm font-medium text-white group-hover:text-[#d4ff00] transition-colors duration-200">
                        {detail.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. CTA — Start a similar project */}
          <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-mono text-xs tracking-widest text-[#d4ff00] uppercase block mb-2">
                // READY TO START
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white mb-3">
                WANT THIS FOR YOUR PRODUCT?
              </h3>
              <p className="font-sans text-sm text-[#9b9ba3] font-light">
                Send us your product photos and we'll deliver campaign-ready images within 3–5 business days.
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
              <span>PREVIOUS</span>
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
              <span>NEXT</span>
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
