import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'drag' | 'button'>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  const variantRef = useRef<'default' | 'project' | 'drag' | 'button'>('default');
  const textRef = useRef<string>('');
  const isVisibleRef = useRef<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Hyper-responsive luxury spring: zero latency, silky follow
  const springConfig = { damping: 26, stiffness: 420, mass: 0.12 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsTouchDevice(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(!e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    if (mediaQuery.matches) {
      document.body.classList.add('custom-cursor-active');
    }

    let rafId: number | null = null;
    let latestClientX = -100;
    let latestClientY = -100;
    let latestTarget: HTMLElement | null = null;

    const updateCursor = () => {
      mouseX.set(latestClientX);
      mouseY.set(latestClientY);

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      if (latestTarget) {
        let newVariant: 'default' | 'project' | 'drag' | 'button' = 'default';
        let newText = '';

        if (latestTarget.closest('[data-cursor="project"]')) {
          newVariant = 'project';
          newText = 'VIEW PROJECT';
        } else if (latestTarget.closest('[data-cursor="drag"]')) {
          newVariant = 'drag';
          newText = 'DRAG';
        } else if (latestTarget.closest('button, a, [role="button"], input, select, textarea')) {
          newVariant = 'button';
          newText = '';
        }

        // Only trigger React state update if the variant or text actually changed!
        if (variantRef.current !== newVariant || textRef.current !== newText) {
          variantRef.current = newVariant;
          textRef.current = newText;
          setCursorVariant(newVariant);
          setCursorText(newText);
        }
      }

      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      latestClientX = e.clientX;
      latestClientY = e.clientY;
      latestTarget = e.target as HTMLElement | null;

      if (rafId === null) {
        rafId = requestAnimationFrame(updateCursor);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Dot - Hardware Accelerated with No Framebuffer Readback */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#d4ff00] pointer-events-none z-[9999] shadow-[0_0_8px_rgba(212,255,0,0.6)] will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorVariant === 'default' ? 1 : 0,
          opacity: cursorVariant === 'default' ? 0.95 : 0,
        }}
        transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Outer Floating Ring / Label - Fully GPU Accelerated */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center text-center select-none will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorVariant === 'project' ? 96 : cursorVariant === 'drag' ? 64 : cursorVariant === 'button' ? 40 : 28,
          height: cursorVariant === 'project' ? 96 : cursorVariant === 'drag' ? 64 : cursorVariant === 'button' ? 40 : 28,
          borderRadius: '50%',
          backgroundColor: cursorVariant === 'project' ? 'rgba(212, 255, 0, 0.95)' : cursorVariant === 'drag' ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.04)',
          borderColor: cursorVariant === 'project' ? '#d4ff00' : cursorVariant === 'button' ? '#d4ff00' : 'rgba(255, 255, 255, 0.25)',
          borderWidth: cursorVariant === 'project' || cursorVariant === 'drag' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 26, stiffness: 350 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[9px] font-bold tracking-widest uppercase text-black"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
