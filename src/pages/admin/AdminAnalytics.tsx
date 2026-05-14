import { DollarSign, ShoppingCart, Users, Package } from 'lucide-react';
import StatCard from '@/components/admin/data-display/StatCard';

const revenueData = [
  65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50, 88, 72, 68, 92, 58, 78, 84, 62, 87, 73, 91, 56, 82, 69, 76, 89, 64, 83, 77
];

const categorySales = [
  { name: 'عروض ويشت', value: 45, color: 'bg-amber-fire' },
  { name: 'ع الفحم', value: 28, color: 'bg-warm-gold' },
  { name: 'ع الصاج', value: 12, color: 'bg-success-green' },
  { name: 'نقنقة', value: 8, color: 'bg-ash' },
  { name: 'مشروبات', value: 5, color: 'bg-ash' },
  { name: 'صوصات', value: 2, color: 'bg-ash' },
];

const branchSales = [
  { branch: 'جدة — الأمير فواز', revenue: 18500 },
  { branch: 'الرياض — لبن', revenue: 14200 },
  { branch: 'جدة — الحمدانية', revenue: 9800 },
  { branch: 'المدينة المنورة', revenue: 7600 },
  { branch: 'الطائف — البيعة', revenue: 5400 },
  { branch: 'أبو عريش', revenue: 3200 },
  { branch: 'الرياض — اليرموك', revenue: 2900 },
  { branch: 'جدة — السامر', revenue: 2100 },
];

const topCustomers = [
  { name: 'أحمد محمد', orders: 24, spent: '2,156 ر.س', avg: '89.8 ر.س', last: '14 مايو 2025' },
  { name: 'خالد العلي', orders: 18, spent: '1,420 ر.س', avg: '78.8 ر.س', last: '14 مايو 2025' },
  { name: 'نورة عبدالله', orders: 15, spent: '1,185 ر.س', avg: '79.0 ر.س', last: '13 مايو 2025' },
  { name: 'فهد السالم', orders: 12, spent: '984 ر.س', avg: '82.0 ر.س', last: '12 مايو 2025' },
  { name: 'سلطان القحطاني', orders: 10, spent: '876 ر.س', avg: '87.6 ر.س', last: '11 مايو 2025' },
];

const peakHours = [
  [2,3,1,0,0,0,0,0,1,3,8,12,15,18,22,25,28,32,35,30,26,20,15,8],
  [1,2,1,0,0,0,0,0,1,4,9,14,16,20,24,27,30,34,38,32,28,22,16,9],
  [3,2,2,0,0,0,0,0,2,5,10,15,18,22,26,29,33,36,40,35,30,24,18,10],
  [2,3,1,0,0,0,0,0,1,4,9,13,17,21,25,28,31,35,39,33,27,21,16,9],
  [3,3,2,0,0,0,0,0,2,6,11,16,19,23,27,30,34,37,42,36,31,25,19,11],
  [4,3,2,1,0,0,0,0,3,7,13,18,22,26,30,33,38,42,46,40,34,28,22,13],
  [5,4,3,1,0,0,0,0,4,8,15,20,24,28,32,36,40,44,48,42,36,30,24,15],
];

const days = ['سبت', 'أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة'];
const hours = ['12ص', '1ص', '2ص', '3ص', '4ص', '5ص', '6ص', '7ص', '8ص', '9ص', '10ص', '11ص', '12م', '1م', '2م', '3م', '4م', '5م', '6م', '7م', '8م', '9م', '10م', '11م'];

export default function AdminAnalytics() {
  const maxOrders = Math.max(...peakHours.flat());

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="إجمالي الإيرادات" value="38,520 ر.س" icon={DollarSign} trend={{ value: 8, direction: 'up' }} color="amber-fire" />
        <StatCard title="إجمالي الطلبات" value="1,247" icon={ShoppingCart} trend={{ value: 12, direction: 'up' }} color="success-green" />
        <StatCard title="العملاء الجدد" value="86" icon={Users} trend={{ value: 5, direction: 'up' }} color="warm-gold" />
        <StatCard title="متوسط الطلب" value="30.9 ر.س" icon={Package} trend={{ value: 3, direction: 'down' }} color="amber-fire" />
      </div>

      {/* Revenue Chart */}
      <div className="bg-panel-bg border border-admin-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-text-primary text-lg">مبيعات الشهر</h2>
          <div className="flex items-center gap-2">
            {['7 أيام', '30 يوم', '90 يوم'].map((r) => (
              <button key={r} className={`px-3 py-1 rounded-lg text-xs font-semibold ${r === '30 يوم' ? 'bg-amber-fire/10 text-amber-fire' : 'text-text-secondary hover:bg-elevated'}`}>
                {r}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[240px] flex items-end gap-[2px]">
          {revenueData.map((h, i) => (
            <div key={i} className="flex-1 bg-amber-fire/20 rounded-t hover:bg-amber-fire/40 transition-colors cursor-pointer relative group" style={{ height: `${h}%` }}>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-elevated border border-admin-border rounded-md px-2 py-1 text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {h * 120} ر.س
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category & Branch Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Category Donut */}
        <div className="lg:col-span-2 bg-panel-bg border border-admin-border rounded-xl p-6">
          <h2 className="font-display font-bold text-text-primary text-lg mb-6">المبيعات حسب الفئة</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                {categorySales.reduce((acc, cat, i) => {
                  const prev = acc.offset;
                  const dash = (cat.value / 100) * 100;
                  const circle = (
                    <circle
                      key={i}
                      cx="18"
                      cy="18"
                      r="15.9"
                      fill="none"
                      stroke={i === 0 ? '#E85D04' : i === 1 ? '#F4A261' : i === 2 ? '#2D8A4E' : i === 3 ? '#2A2A2A' : i === 4 ? '#2A2A2A' : '#2A2A2A'}
                      strokeWidth="3"
                      strokeDasharray={`${dash} ${100 - dash}`}
                      strokeDashoffset={-prev}
                    />
                  );
                  return { offset: prev + dash, circles: [...acc.circles, circle as any] };
                }, { offset: 0, circles: [] as React.ReactElement[] }).circles}
                <circle cx="18" cy="18" r="12" fill="#1A1A1E" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-text-primary font-bold text-lg">100%</span>
                <span className="text-text-muted text-xs">المجموع</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {categorySales.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${cat.color}`} />
                  <span className="text-text-secondary">{cat.name}</span>
                </div>
                <span className="text-text-primary font-semibold">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Branch Sales */}
        <div className="lg:col-span-3 bg-panel-bg border border-admin-border rounded-xl p-6">
          <h2 className="font-display font-bold text-text-primary text-lg mb-6">المبيعات حسب الفرع</h2>
          <div className="space-y-3">
            {branchSales.map((b) => (
              <div key={b.branch}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-text-secondary text-sm">{b.branch}</span>
                  <span className="text-text-primary font-semibold text-sm">{b.revenue.toLocaleString()} ر.س</span>
                </div>
                <div className="h-2 bg-elevated rounded-full overflow-hidden">
                  <div className="h-full bg-amber-fire rounded-full" style={{ width: `${(b.revenue / 18500) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Peak Hours Heat Map */}
      <div className="bg-panel-bg border border-admin-border rounded-xl p-6">
        <h2 className="font-display font-bold text-text-primary text-lg mb-6">ساعات الذروة</h2>
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Hour labels */}
            <div className="flex">
              <div className="w-12 shrink-0" />
              {hours.map((h) => (
                <div key={h} className="flex-1 text-center text-text-muted text-[10px] py-1">{h}</div>
              ))}
            </div>
            {/* Rows */}
            {peakHours.map((row, dayIdx) => (
              <div key={dayIdx} className="flex items-center">
                <div className="w-12 shrink-0 text-text-muted text-xs py-1">{days[dayIdx]}</div>
                {row.map((orders, hourIdx) => {
                  const intensity = orders / maxOrders;
                  return (
                    <div
                      key={hourIdx}
                      className="flex-1 aspect-square m-[1px] rounded-sm cursor-pointer hover:ring-1 hover:ring-amber-fire transition-all relative group"
                      style={{ backgroundColor: `rgba(232, 93, 4, ${0.05 + intensity * 0.8})` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-elevated border border-admin-border rounded-md px-2 py-1 text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {days[dayIdx]} {hours[hourIdx]}: {orders} طلب
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Customers */}
      <div className="bg-panel-bg border border-admin-border rounded-xl overflow-hidden">
        <div className="p-5 border-b border-admin-border">
          <h2 className="font-display font-bold text-text-primary text-lg">أفضل العملاء</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-elevated text-text-secondary text-xs">
                <th className="px-5 py-3 text-right font-semibold">العميل</th>
                <th className="px-5 py-3 text-right font-semibold">الطلبات</th>
                <th className="px-5 py-3 text-right font-semibold">إجمالي الإنفاق</th>
                <th className="px-5 py-3 text-right font-semibold">متوسط الطلب</th>
                <th className="px-5 py-3 text-right font-semibold">آخر طلب</th>
              </tr>
            </thead>
            <tbody>
              {topCustomers.map((c) => (
                <tr key={c.name} className="border-t border-admin-border hover:bg-elevated/50 transition-colors">
                  <td className="px-5 py-4 text-text-primary text-sm font-semibold">{c.name}</td>
                  <td className="px-5 py-4 text-text-primary text-sm">{c.orders}</td>
                  <td className="px-5 py-4 text-amber-fire text-sm font-bold">{c.spent}</td>
                  <td className="px-5 py-4 text-text-secondary text-sm">{c.avg}</td>
                  <td className="px-5 py-4 text-text-muted text-sm">{c.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
