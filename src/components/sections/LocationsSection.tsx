import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { branches } from '@/data/branches';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/data/translations';

export default function LocationsSection() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <section id="locations" className="py-32 bg-matte-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-warm-gold text-sm font-bold tracking-[0.4em] uppercase mb-4 block"
            >
              {t.nav.locations}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-cream text-5xl md:text-6xl font-black mb-6"
            >
              {t.branches.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-parchment/60 text-lg"
            >
              {t.branches.subtitle}
            </motion.p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-amber-fire/30 text-warm-gold font-bold flex items-center gap-3 hover:bg-amber-fire hover:text-obsidian transition-all"
          >
            <MapPin size={20} />
            {lang === 'ar' ? 'عرض على الخريطة' : 'View on Map'}
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-charcoal/30 rounded-[40px] p-8 border border-white/5 hover:border-amber-fire/20 transition-all hover:bg-charcoal/50"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 rounded-2xl bg-amber-fire/10 flex items-center justify-center text-amber-fire group-hover:bg-amber-fire group-hover:text-obsidian transition-all">
                  <MapPin size={32} />
                </div>
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  branch.status === 'open' 
                    ? 'bg-success-green/20 text-success-green border border-success-green/20' 
                    : 'bg-error-red/20 text-error-red border border-error-red/20'
                }`}>
                  {branch.status === 'open' ? t.branches.open : t.branches.closed}
                </span>
              </div>

              <h3 className="text-cream text-2xl font-black mb-4 group-hover:text-warm-gold transition-colors">
                {lang === 'ar' ? branch.name : branch.nameEn}
              </h3>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3 text-parchment/60">
                  <MapPin size={18} className="shrink-0 text-warm-gold" />
                  <span className="text-sm leading-relaxed">{lang === 'ar' ? branch.address : branch.addressEn}</span>
                </div>
                <div className="flex items-center gap-3 text-parchment/60">
                  <Phone size={18} className="shrink-0 text-warm-gold" />
                  <span className="text-sm font-bold">{branch.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-parchment/60">
                  <Clock size={18} className="shrink-0 text-warm-gold" />
                  <span className="text-sm">09:00 AM - 12:00 AM</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-4 rounded-2xl bg-white/5 text-cream text-xs font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <ExternalLink size={14} />
                  {lang === 'ar' ? 'التفاصيل' : 'Details'}
                </button>
                <button className="flex-1 py-4 rounded-2xl bg-amber-fire text-obsidian text-xs font-bold hover:scale-105 transition-all">
                  {t.branches.call}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
