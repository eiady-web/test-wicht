import { useState } from 'react';
import { Eye, Printer, X } from 'lucide-react';
import StatusBadge from '@/components/admin/data-display/StatusBadge';

const orders = [
  { id: 'WCH-1284', date: '14 مايو 2025, 08:30 م', customer: 'أحمد محمد', phone: '0501234567', branch: 'جدة — الأمير فواز', amount: '84.00 ر.س', payment: 'عند الاستلام', status: 'قيد التحضير', statusVariant: 'accent' as const },
  { id: 'WCH-1283', date: '14 مايو 2025, 08:15 م', customer: 'خالد العلي', phone: '0559876543', branch: 'الرياض — لبن', amount: '69.00 ر.س', payment: 'مدفوع', status: 'جديد', statusVariant: 'warning' as const },
  { id: 'WCH-1282', date: '14 مايو 2025, 07:55 م', customer: 'فهد السالم', phone: '0505551212', branch: 'جدة — الحمدانية', amount: '47.00 ر.س', payment: 'مدفوع', status: 'جاهز', statusVariant: 'success' as const },
  { id: 'WCH-1281', date: '14 مايو 2025, 07:40 م', customer: 'نورة عبدالله', phone: '0567890123', branch: 'المدينة المنورة', amount: '95.00 ر.س', payment: 'عند الاستلام', status: 'مكتمل', statusVariant: 'muted' as const },
  { id: 'WCH-1280', date: '14 مايو 2025, 07:25 م', customer: 'سلطان القحطاني', phone: '0504445566', branch: 'الطائف — البيعة', amount: '122.00 ر.س', payment: 'مدفوع', status: 'قيد التحضير', statusVariant: 'accent' as const },
  { id: 'WCH-1279', date: '14 مايو 2025, 07:10 م', customer: 'منى الحربي', phone: '0552223344', branch: 'أبو عريش', amount: '38.00 ر.س', payment: 'عند الاستلام', status: 'جديد', statusVariant: 'warning' as const },
  { id: 'WCH-1278', date: '14 مايو 2025, 06:55 م', customer: 'عبدالرحمن الشمري', phone: '0507778899', branch: 'جدة — السامر', amount: '55.00 ر.س', payment: 'مدفوع', status: 'مكتمل', statusVariant: 'muted' as const },
  { id: 'WCH-1277', date: '14 مايو 2025, 06:40 م', customer: 'هند المالكي', phone: '0561112233', branch: 'الرياض — اليرموك', amount: '71.00 ر.س', payment: 'عند الاستلام', status: 'جاهز', statusVariant: 'success' as const },
];

const statusFilters = [
  { label: 'الكل', count: 48, color: 'text-text-primary' },
  { label: 'جديد', count: 8, color: 'text-amber-fire' },
  { label: 'قيد التحضير', count: 15, color: 'text-amber-fire' },
  { label: 'جاهز', count: 12, color: 'text-success-green' },
  { label: 'مكتمل', count: 10, color: 'text-text-muted' },
  { label: 'ملغي', count: 3, color: 'text-error-red' },
];

export default function AdminOrders() {
  const [activeFilter, setActiveFilter] = useState('الكل');

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="flex flex-wrap gap-3">
        {statusFilters.map((f) => (
          <button
            key={f.label}
            onClick={() => setActiveFilter(f.label)}
            className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
              activeFilter === f.label
                ? 'bg-amber-fire/10 border-amber-fire/30 text-amber-fire'
                : 'bg-panel-bg border-admin-border text-text-secondary hover:bg-elevated'
            }`}
          >
            {f.label} <span className={`${f.color} mr-1`}>({f.count})</span>
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-panel-bg border border-admin-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-elevated text-text-secondary text-xs">
                <th className="px-4 py-3 text-right font-semibold">رقم الطلب</th>
                <th className="px-4 py-3 text-right font-semibold">التاريخ</th>
                <th className="px-4 py-3 text-right font-semibold">العميل</th>
                <th className="px-4 py-3 text-right font-semibold">الفرع</th>
                <th className="px-4 py-3 text-right font-semibold">المبلغ</th>
                <th className="px-4 py-3 text-right font-semibold">الدفع</th>
                <th className="px-4 py-3 text-right font-semibold">الحالة</th>
                <th className="px-4 py-3 text-right font-semibold">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-admin-border hover:bg-elevated/50 transition-colors">
                  <td className="px-4 py-4 text-text-primary text-sm font-semibold">{order.id}</td>
                  <td className="px-4 py-4 text-text-secondary text-sm">{order.date}</td>
                  <td className="px-4 py-4">
                    <div className="text-text-primary text-sm">{order.customer}</div>
                    <div className="text-text-muted text-xs">{order.phone}</div>
                  </td>
                  <td className="px-4 py-4 text-text-secondary text-sm">{order.branch}</td>
                  <td className="px-4 py-4 text-text-primary font-bold text-sm">{order.amount}</td>
                  <td className="px-4 py-4">
                    <StatusBadge
                      status={order.payment}
                      variant={order.payment === 'مدفوع' ? 'success' : 'warning'}
                    />
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge status={order.status} variant={order.statusVariant} />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 text-text-secondary hover:text-amber-fire rounded-lg transition-colors">
                        <Eye size={14} />
                      </button>
                      <button className="p-1.5 text-text-secondary hover:text-text-primary rounded-lg transition-colors">
                        <Printer size={14} />
                      </button>
                      <button className="p-1.5 text-text-secondary hover:text-error-red rounded-lg transition-colors">
                        <X size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-admin-border">
          <span className="text-text-muted text-xs">عرض 1-8 من 48 طلب</span>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-admin-border text-text-muted hover:bg-elevated text-sm">السابق</button>
            {[1, 2, 3, 4, 5].map((p) => (
              <button key={p} className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold ${p === 1 ? 'bg-amber-fire text-obsidian' : 'border border-admin-border text-text-secondary hover:bg-elevated'}`}>
                {p}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-admin-border text-text-muted hover:bg-elevated text-sm">التالي</button>
          </div>
        </div>
      </div>
    </div>
  );
}
