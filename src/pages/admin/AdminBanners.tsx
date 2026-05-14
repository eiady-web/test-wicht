import { Plus, Eye, Pencil, Trash2, Copy } from 'lucide-react';
import StatusBadge from '@/components/admin/data-display/StatusBadge';

const banners = [
  { id: 1, title: 'عرض رمضان', position: 'أعلى الصفحة', status: 'active', startDate: '2025-03-01', endDate: '2025-04-01', clicks: 1245, image: '/images/hero-bg.jpg' },
  { id: 2, title: 'خصم الطلبات الكبيرة', position: 'أسفل القائمة', status: 'active', startDate: '2025-05-01', endDate: '2025-06-01', clicks: 892, image: '/images/about/about-primary.jpg' },
  { id: 3, title: 'منتج جديد: ترافل', position: 'نافذة منبثقة', status: 'inactive', startDate: '2025-04-15', endDate: '2025-05-15', clicks: 0, image: '/images/products/grill/meat-truffle.jpg' },
];

export default function AdminBanners() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button className="h-10 px-4 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors flex items-center gap-2">
          <Plus size={16} />
          إضافة بانر
        </button>
      </div>

      <div className="space-y-4">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-panel-bg border border-admin-border rounded-xl overflow-hidden hover:shadow-admin-panel-hover transition-shadow">
            <div className="relative h-28 overflow-hidden">
              <img src={banner.image} alt={banner.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <StatusBadge status={banner.status === 'active' ? 'نشط' : 'غير نشط'} variant={banner.status === 'active' ? 'success' : 'muted'} />
                <span className="bg-elevated/80 text-text-secondary text-xs px-2 py-0.5 rounded-small">{banner.position}</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-text-primary">{banner.title}</h3>
                <span className="text-text-muted text-sm">{banner.clicks.toLocaleString()} نقرة</span>
              </div>
              <div className="flex items-center gap-4 text-text-muted text-xs mb-4">
                <span>من: {banner.startDate}</span>
                <span>إلى: {banner.endDate}</span>
              </div>
              <div className="flex items-center gap-1 pt-3 border-t border-admin-border">
                <button className="flex-1 h-8 flex items-center justify-center gap-1 text-text-secondary hover:text-amber-fire hover:bg-amber-fire/10 rounded-lg transition-all text-xs">
                  <Eye size={13} /> معاينة
                </button>
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
