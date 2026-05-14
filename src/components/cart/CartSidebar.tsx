import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/data/translations';

export default function CartSidebar() {
  const { items, isOpen, closeCart, updateQuantity, subtotal } = useCartStore();
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const total = subtotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] overflow-hidden">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: lang === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: lang === 'ar' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-full max-w-md h-full bg-charcoal shadow-2xl flex flex-col border-white/5 border-l border-r`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/5">
              <div className="flex flex-col">
                <h2 className="text-cream text-2xl font-black">{t.cart.title}</h2>
                <p className="text-stone text-[10px] uppercase tracking-widest font-bold">
                  {items.length} {t.cart.items}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-cream hover:bg-white/5 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-stone/20 mb-6">
                    <ShoppingBag size={48} />
                  </div>
                  <p className="text-cream text-xl font-black mb-2">{t.cart.empty}</p>
                  <button 
                    onClick={closeCart}
                    className="text-amber-fire text-sm font-bold hover:underline"
                  >
                    {t.nav.menu}
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    layout
                    key={item.productId}
                    className="flex items-center gap-4 bg-white/5 rounded-3xl p-4 border border-white/5 group hover:border-amber-fire/20 transition-all"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-2xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-cream text-sm font-black truncate group-hover:text-warm-gold transition-colors">
                        {lang === 'ar' ? item.product.name : item.product.nameEn}
                      </h3>
                      <p className="text-amber-fire font-black mt-1">
                        {item.product.price} <span className="text-[10px] opacity-60">ر.س</span>
                      </p>
                      
                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-obsidian text-stone hover:text-cream flex items-center justify-center transition-all active:scale-90"
                        >
                          {item.quantity <= 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                        </button>
                        <span className="text-cream font-black text-sm w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-obsidian text-stone hover:text-cream flex items-center justify-center transition-all active:scale-90"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-white/5 space-y-6">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-stone text-[10px] uppercase tracking-widest font-bold mb-1">{t.cart.total}</span>
                    <span className="text-cream text-3xl font-black">{total.toFixed(2)} <span className="text-sm font-bold text-warm-gold">ر.س</span></span>
                  </div>
                </div>
                <button className="w-full py-5 rounded-2xl bg-amber-fire text-obsidian font-black text-lg shadow-amber-glow hover:scale-[1.02] active:scale-[0.98] transition-all">
                  {t.cart.checkout}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
