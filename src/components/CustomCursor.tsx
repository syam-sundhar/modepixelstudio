import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'drag' | 'button'>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 32, stiffness: 320, mass: 0.4 };
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

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const dragEl = target.closest('[data-cursor="drag"]');
      const buttonEl = target.closest('button, a, [role="button"], input, select, textarea');

      if (projectEl) {
        setCursorVariant('project');
        setCursorText('VIEW PROJECT');
      } else if (dragEl) {
        setCursorVariant('drag');
        setCursorText('DRAG');
      } else if (buttonEl) {
        setCursorVariant('button');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#d4ff00] pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorVariant === 'default' ? 1 : 0,
          opacity: cursorVariant === 'default' ? 0.9 : 0,
        }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Outer Floating Ring / Label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center text-center select-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorVariant === 'project' ? 104 : cursorVariant === 'drag' ? 68 : cursorVariant === 'button' ? 42 : 30,
          height: cursorVariant === 'project' ? 104 : cursorVariant === 'drag' ? 68 : cursorVariant === 'button' ? 42 : 30,
          borderRadius: '50%',
          backgroundColor: cursorVariant === 'project' ? 'rgba(212, 255, 0, 0.95)' : cursorVariant === 'drag' ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.04)',
          borderColor: cursorVariant === 'project' ? '#d4ff00' : cursorVariant === 'button' ? '#d4ff00' : 'rgba(255, 255, 255, 0.25)',
          borderWidth: cursorVariant === 'project' || cursorVariant === 'drag' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[9px] font-semibold tracking-widest uppercase text-black"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
