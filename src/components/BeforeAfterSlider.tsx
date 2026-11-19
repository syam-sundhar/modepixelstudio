import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeUrl,
  afterUrl,
  beforeLabel = 'Client Reference (Raw Photo)',
  afterLabel = 'MODEPIXEL Campaign Production',
  caption,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full flex flex-col space-y-3">
      {/* Visual Canvas Container */}
      <div
        ref={containerRef}
        data-cursor="drag"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden select-none cursor-ew-resize bg-[#0d0d12] border border-white/[0.08] shadow-2xl"
      >
        {/* AFTER Image (Full background layer) */}
        <img
          src={afterUrl}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* BEFORE Image (Clipped overlay layer) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeUrl}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none filter contrast-[1.03]"
          />
        </div>

        {/* Tactical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_12px_rgba(0,0,0,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Circular Knob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#08080a] border-2 border-white shadow-[0_4px_16px_rgba(0,0,0,0.8)] flex items-center justify-center text-white transition-transform active:scale-95">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#d4ff00]" />
          </div>
        </div>

        {/* Labels Badges */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-white uppercase">
            {beforeLabel}
          </div>
        </div>
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <div className="px-3 py-1 rounded-full bg-[#d4ff00]/90 backdrop-blur-md border border-black/20 text-[10px] font-mono tracking-wider text-black font-semibold uppercase">
            {afterLabel}
          </div>
        </div>

        {/* Hint banner at bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.06] text-[9px] font-mono text-[#a1a1aa] tracking-widest uppercase">
            DRAG TO COMPARE FIDELITY
          </div>
        </div>
      </div>

      {/* Caption description */}
      {caption && (
        <p className="font-mono text-xs text-[#71717a] text-center italic">
          {caption}
        </p>
      )}
    </div>
  );
};
