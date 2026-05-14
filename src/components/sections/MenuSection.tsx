import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/data/translations';
import { useCartStore } from '@/stores/cartStore';

export default function MenuSection() {
  const { lang } = useLanguageStore();
  const { addItem } = useCartStore();
  const t = translations[lang as keyof typeof translations];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter(p => p.categoryId === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="py-32 bg-matte-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-obsidian to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-warm-gold text-sm font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            {t.nav.menu}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cream text-5xl md:text-6xl font-black mb-6"
          >
            {t.menu.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-parchment/60 text-lg max-w-2xl mx-auto"
          >
            {t.menu.subtitle}
          </motion.p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-fire text-obsidian shadow-lg scale-105'
                : 'bg-charcoal text-parchment hover:bg-ash'
            }`}
          >
            {t.menu.all}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-fire text-obsidian shadow-lg scale-105'
                  : 'bg-charcoal text-parchment hover:bg-ash'
              }`}
            >
              {lang === 'ar' ? cat.name : cat.nameEn}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-charcoal/40 rounded-[32px] p-4 border border-white/5 hover:border-amber-fire/30 transition-all flex flex-col"
              >
                {/* Product Image */}
                <div className="relative aspect-square rounded-[24px] overflow-hidden mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {product.isNew && (
                      <span className="bg-amber-fire text-obsidian text-[10px] font-black px-2 py-1 rounded-md uppercase">NEW</span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-white text-obsidian text-[10px] font-black px-2 py-1 rounded-md uppercase">BEST</span>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="px-2 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-cream text-xl font-black group-hover:text-warm-gold transition-colors">
                      {lang === 'ar' ? product.name : product.nameEn}
                    </h3>
                    <div className="flex items-center gap-1 text-warm-gold">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold">{product.rating || '4.9'}</span>
                    </div>
                  </div>
                  <p className="text-parchment/50 text-sm line-clamp-2 mb-6">
                    {lang === 'ar' ? product.description : product.descriptionEn}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-stone text-[10px] uppercase tracking-widest mb-1">Price</span>
                      <span className="text-cream text-2xl font-black">
                        {product.price} <span className="text-sm font-bold text-warm-gold">ر.س</span>
                      </span>
                    </div>
                    <button 
                      onClick={() => addItem(product)}
                      className="w-14 h-14 rounded-2xl bg-white text-obsidian flex items-center justify-center group-hover:bg-amber-fire transition-all active:scale-90 shadow-xl"
                    >
                      <Plus size={28} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
