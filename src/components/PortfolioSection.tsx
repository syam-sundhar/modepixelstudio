import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenComparison?: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Streetwear', 'Outerwear', 'Footwear', 'Beauty'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => {
        if (activeCategory === 'Streetwear') return p.category.includes('Streetwear') || p.category.includes('Apparel');
        if (activeCategory === 'Outerwear') return p.category.includes('Knitwear') || p.category.includes('Outerwear');
        if (activeCategory === 'Footwear') return p.category.includes('Footwear');
        if (activeCategory === 'Beauty') return p.category.includes('Beauty') || p.category.includes('Skincare');
        return true;
      });

  return (
    <section id="portfolio" className="relative w-full py-24 md:py-32 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#d4ff00] font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMERCIAL CAMPAIGN ARCHIVE</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#f7f7f5] leading-[0.95]">
              SELECTED<br />
              <span className="italic font-light">PRODUCTIONS.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-4">
            <p className="max-w-sm text-sm text-[#9b9ba3] font-light md:text-right leading-relaxed">
              Explore self-initiated concept campaigns demonstrating product fidelity across apparel, knitwear, footwear, and beauty.
            </p>

            {/* Filter Tabs with Smooth Easing */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full font-mono text-[11px] tracking-wider uppercase transition-all duration-240 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeCategory === cat
                      ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                      : 'bg-white/[0.04] text-[#9b9ba3] hover:text-white hover:bg-white/[0.08] border border-white/[0.05]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetric Exhibition Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => {
            const colSpanClass = 'lg:col-span-6';

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`${colSpanClass} flex flex-col group`}
              >
                {/* Visual Card with Fluid & Cinematic Hover Crossfade */}
                <div
                  data-cursor="project"
                  onClick={() => onSelectProject(project)}
                  className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden bg-[#0c0c10] border border-white/[0.08] transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#d4ff00]/45 group-hover:-translate-y-1 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] cursor-pointer select-none"
                >
                  {/* Primary Cover Image with Gentle Scale */}
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Secondary Preview Image - Silky Smooth Crossfade on Hover */}
                  <img
                    src={project.secondaryPreviewImage}
                    alt={`${project.title} Preview`}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] scale-[1.04] group-hover:scale-100"
                    loading="lazy"
                  />

                  {/* Subtle Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10">
                    <span className="font-mono text-xs font-semibold tracking-widest text-[#d4ff00] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      PROJECT // {project.number}
                    </span>

                    <span className="font-mono text-[10px] tracking-wider text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 uppercase">
                      {project.statusTag}
                    </span>
                  </div>

                  {/* Before / After Available Indicator */}
                  {project.beforeAfterComparison && (
                    <div className="absolute top-16 left-5 z-10 pointer-events-none">
                      <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#e2e8f0]">
                        <SlidersHorizontal className="w-3 h-3 text-[#d4ff00]" />
                        <span>RAW VS FINAL INCLUDED</span>
                      </div>
                    </div>
                  )}

                  {/* Bottom Information in Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none flex items-end justify-between">
                    <div>
                      <span className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase block mb-1">
                        {project.category}
                      </span>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-white group-hover:text-[#d4ff00] transition-colors duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#d4ff00] group-hover:text-black transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Sub-Card Details */}
                <div className="mt-4 flex items-center justify-between px-1">
                  <p className="font-mono text-xs text-[#71717a] line-clamp-1">
                    {project.subtitle}
                  </p>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-mono text-[11px] tracking-wider text-[#d4ff00] hover:text-white transition-colors duration-200 uppercase flex items-center space-x-1 shrink-0 ml-4 py-1"
                  >
                    <span>VIEW CASE STUDY</span>
                    <Eye className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Portfolio Guarantee Statement */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] tracking-widest text-[#d4ff00] uppercase block mb-1">
              // ZERO STOCK IMAGERY GUARANTEE
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#9b9ba3] leading-relaxed">
              Every photograph shown in this exhibition represents self-initiated production testing or actual client references. We do not use stock photography templates or unverified synthetic mockups.
            </p>
          </div>
          <a
            href="#enquiry"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs tracking-wider uppercase hover:border-[#d4ff00] hover:text-[#d4ff00] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap"
          >
            DISCUSS YOUR CAMPAIGN
          </a>
        </div>

      </div>
    </section>
  );
};
