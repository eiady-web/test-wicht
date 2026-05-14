import { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/stores/cartStore';
import { useLanguageStore } from '@/stores/languageStore';
import { useBranchStore } from '@/stores/branchStore';
import { translations } from '@/data/translations';
import BranchSelectionPopup from './BranchSelectionPopup';

interface NavbarProps {
  onScrollTo?: (id: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchPopupOpen, setBranchPopupOpen] = useState(false);
  
  const { totalItems, openCart } = useCartStore();
  const { lang, toggle: toggleLang } = useLanguageStore();
  const { selectedBranch } = useBranchStore();
  
  const t = translations[lang as keyof typeof translations];
  const cartCount = totalItems();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onScrollTo?.(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'h-[72px] glass border-b border-white/10 shadow-xl'
            : 'h-[90px] bg-transparent border-b border-transparent'
        }`}
      >
        <div className="h-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Right: Brand (RTL) */}
          <button
            onClick={() => handleNavClick('top')}
            className="flex flex-col items-start group"
          >
            <span className="font-brand text-warm-gold text-[10px] tracking-[0.3em] uppercase transition-all group-hover:tracking-[0.4em]">
              Wicht
            </span>
            <span className="font-display font-black text-cream text-2xl -mt-1 text-glow">
              ويشت
            </span>
          </button>

          {/* Center: Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {['menu', 'offers', 'about', 'locations'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-parchment hover:text-warm-gold text-sm font-bold tracking-wide transition-all hover:scale-105"
              >
                {t.nav[item as keyof typeof t.nav]}
              </button>
            ))}
          </div>

          {/* Left: Controls */}
          <div className="flex items-center gap-4">
            {/* Branch Selector */}
            <button
              onClick={() => setBranchPopupOpen(true)}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal/40 border border-white/5 hover:border-amber-fire/30 transition-all group"
            >
              <MapPin size={16} className="text-amber-fire group-hover:scale-110 transition-transform" />
              <span className="text-cream text-xs font-bold">
                {selectedBranch?.name || t.nav.locations}
              </span>
              <ChevronDown size={14} className="text-stone" />
            </button>

            {/* Language */}
            <button
              onClick={toggleLang}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream text-xs font-bold hover:bg-white/5 transition-all"
            >
              {lang === 'ar' ? 'EN' : 'ع'}
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative w-10 h-10 rounded-full bg-amber-fire flex items-center justify-center text-obsidian shadow-lg hover:scale-110 active:scale-95 transition-all"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-white text-obsidian text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-amber-fire">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-cream p-1"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-obsidian flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-brand text-warm-gold text-lg">WICHT</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-cream">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {['menu', 'offers', 'about', 'locations'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-cream text-4xl font-black text-right hover:text-warm-gold transition-colors"
                >
                  {t.nav[item as keyof typeof t.nav]}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-white/5">
              <button
                onClick={() => {
                  setBranchPopupOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 text-parchment mb-6"
              >
                <MapPin className="text-amber-fire" />
                <span>{selectedBranch?.name || t.nav.locations}</span>
              </button>
              <button
                className="w-full py-4 rounded-xl bg-amber-fire text-obsidian font-black text-lg"
                onClick={() => handleNavClick('menu')}
              >
                {t.nav.orderNow}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BranchSelectionPopup
        isOpen={branchPopupOpen}
        onClose={() => setBranchPopupOpen(false)}
      />
    </>
  );
}
