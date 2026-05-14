import { useState } from 'react';
import { Building2, CreditCard, Users, Palette, Store } from 'lucide-react';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'عام', icon: Store },
    { id: 'branches', label: 'الفروع', icon: Building2 },
    { id: 'payment', label: 'الدفع', icon: CreditCard },
    { id: 'users', label: 'المستخدمين', icon: Users },
    { id: 'appearance', label: 'المظهر', icon: Palette },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex items-center gap-2 bg-elevated rounded-lg p-0.5 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-panel-bg text-text-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <tab.icon size={14} />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'general' && (
        <div className="bg-panel-bg border border-admin-border rounded-xl p-6 max-w-2xl space-y-5">
          <h3 className="font-display font-bold text-text-primary text-lg">إعدادات عامة</h3>
          {[
            { label: 'اسم المطعم', value: 'ويشت' },
            { label: 'اللغة الافتراضية', value: 'العربية' },
            { label: 'العملة', value: 'ريال سعودي (ر.س)' },
            { label: 'نسبة الضريبة', value: '15%' },
            { label: 'رسوم التوصيل', value: '15.00 ر.س' },
            { label: 'الحد الأدنى للطلب', value: '20.00 ر.س' },
            { label: 'بادئة الطلبات', value: 'WCH-' },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-semibold text-text-secondary mb-1.5">{field.label}</label>
              <input
                type="text"
                defaultValue={field.value}
                className="w-full h-10 bg-elevated border border-admin-border rounded-lg px-3 text-sm text-text-primary focus:outline-none focus:border-amber-fire focus:ring-2 focus:ring-amber-fire/20"
              />
            </div>
          ))}
          <button className="h-10 px-6 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors">
            حفظ الإعدادات
          </button>
        </div>
      )}

      {activeTab === 'branches' && (
        <div className="bg-panel-bg border border-admin-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-elevated text-text-secondary text-xs">
                <th className="px-5 py-3 text-right font-semibold">الفرع</th>
                <th className="px-5 py-3 text-right font-semibold">المدينة</th>
                <th className="px-5 py-3 text-right font-semibold">الساعات</th>
                <th className="px-5 py-3 text-right font-semibold">الحالة</th>
                <th className="px-5 py-3 text-right font-semibold">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'جدة — الأمير فواز', city: 'جدة', hours: '1:00 م - 11:59 م', status: 'active' },
                { name: 'الرياض — لبن', city: 'الرياض', hours: '1:00 م - 11:59 م', status: 'active' },
                { name: 'المدينة المنورة', city: 'المدينة', hours: '1:00 م - 11:59 م', status: 'active' },
              ].map((b) => (
                <tr key={b.name} className="border-t border-admin-border hover:bg-elevated/50 transition-colors">
                  <td className="px-5 py-4 text-text-primary text-sm font-semibold">{b.name}</td>
                  <td className="px-5 py-4 text-text-secondary text-sm">{b.city}</td>
                  <td className="px-5 py-4 text-text-muted text-sm">{b.hours}</td>
                  <td className="px-5 py-4">
                    <span className="bg-success-green/15 text-success-green text-xs font-semibold px-2 py-0.5 rounded-small">نشط</span>
                  </td>
                  <td className="px-5 py-4">
                    <button className="text-amber-fire text-sm font-semibold hover:text-amber-glow">تعديل</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'payment' && (
        <div className="bg-panel-bg border border-admin-border rounded-xl p-6 max-w-2xl space-y-5">
          <h3 className="font-display font-bold text-text-primary text-lg">طرق الدفع</h3>
          {[
            { name: 'نقدي عند الاستلام', active: true },
            { name: 'بطاقة ائتمانية', active: true },
            { name: 'Apple Pay', active: true },
            { name: 'STC Pay', active: false },
          ].map((method) => (
            <div key={method.name} className="flex items-center justify-between py-3 border-b border-admin-border last:border-0">
              <span className="text-text-primary text-sm">{method.name}</span>
              <button
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  method.active ? 'bg-amber-fire' : 'bg-ash'
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    method.active ? 'left-5.5' : 'left-0.5'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-panel-bg border border-admin-border rounded-xl overflow-hidden">
          <div className="p-5 border-b border-admin-border flex justify-between items-center">
            <h3 className="font-display font-bold text-text-primary">المستخدمين</h3>
            <button className="h-9 px-4 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors">
              إضافة مستخدم
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-elevated text-text-secondary text-xs">
                <th className="px-5 py-3 text-right font-semibold">الاسم</th>
                <th className="px-5 py-3 text-right font-semibold">البريد الإلكتروني</th>
                <th className="px-5 py-3 text-right font-semibold">الدور</th>
                <th className="px-5 py-3 text-right font-semibold">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'محمد الإداري', email: 'admin@wicht.com', role: 'مدير', status: 'active' },
                { name: 'فاطمة المحررة', email: 'editor@wicht.com', role: 'محرر', status: 'active' },
                { name: 'علي العارض', email: 'viewer@wicht.com', role: 'عارض', status: 'inactive' },
              ].map((u) => (
                <tr key={u.email} className="border-t border-admin-border hover:bg-elevated/50 transition-colors">
                  <td className="px-5 py-4 text-text-primary text-sm font-semibold">{u.name}</td>
                  <td className="px-5 py-4 text-text-secondary text-sm">{u.email}</td>
                  <td className="px-5 py-4">
                    <span className="bg-amber-fire/10 text-amber-fire text-xs font-semibold px-2 py-0.5 rounded-small">{u.role}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-small ${u.status === 'active' ? 'bg-success-green/15 text-success-green' : 'bg-error-red/15 text-error-red'}`}>
                      {u.status === 'active' ? 'نشط' : 'غير نشط'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'appearance' && (
        <div className="bg-panel-bg border border-admin-border rounded-xl p-6 max-w-2xl space-y-5">
          <h3 className="font-display font-bold text-text-primary text-lg">مظهر لوحة التحكم</h3>
          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-2">الوضع</label>
            <div className="flex gap-3">
              {['داكن', 'فاتح', 'تلقائي'].map((mode) => (
                <button
                  key={mode}
                  className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                    mode === 'داكن'
                      ? 'bg-amber-fire/10 border-amber-fire/30 text-amber-fire'
                      : 'bg-elevated border-admin-border text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-2">اللون الأساسي</label>
            <div className="flex gap-3">
              {['#E85D04', '#E84D6C', '#8A5AE8', '#2D8A4E', '#2563EB'].map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-transparent hover:border-white/50 transition-colors"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <button className="h-10 px-6 bg-elevated border border-admin-border text-text-primary font-semibold text-sm rounded-lg hover:bg-elevated/80 transition-colors">
            إعادة الضبط
          </button>
        </div>
      )}
    </div>
  );
}
