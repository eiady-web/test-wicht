import { Search, Bell, Maximize2, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const pageNames: Record<string, string> = {
  '/admin/dashboard': 'لوحة التحكم',
  '/admin/products': 'المنتجات',
  '/admin/categories': 'الفئات',
  '/admin/offers': 'العروض',
  '/admin/orders': 'الطلبات',
  '/admin/reviews': 'التقييمات',
  '/admin/hero': 'الهيدر الرئيسي',
  '/admin/banners': 'البانرات',
  '/admin/notifications': 'الإشعارات',
  '/admin/analytics': 'التحليلات',
  '/admin/seo': 'التحسينات',
  '/admin/settings': 'الإعدادات',
};

export default function AdminTopbar() {
  const location = useLocation();
  const pageTitle = pageNames[location.pathname] || 'لوحة التحكم';

  return (
    <header className="h-16 bg-panel-bg border-b border-admin-border flex items-center justify-between px-6 shrink-0">
      {/* Page Title */}
      <div>
        <h1 className="font-display font-bold text-text-primary text-lg">
          {pageTitle}
        </h1>
        <p className="text-text-muted text-xs">
          لوحة التحكم / {pageTitle}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="بحث..."
            className="w-64 h-9 bg-elevated border border-admin-border rounded-lg pr-9 pl-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber-fire focus:ring-2 focus:ring-amber-fire/20 transition-all"
          />
        </div>

        {/* Notification */}
        <button className="relative w-9 h-9 rounded-lg bg-elevated border border-admin-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-elevated transition-colors">
          <Bell size={16} />
          <span className="absolute top-1.5 left-1.5 w-2 h-2 bg-error-red rounded-full" />
        </button>

        {/* Fullscreen */}
        <button className="w-9 h-9 rounded-lg bg-elevated border border-admin-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors">
          <Maximize2 size={16} />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-amber-fire/15 flex items-center justify-center">
            <span className="font-display font-bold text-amber-fire text-xs">م</span>
          </div>
          <ChevronDown size={14} className="text-text-muted" />
        </div>
      </div>
    </header>
  );
}
