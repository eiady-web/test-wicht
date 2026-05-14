import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Grid3X3,
  Tag,
  ShoppingCart,
  Star,
  Image,
  Monitor,
  Bell,
  BarChart3,
  Search,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'لوحة التحكم', icon: LayoutDashboard, href: '/admin/dashboard' },
  { id: 'products', label: 'المنتجات', icon: Package, href: '/admin/products' },
  { id: 'categories', label: 'الفئات', icon: Grid3X3, href: '/admin/categories' },
  { id: 'offers', label: 'العروض', icon: Tag, href: '/admin/offers' },
  { id: 'orders', label: 'الطلبات', icon: ShoppingCart, href: '/admin/orders' },
  { id: 'reviews', label: 'التقييمات', icon: Star, href: '/admin/reviews' },
  { id: 'hero', label: 'الهيدر الرئيسي', icon: Image, href: '/admin/hero' },
  { id: 'banners', label: 'البانرات', icon: Monitor, href: '/admin/banners' },
  { id: 'notifications', label: 'الإشعارات', icon: Bell, href: '/admin/notifications' },
  { id: 'analytics', label: 'التحليلات', icon: BarChart3, href: '/admin/analytics' },
  { id: 'seo', label: 'التحسينات', icon: Search, href: '/admin/seo' },
  { id: 'settings', label: 'الإعدادات', icon: Settings, href: '/admin/settings' },
];

interface AdminSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function AdminSidebar({ collapsed, onToggleCollapse }: AdminSidebarProps) {
  return (
    <aside
      className={`h-full bg-panel-bg border-l border-admin-border flex flex-col transition-all duration-300 shrink-0 ${
        collapsed ? 'w-[72px]' : 'w-[260px]'
      }`}
    >
      {/* Logo */}
      <div className="h-[72px] flex items-center justify-center border-b border-admin-border px-4">
        {collapsed ? (
          <div className="w-8 h-8 rounded-full bg-amber-fire/15 flex items-center justify-center">
            <span className="font-display font-bold text-amber-fire text-sm">و</span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <span className="font-brand text-warm-gold text-[10px] tracking-wider">Wicht</span>
            <span className="font-display font-extrabold text-cream text-lg leading-tight">ويشت</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1 hide-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group relative ${
                isActive
                  ? 'bg-amber-fire/10 text-amber-fire border-r-[3px] border-r-amber-fire'
                  : 'text-text-secondary hover:bg-elevated hover:text-text-primary border-r-[3px] border-r-transparent'
              } ${collapsed ? 'justify-center' : ''}`
            }
          >
            <item.icon size={18} className="shrink-0" />
            {!collapsed && (
              <span className="text-sm font-semibold truncate">{item.label}</span>
            )}
            {collapsed && (
              <div className="absolute right-full mr-2 px-2 py-1 bg-elevated border border-admin-border rounded-md text-xs font-semibold text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                {item.label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="border-t border-admin-border p-3">
        <button
          onClick={onToggleCollapse}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:bg-elevated hover:text-text-primary transition-colors"
        >
          {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          {!collapsed && <span className="text-sm font-semibold">طي القائمة</span>}
        </button>
      </div>
    </aside>
  );
}
