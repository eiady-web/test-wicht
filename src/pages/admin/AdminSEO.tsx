import { useState } from 'react';
import { Globe, FileText, Map } from 'lucide-react';

export default function AdminSEO() {
  const [activeTab, setActiveTab] = useState('general');
  const [metaTitle, setMetaTitle] = useState('ويشت | Wicht - Crafted To Hit Different');
  const [metaDesc, setMetaDesc] = useState('ساندويتشات مشوية بمزاج وفلافل لا تُنسى. Premium grilled sandwiches with unforgettable flavor.');
  const [keywords, setKeywords] = useState(['ساندويتش', 'مشويات', 'وجبات سريعة', 'جدة', 'الرياض']);
  const [gaId, setGaId] = useState('G-XXXXXXXXXX');

  const tabs = [
    { id: 'general', label: 'عام', icon: Globe },
    { id: 'pages', label: 'صفحات', icon: FileText },
    { id: 'sitemap', label: 'خريطة الموقع', icon: Map },
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
          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">
              عنوان الميتا (Meta Title)
              <span className="text-text-muted font-normal text-xs mr-2">{metaTitle.length}/60</span>
            </label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full h-10 bg-elevated border border-admin-border rounded-lg px-3 text-sm text-text-primary focus:outline-none focus:border-amber-fire focus:ring-2 focus:ring-amber-fire/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">
              وصف الميتا (Meta Description)
              <span className="text-text-muted font-normal text-xs mr-2">{metaDesc.length}/160</span>
            </label>
            <textarea
              value={metaDesc}
              onChange={(e) => setMetaDesc(e.target.value)}
              rows={3}
              className="w-full bg-elevated border border-admin-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-amber-fire focus:ring-2 focus:ring-amber-fire/20 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">الكلمات المفتاحية</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {keywords.map((k, i) => (
                <span key={i} className="inline-flex items-center gap-1 bg-elevated text-text-primary text-sm px-3 py-1 rounded-full border border-admin-border">
                  {k}
                  <button onClick={() => setKeywords(keywords.filter((_, idx) => idx !== i))} className="text-text-muted hover:text-error-red">×</button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="أضف كلمة مفتاحية واضغط Enter"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const val = (e.target as HTMLInputElement).value.trim();
                  if (val && !keywords.includes(val)) {
                    setKeywords([...keywords, val]);
                    (e.target as HTMLInputElement).value = '';
                  }
                }
              }}
              className="w-full h-10 bg-elevated border border-admin-border rounded-lg px-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber-fire"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">Google Analytics ID</label>
            <input
              type="text"
              value={gaId}
              onChange={(e) => setGaId(e.target.value)}
              className="w-full h-10 bg-elevated border border-admin-border rounded-lg px-3 text-sm text-text-primary focus:outline-none focus:border-amber-fire"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">صورة المشاركة الاجتماعية (OG Image)</label>
            <div className="border-2 border-dashed border-admin-border rounded-xl h-32 flex flex-col items-center justify-center gap-2 hover:border-amber-fire/40 transition-colors cursor-pointer">
              <span className="text-text-muted text-sm">1200 × 630 بكسل</span>
              <span className="text-text-muted text-xs">اضغط لاختيار صورة</span>
            </div>
          </div>

          <button className="h-10 px-6 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors">
            حفظ الإعدادات
          </button>
        </div>
      )}

      {activeTab === 'pages' && (
        <div className="bg-panel-bg border border-admin-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-elevated text-text-secondary text-xs">
                <th className="px-5 py-3 text-right font-semibold">الصفحة</th>
                <th className="px-5 py-3 text-right font-semibold">عنوان الميتا</th>
                <th className="px-5 py-3 text-right font-semibold">الوصف</th>
                <th className="px-5 py-3 text-right font-semibold">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {[
                { page: 'الصفحة الرئيسية', title: 'ويشت | Wicht - Crafted To Hit Different', desc: 'ساندويتشات مشوية بمزاج...' },
                { page: 'قائمة الطعام', title: 'قائمة ويشت | Wicht Menu', desc: 'اكتشف قائمتنا المتنوعة...' },
                { page: 'من نحن', title: 'من نحن | ويشت', desc: 'تعرف على قصة ويشت...' },
              ].map((p) => (
                <tr key={p.page} className="border-t border-admin-border hover:bg-elevated/50 transition-colors">
                  <td className="px-5 py-4 text-text-primary text-sm font-semibold">{p.page}</td>
                  <td className="px-5 py-4 text-text-secondary text-sm">{p.title}</td>
                  <td className="px-5 py-4 text-text-muted text-sm">{p.desc}</td>
                  <td className="px-5 py-4">
                    <button className="text-amber-fire text-sm font-semibold hover:text-amber-glow">تعديل</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'sitemap' && (
        <div className="bg-panel-bg border border-admin-border rounded-xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-text-primary">خريطة الموقع</h3>
              <p className="text-text-muted text-sm mt-1">آخر تحديث: 14 مايو 2025, 10:30 ص</p>
            </div>
          </div>
          <div className="bg-elevated rounded-lg p-4 font-mono text-xs text-text-secondary leading-relaxed overflow-x-auto">
            {`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://wicht.sa/</loc>
    <lastmod>2025-05-14</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://wicht.sa/menu</loc>
    <lastmod>2025-05-14</lastmod>
    <priority>0.9</priority>
  </url>
  ...`}
          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 px-4 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors">
              إعادة إنشاء
            </button>
            <button className="h-10 px-4 bg-elevated border border-admin-border text-text-primary font-semibold text-sm rounded-lg hover:bg-elevated/80 transition-colors">
              تحميل
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
