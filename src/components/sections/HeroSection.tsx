import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onExploreMenu: () => void;
}

export default function HeroSection({ onExploreMenu }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      // Headline Word Reveal (Fixed for Arabic)
      if (headlineRef.current) {
        const text = headlineRef.current.textContent || '';
        headlineRef.current.innerHTML = '';
        
        // Split by words to preserve Arabic ligatures
        const words = text.split(' ');
        words.forEach((word, idx) => {
          const span = document.createElement('span');
          span.textContent = word + (idx < words.length - 1 ? '\u00A0' : ''); // Use non-breaking space
          span.style.display = 'inline-block';
          span.style.overflow = 'hidden';
          span.className = 'word-wrapper';
          
          const innerSpan = document.createElement('span');
          innerSpan.textContent = span.textContent;
          innerSpan.style.display = 'inline-block';
          innerSpan.style.transform = 'translateY(100%)';
          innerSpan.className = 'word-inner';
          
          span.textContent = '';
          span.appendChild(innerSpan);
          headlineRef.current!.appendChild(span);
        });

        tl.to('.word-inner', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'expo.out',
        });
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );

      // Buttons
      tl.fromTo(
        buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-obsidian"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/test-wicht/images/hero-bg.jpg"
          alt="Wicht Background"
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Gradient overlays */}

        <div className="absolute inset-0 gradient-hero-vignette" />
        <div className="absolute inset-0 gradient-fire-glow" />
        <div className="absolute inset-0 gradient-amber-top" />
        <div className="absolute inset-0 bg-obsidian/40" />
      </div>

      {/* Animated smoke particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-amber-fire/10 blur-3xl ${
              i % 2 === 0 ? 'animate-smoke-1' : 'animate-smoke-2'
            }`}
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              left: `${10 + i * 15}%`,
              bottom: `${-5 + (i % 3) * 10}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[900px] px-6 -mt-20">
        {/* Small brand tag above */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="font-brand text-warm-gold text-xs sm:text-sm uppercase font-light">
            Wicht Luxury Dining
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display font-extrabold text-cream text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[1.1] text-glow-strong mb-8 tracking-tight"
        >
          صُنِع ليبهرك.
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-parchment text-base sm:text-xl max-w-[540px] mx-auto mb-12 leading-relaxed opacity-0 font-light"
        >
          ساندويتشات مشوية بمزاج وفلافل لا تُنسى. تجربة طعام ليبية فاخرة تعيد تعريف المذاق.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0">
          <button
            onClick={onExploreMenu}
            className="group relative px-10 py-4 rounded-full bg-amber-fire text-obsidian font-bold text-base overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(232,93,4,0.3)]"
          >
            <span className="relative z-10">استكشف القائمة</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
          <button
            onClick={onExploreMenu}
            className="px-10 py-4 rounded-full border border-cream/30 text-cream font-bold text-base hover:bg-cream/10 hover:border-cream transition-all duration-500 active:scale-95"
          >
            اطلب الآن
          </button>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <div className="animate-pulse-scroll">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-cream/50"
          >
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
