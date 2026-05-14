import { motion } from 'framer-motion';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/data/translations';

export default function AboutSection() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <section id="about" className="py-32 bg-obsidian relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-fire/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-warm-gold text-sm font-bold tracking-[0.4em] uppercase mb-6 block"
            >
              {t.nav.about}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-cream text-5xl md:text-6xl font-black mb-8 leading-tight"
            >
              {lang === 'ar' ? 'قصة ويشت: شغف بالمذاق الحقيقي' : 'Wicht Story: Passion for Real Taste'}
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-parchment/70 text-lg leading-relaxed"
            >
              <p>
                {lang === 'ar' 
                  ? 'بدأت رحلتنا من الرغبة في تقديم ساندويتشات مشوية تتجاوز التوقعات. نحن نؤمن بأن الطعام ليس مجرد وجبة، بل هو تجربة تجمع بين المكونات الطازجة والتقنيات العصرية.'
                  : "Our journey began with a desire to offer grilled sandwiches that exceed expectations. We believe food isn't just a meal, it's an experience that combines fresh ingredients with modern techniques."}
              </p>
              <p>
                {lang === 'ar'
                  ? 'في ويشت، كل قطعة صُنعت بعناية فائقة، من خبزنا المحضر يومياً إلى تتبيلاتنا السرية التي تميزنا عن الجميع.'
                  : 'At Wicht, every piece is crafted with utmost care, from our daily prepared bread to our secret seasonings that set us apart.'}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { label: lang === 'ar' ? 'مكونات طازجة' : 'Fresh Ingredients', val: '100%' },
                { label: lang === 'ar' ? 'وصفة سرية' : 'Secret Recipe', val: '24' },
                { label: lang === 'ar' ? 'فرع في المملكة' : 'Branches in KSA', val: '8+' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-black text-amber-fire mb-1">{stat.val}</div>
                  <div className="text-stone text-[10px] uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="order-1 lg:order-2 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                src="/test-wicht/images/about/about-primary.jpg" 
                alt="Brand Story"

                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/40 to-transparent" />
            </motion.div>
            
            {/* Floating decoration */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-10 -left-10 w-48 h-48 rounded-3xl bg-amber-fire p-8 flex flex-col justify-center shadow-amber-glow hidden md:flex"
            >
              <span className="text-obsidian text-4xl font-black mb-2">10+</span>
              <span className="text-obsidian/80 text-xs font-bold leading-tight">
                {lang === 'ar' ? 'سنوات من الخبرة في فن الشواء' : 'Years of Experience in Grilling Art'}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
