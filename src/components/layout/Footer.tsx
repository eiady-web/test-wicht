import { Instagram, Twitter, Music2, Apple, Smartphone, Heart } from 'lucide-react';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/data/translations';

interface FooterProps {
  onScrollTo?: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <footer className="bg-obsidian border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-fire/50 to-transparent opacity-30" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Col */}
          <div className="flex flex-col items-start lg:col-span-1">
            <div className="mb-8">
              <span className="font-brand text-warm-gold text-[10px] tracking-[0.4em] uppercase block mb-1">Wicht</span>
              <span className="font-display font-black text-cream text-4xl text-glow">ويشت</span>
            </div>
            <p className="text-parchment/50 text-sm leading-relaxed mb-8 max-w-xs">
              {lang === 'ar' 
                ? 'تجربة طعام استثنائية تجمع بين الأصالة الليبية والفخامة العصرية. صنعنا كل وجبة لتكون ذكرى لا تُنسى.'
                : 'An exceptional dining experience that combines Libyan authenticity with modern luxury. We craft every meal to be an unforgettable memory.'}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Music2, href: '#', label: 'TikTok' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone hover:border-amber-fire hover:text-amber-fire transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-cream font-black text-lg mb-8">{t.nav.menu}</h4>
            <ul className="space-y-4">
              {['menu', 'offers', 'about', 'locations'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onScrollTo?.(item)} 
                    className="text-parchment/40 hover:text-warm-gold text-sm transition-colors font-bold"
                  >
                    {t.nav[item as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-cream font-black text-lg mb-8">{t.nav.contact}</h4>
            <div className="space-y-4 text-parchment/40 text-sm font-bold">
              <p>+218 91 000 0000</p>
              <p>info@wicht.ly</p>
              <p>{lang === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</p>
            </div>
          </div>

          {/* Apps */}
          <div className="lg:col-span-1">
            <h4 className="text-cream font-black text-lg mb-8">{lang === 'ar' ? 'حمل التطبيق' : 'Download App'}</h4>
            <div className="space-y-4">
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-fire/30 transition-all text-left">
                <Apple size={24} className="text-amber-fire" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-stone uppercase font-bold">Available on</span>
                  <span className="text-cream font-black text-sm">App Store</span>
                </div>
              </button>
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-fire/30 transition-all text-left">
                <Smartphone size={24} className="text-amber-fire" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-stone uppercase font-bold">Available on</span>
                  <span className="text-cream font-black text-sm">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-stone text-[10px] font-bold uppercase tracking-widest">
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-stone text-[10px] font-bold uppercase tracking-widest">
            <span>{t.footer.madeWith}</span>
            <Heart size={12} className="text-error-red fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// Fixed translations
