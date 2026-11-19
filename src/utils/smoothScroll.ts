/**
 * Smoothly scrolls to a target selector or element with customizable duration, offset, and easing.
 * Uses requestAnimationFrame with cubic-bezier easing to ensure fluid, visible, cinematic scrolling
 * regardless of browser quirks or OS settings.
 */

let activeScrollAnimationId: number | null = null;

export const smoothScrollTo = (
  target: string | HTMLElement,
  options?: {
    duration?: number;
    offset?: number;
    onComplete?: () => void;
  }
) => {
  // Cancel any existing running scroll animation
  if (activeScrollAnimationId !== null) {
    cancelAnimationFrame(activeScrollAnimationId);
    activeScrollAnimationId = null;
  }

  const duration = options?.duration ?? 850;
  const offset = options?.offset ?? 72; // Height offset for fixed navbar

  let targetElement: HTMLElement | null = null;

  if (typeof target === 'string') {
    if (target === '#' || target === '#top' || target === '') {
      targetElement = document.body;
    } else {
      targetElement = document.querySelector(target);
    }
  } else {
    targetElement = target;
  }

  if (!targetElement) return;

  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const targetTop = targetElement === document.body
    ? 0
    : Math.max(0, targetElement.getBoundingClientRect().top + startPosition - offset);

  const distance = targetTop - startPosition;
  if (Math.abs(distance) < 2) {
    options?.onComplete?.();
    return;
  }

  let startTime: number | null = null;
  let isCancelled = false;

  const onUserInteraction = () => {
    isCancelled = true;
    cleanup();
  };

  const cleanup = () => {
    window.removeEventListener('wheel', onUserInteraction);
    window.removeEventListener('touchmove', onUserInteraction);
  };

  window.addEventListener('wheel', onUserInteraction, { passive: true });
  window.addEventListener('touchmove', onUserInteraction, { passive: true });

  // Luxury editorial easing: cubic-bezier(0.22, 1, 0.36, 1) approximation
  const easeInOutCubic = (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const step = (currentTime: number) => {
    if (isCancelled) {
      cleanup();
      activeScrollAnimationId = null;
      return;
    }

    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      activeScrollAnimationId = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetTop);
      cleanup();
      activeScrollAnimationId = null;
      options?.onComplete?.();
    }
  };

  activeScrollAnimationId = requestAnimationFrame(step);
};
