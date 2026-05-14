import { useEffect, useState, useRef } from 'react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import OffersSection from '@/components/sections/OffersSection';
import MenuSection from '@/components/sections/MenuSection';
import AboutSection from '@/components/sections/AboutSection';
import LocationsSection from '@/components/sections/LocationsSection';
import Footer from '@/components/layout/Footer';
import CartSidebar from '@/components/cart/CartSidebar';
import { Toaster } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    setIsClient(true);
    
    // Refresh ScrollTrigger when lenis scrolls
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [lenis]);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      lenis?.scrollTo(0);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      lenis?.scrollTo(element, { offset: -70 });
    }
  };

  if (!isClient) return <div className="bg-obsidian min-h-screen" />;

  return (
    <div ref={mainRef} className="relative bg-obsidian min-h-screen selection:bg-warm-gold selection:text-obsidian overflow-x-hidden">
      <Toaster position="top-center" richColors />
      <CartSidebar />
      
      <Navbar onScrollTo={scrollToSection} />
      
      <main>
        <HeroSection onExploreMenu={() => scrollToSection('menu')} />
        
        <div id="offers">
          <OffersSection />
        </div>
        
        <div id="menu">
          <MenuSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="locations">
          <LocationsSection />
        </div>
      </main>

      <Footer onScrollTo={scrollToSection} />
    </div>
  );
}
