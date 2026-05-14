import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export const useScrollReveal = (options: RevealOptions = {}) => {
  const elementRef = useRef<any>(null);
  const {
    direction = 'up',
    delay = 0,
    duration = 1,
    stagger = 0,
    once = true,
  } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    const distance = 50;

    if (direction === 'up') y = distance;
    else if (direction === 'down') y = -distance;
    else if (direction === 'left') x = distance;
    else if (direction === 'right') x = -distance;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        x,
        y,
        opacity: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, [direction, delay, duration, stagger, once]);

  return elementRef;
};
