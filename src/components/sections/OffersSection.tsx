import { motion } from 'framer-motion';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { offers } from '@/data/offers';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/data/translations';

export default function OffersSection() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    direction: lang === 'ar' ? 'rtl' : 'ltr',
    align: 'start',
    containScroll: 'trimSnaps'
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="offers" className="py-24 bg-obsidian overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12 flex items-end justify-between">
        <div className="max-w-xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-warm-gold text-sm font-bold tracking-widest uppercase mb-4 block"
          >
            {t.nav.offers}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-cream text-4xl md:text-5xl font-black mb-4"
          >
            {t.offers.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-parchment/60 text-lg"
          >
            {t.offers.subtitle}
          </motion.p>
        </div>

        <div className="flex gap-4 mb-4">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-cream hover:bg-white/5 transition-all active:scale-90"
          >
            {lang === 'ar' ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-cream hover:bg-white/5 transition-all active:scale-90"
          >
            {lang === 'ar' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>
      </div>

      <div className="embla px-6 md:px-10" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {offers.map((offer, idx) => (
            <motion.div 
              key={offer.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
            >
              <div className="group relative aspect-[16/10] rounded-3xl overflow-hidden glass-card">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-fire text-obsidian text-xs font-black uppercase">
                      {lang === 'ar' ? offer.tag : offer.tagEn}
                    </span>
                    {offer.discount && (
                      <span className="text-warm-gold text-2xl font-black">
                        {offer.discount}
                      </span>
                    )}
                  </div>
                  <h3 className="text-cream text-2xl font-black mb-2 group-hover:text-warm-gold transition-colors">
                    {lang === 'ar' ? offer.title : offer.titleEn}
                  </h3>
                  <p className="text-parchment/70 text-sm line-clamp-2">
                    {lang === 'ar' ? offer.description : offer.descriptionEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
