import { useState } from 'react';
import { Plus, Search, Pencil, Trash2, Eye } from 'lucide-react';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import StatusBadge from '@/components/admin/data-display/StatusBadge';

export default function AdminProducts() {
  const [search, setSearch] = useState('');
  const [_viewMode] = useState<'grid' | 'table'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = products.filter((p) => {
    const matchSearch = p.name.includes(search) || p.description?.includes(search);
    const matchCat = selectedCategory === 'all' || p.categoryId === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="h-10 px-4 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors flex items-center gap-2">
            <Plus size={16} />
            إضافة منتج
          </button>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="بحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 bg-elevated border border-admin-border rounded-lg pr-9 pl-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber-fire focus:ring-2 focus:ring-amber-fire/20"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="h-10 bg-elevated border border-admin-border rounded-lg px-3 text-sm text-text-secondary focus:outline-none focus:border-amber-fire"
          >
            <option value="all">كل الفئات</option>
            {categories.map((c: typeof categories[0]) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((product) => (
          <div key={product.id} className="bg-panel-bg border border-admin-border rounded-xl overflow-hidden hover:shadow-admin-panel-hover transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <StatusBadge
                  status={product.isAvailable ? 'نشط' : 'غير نشط'}
                  variant={product.isAvailable ? 'success' : 'muted'}
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display font-bold text-text-primary text-sm mb-1">{product.name}</h3>
              <p className="text-text-muted text-xs line-clamp-2 mb-3">{product.description || product.name}</p>
              <div className="flex items-center justify-between">
                <span className="text-amber-fire font-bold text-sm">
                  {product.isVariablePrice ? 'حسب الاختيار' : `${product.price.toFixed(2)} ر.س`}
                </span>
                {product.calories && (
                  <span className="text-text-muted text-xs">{product.calories} سعرة</span>
                )}
              </div>
              <div className="flex items-center gap-1 mt-3 pt-3 border-t border-admin-border">
                <button className="flex-1 h-8 flex items-center justify-center gap-1 text-text-secondary hover:text-amber-fire hover:bg-amber-fire/10 rounded-lg transition-all text-xs">
                  <Eye size={13} /> عرض
                </button>
                <button className="flex-1 h-8 flex items-center justify-center gap-1 text-text-secondary hover:text-amber-fire hover:bg-amber-fire/10 rounded-lg transition-all text-xs">
                  <Pencil size={13} /> تعديل
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
