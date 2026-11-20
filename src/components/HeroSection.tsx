import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/config';

interface HeroSectionProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onStartProject,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setHasReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      if (hasReducedMotion) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasReducedMotion]);

  const { scrollY } = useScroll();
  const heroImageParallax = useTransform(scrollY, [0, 600], [0, 50]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#08080a] pt-24 pb-16"
    >
      {/* Background Visual Layer with Controlled, Subtle Cursor Parallax */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          y: heroImageParallax,
          opacity: heroOpacity,
        }}
      >
        {/* Parallax Hero Image Container */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          animate={{
            x: hasReducedMotion ? 0 : mousePosition.x * 6,
            y: hasReducedMotion ? 0 : mousePosition.y * 6,
            scale: 1.02,
          }}
          transition={{ type: 'spring', damping: 35, stiffness: 90 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/65 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-transparent to-[#08080a] z-10" />
          
          <img
            src="/images/projects/project-01/hero-front.webp"
            alt="MODEPIXEL Commercial AI Fashion Campaign Visual"
            className="w-full h-full object-cover object-top sm:object-center filter brightness-[0.72] contrast-[1.08] saturate-[0.95]"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </motion.div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col items-start justify-center min-h-[75vh]">
        
        {/* Small Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3 h-3 text-[#d4ff00]" />
          <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] text-[#d5d5e0] uppercase">
            INDEPENDENT CREATIVE STUDIO
          </span>
        </motion.div>

        {/* Large Editorial Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tight leading-[0.92] text-[#f7f7f5]"
          >
            PRODUCTS DESERVE<br />
            <span className="italic font-light text-white/95">BETTER STORIES.</span>
          </motion.h1>
        </div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-base sm:text-lg md:text-xl text-[#9b9ba3] font-light leading-relaxed mb-10"
        >
          {AGENCY_CONFIG.subline}
        </motion.p>

        {/* Actions CTAs with Smooth Easing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto"
        >
          {/* Primary CTA: EXPLORE OUR WORK */}
          <button
            onClick={onExploreWork}
            className="group relative px-8 py-4 rounded-full bg-[#f7f7f5] text-black font-mono text-xs tracking-widest font-semibold uppercase transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#d4ff00] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_24px_rgba(255,255,255,0.08)] hover:shadow-[0_6px_28px_rgba(212,255,0,0.28)] flex items-center justify-center space-x-2"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0.5" />
          </button>

          {/* Secondary CTA: START A PROJECT */}
          <button
            onClick={onStartProject}
            className="group px-8 py-4 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white font-mono text-xs tracking-widest uppercase transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#d4ff00] hover:text-[#d4ff00] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* Campaign Metadata Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 pt-8 border-t border-white/[0.08] w-full grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-[10px] md:text-[11px] text-[#71717a]"
        >
          <div>
            <span className="block text-[#a1a1aa] uppercase tracking-wider mb-1">CRAFT</span>
            <span className="text-white">AI Fashion Production</span>
          </div>
          <div>
            <span className="block text-[#a1a1aa] uppercase tracking-wider mb-1">FIDELITY</span>
            <span className="text-white">100% Product Accurate</span>
          </div>
          <div>
            <span className="block text-[#a1a1aa] uppercase tracking-wider mb-1">LOCATION</span>
            <span className="text-white">India / Global Delivery</span>
          </div>
          <div>
            <span className="block text-[#a1a1aa] uppercase tracking-wider mb-1">COMMISSIONS</span>
            <span className="text-[#d4ff00] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] inline-block animate-pulse" />
              Accepting New Briefs
            </span>
          </div>
        </motion.div>
      </div>

      {/* Small Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 pointer-events-none"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] text-[#71717a] uppercase">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#d4ff00]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
