import { ShoppingCart, DollarSign, Package, Star } from 'lucide-react';
import StatCard from '@/components/admin/data-display/StatCard';
import StatusBadge from '@/components/admin/data-display/StatusBadge';

const stats = [
  { title: 'إجمالي الطلبات', value: '1,247', icon: ShoppingCart, trend: { value: 12, direction: 'up' as const }, color: 'amber-fire' },
  { title: 'الإيرادات', value: '38,520 ر.س', icon: DollarSign, trend: { value: 8, direction: 'up' as const }, color: 'success-green' },
  { title: 'المنتجات', value: '45', icon: Package, color: 'warm-gold' },
  { title: 'التقييمات الجديدة', value: '23', icon: Star, trend: { value: 5, direction: 'up' as const }, color: 'amber-fire' },
];

const recentOrders = [
  { id: 'WCH-1284', date: '14 مايو 2025, 08:30 م', customer: 'أحمد محمد', amount: '84.00 ر.س', status: 'قيد التحضير', statusVariant: 'accent' as const },
  { id: 'WCH-1283', date: '14 مايو 2025, 08:15 م', customer: 'خالد العلي', amount: '69.00 ر.س', status: 'جديد', statusVariant: 'warning' as const },
  { id: 'WCH-1282', date: '14 مايو 2025, 07:55 م', customer: 'فهد السالم', amount: '47.00 ر.س', status: 'جاهز', statusVariant: 'success' as const },
  { id: 'WCH-1281', date: '14 مايو 2025, 07:40 م', customer: 'نورة عبدالله', amount: '95.00 ر.س', status: 'مكتمل', statusVariant: 'muted' as const },
  { id: 'WCH-1280', date: '14 مايو 2025, 07:25 م', customer: 'سلطان القحطاني', amount: '122.00 ر.س', status: 'قيد التحضير', statusVariant: 'accent' as const },
];

const topProducts = [
  { name: 'ميجا ويشت', percent: 85, color: 'bg-amber-fire' },
  { name: 'بوكس اللمة', percent: 72, color: 'bg-warm-gold' },
  { name: 'شيش طاووق الاصلي', percent: 65, color: 'bg-success-green' },
  { name: 'كباب لحم ترفل', percent: 48, color: 'bg-ash' },
  { name: 'دجاج عالصاج', percent: 35, color: 'bg-ash' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-3 bg-panel-bg border border-admin-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-text-primary text-lg">مبيعات الشهر</h2>
            <select className="h-8 bg-elevated border border-admin-border rounded-lg px-3 text-xs text-text-secondary focus:outline-none focus:border-amber-fire">
              <option>آخر 30 يوم</option>
              <option>آخر 7 أيام</option>
              <option>هذا الشهر</option>
            </select>
          </div>
          {/* Chart Placeholder */}
          <div className="h-[200px] flex items-end gap-2">
            {[65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50, 88, 72, 68, 92, 58, 78, 84, 62, 87, 73, 91, 56, 82, 69, 76, 89, 64, 83, 77].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-amber-fire/20 rounded-t hover:bg-amber-fire/40 transition-colors cursor-pointer relative group"
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-elevated border border-admin-border rounded-md px-2 py-1 text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {h * 120} ر.س
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-text-muted text-xs">
            <span>15 أبريل</span>
            <span>14 مايو</span>
          </div>
        </div>

        {/* Top Products */}
        <div className="lg:col-span-2 bg-panel-bg border border-admin-border rounded-xl p-6">
          <h2 className="font-display font-bold text-text-primary text-lg mb-6">أكثر المنتجات مبيعاً</h2>
          <div className="space-y-4">
            {topProducts.map((p, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-text-secondary text-sm">{p.name}</span>
                  <span className="text-text-muted text-xs">{p.percent}%</span>
                </div>
                <div className="h-2 bg-elevated rounded-full overflow-hidden">
                  <div className={`h-full ${p.color} rounded-full transition-all`} style={{ width: `${p.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-panel-bg border border-admin-border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-admin-border">
          <h2 className="font-display font-bold text-text-primary text-lg">آخر الطلبات</h2>
          <button className="text-amber-fire text-sm font-semibold hover:text-amber-glow transition-colors">
            عرض الكل
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-elevated text-text-secondary text-xs">
                <th className="px-5 py-3 text-right font-semibold">رقم الطلب</th>
                <th className="px-5 py-3 text-right font-semibold">التاريخ</th>
                <th className="px-5 py-3 text-right font-semibold">العميل</th>
                <th className="px-5 py-3 text-right font-semibold">المبلغ</th>
                <th className="px-5 py-3 text-right font-semibold">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-t border-admin-border hover:bg-elevated/50 transition-colors">
                  <td className="px-5 py-4 text-text-primary text-sm font-semibold">{order.id}</td>
                  <td className="px-5 py-4 text-text-secondary text-sm">{order.date}</td>
                  <td className="px-5 py-4 text-text-primary text-sm">{order.customer}</td>
                  <td className="px-5 py-4 text-text-primary text-sm font-bold">{order.amount}</td>
                  <td className="px-5 py-4">
                    <StatusBadge status={order.status} variant={order.statusVariant} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
