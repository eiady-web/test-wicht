import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Plus, Pencil, Trash2, GripVertical } from 'lucide-react';

export default function AdminCategories() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button className="h-10 px-4 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors flex items-center gap-2">
          <Plus size={16} />
          إضافة فئة
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.categoryId === cat.id);
          const avgPrice = catProducts.length > 0
            ? catProducts.reduce((s, p) => s + p.price, 0) / catProducts.length
            : 0;

          return (
            <div key={cat.id} className="bg-panel-bg border border-admin-border rounded-xl p-6 hover:shadow-admin-panel-hover transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <GripVertical size={16} className="text-text-muted cursor-grab" />
                  <h3 className="font-display font-bold text-text-primary text-lg">{cat.name}</h3>
                  <span className="bg-amber-fire/10 text-amber-fire text-xs font-semibold px-2 py-0.5 rounded-small">
                    {catProducts.length} منتج
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-text-secondary hover:text-amber-fire rounded-lg transition-colors">
                    <Pencil size={14} />
                  </button>
                  <button className="p-1.5 text-text-secondary hover:text-error-red rounded-lg transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-elevated rounded-lg p-3 text-center">
                  <div className="text-text-primary font-bold text-lg">{catProducts.length}</div>
                  <div className="text-text-muted text-xs">منتجات</div>
                </div>
                <div className="bg-elevated rounded-lg p-3 text-center">
                  <div className="text-text-primary font-bold text-lg">{avgPrice.toFixed(0)}</div>
                  <div className="text-text-muted text-xs">متوسط السعر</div>
                </div>
                <div className="bg-elevated rounded-lg p-3 text-center">
                  <div className="text-text-primary font-bold text-lg">{catProducts.filter(p => p.isAvailable).length}</div>
                  <div className="text-text-muted text-xs">نشط</div>
                </div>
              </div>

              {/* Mini product list */}
              <div className="space-y-2">
                {catProducts.slice(0, 5).map((p) => (
                  <div key={p.id} className="flex items-center gap-2 text-sm">
                    <img src={p.image} alt="" className="w-6 h-6 rounded object-cover" />
                    <span className="text-text-secondary flex-1 truncate">{p.name}</span>
                    <span className="text-text-muted text-xs">{p.isVariablePrice ? 'متغير' : `${p.price.toFixed(0)} ر.س`}</span>
                  </div>
                ))}
                {catProducts.length > 5 && (
                  <button className="text-amber-fire text-xs font-semibold hover:text-amber-glow transition-colors">
                    عرض الكل ({catProducts.length})
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
