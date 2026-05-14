import { products } from '@/data/products';
import { Plus, Pencil, Trash2, Copy } from 'lucide-react';

export default function AdminOffers() {
  const offers = products.filter((p) => p.categoryId === 'offers');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button className="h-10 px-4 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors flex items-center gap-2">
          <Plus size={16} />
          إضافة عرض
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-panel-bg border border-admin-border rounded-xl overflow-hidden hover:shadow-admin-panel-hover transition-shadow">
            <div className="relative h-40 overflow-hidden">
              <img src={offer.image} alt={offer.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <span className="bg-amber-fire text-obsidian text-xs font-bold px-3 py-1 rounded-full">عرض خاص</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-text-primary text-base mb-2">{offer.name}</h3>
              <p className="text-text-secondary text-sm mb-3 line-clamp-2">{offer.description || offer.name}</p>
              <div className="flex items-center gap-3 mb-4">
                {offer.originalPrice && (
                  <>
                    <span className="text-text-muted line-through text-sm">{offer.originalPrice.toFixed(2)} ر.س</span>
                    <span className="text-amber-fire font-bold text-lg">{offer.price.toFixed(2)} ر.س</span>
                  </>
                )}
                {!offer.originalPrice && (
                  <span className="text-amber-fire font-bold">{offer.isVariablePrice ? 'حسب الاختيار' : `${offer.price.toFixed(2)} ر.س`}</span>
                )}
              </div>
              <div className="flex items-center gap-1 pt-3 border-t border-admin-border">
                <button className="flex-1 h-8 flex items-center justify-center gap-1 text-text-secondary hover:text-amber-fire hover:bg-amber-fire/10 rounded-lg transition-all text-xs">
                  <Pencil size={13} /> تعديل
                </button>
                <button className="flex-1 h-8 flex items-center justify-center gap-1 text-text-secondary hover:text-amber-fire hover:bg-amber-fire/10 rounded-lg transition-all text-xs">
                  <Copy size={13} /> نسخ
                </button>
                <button className="flex-1 h-8 flex items-center justify-center gap-1 text-text-secondary hover:text-error-red hover:bg-error-red/10 rounded-lg transition-all text-xs">
                  <Trash2 size={13} /> حذف
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
