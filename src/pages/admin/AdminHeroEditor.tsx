import { useState } from 'react';
import { Eye, Save, Upload } from 'lucide-react';

export default function AdminHeroEditor() {
  const [headline, setHeadline] = useState('صُنِع ليبهرك.');
  const [subtitle, setSubtitle] = useState('ساندويتشات مشوية بمزاج وفلافل لا تُنسى.');
  const [ctaPrimary, setCtaPrimary] = useState('استكشف القائمة');
  const [ctaSecondary, setCtaSecondary] = useState('اطلب الآن');
  const [vignette, setVignette] = useState(70);
  const [glowIntensity, setGlowIntensity] = useState(40);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="h-10 px-4 bg-elevated border border-admin-border text-text-primary font-semibold text-sm rounded-lg hover:bg-elevated/80 transition-colors flex items-center gap-2">
            <Eye size={16} />
            معاينة
          </button>
          <button className="h-10 px-4 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors flex items-center gap-2">
            <Save size={16} />
            حفظ التغييرات
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="bg-panel-bg border border-admin-border rounded-xl p-6 space-y-5">
          <h3 className="font-display font-bold text-text-primary text-lg">إعدادات الهيدر</h3>

          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">العنوان الرئيسي</label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full h-10 bg-elevated border border-admin-border rounded-lg px-3 text-sm text-text-primary focus:outline-none focus:border-amber-fire focus:ring-2 focus:ring-amber-fire/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">العنوان الفرعي</label>
            <textarea
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              rows={2}
              className="w-full bg-elevated border border-admin-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-amber-fire focus:ring-2 focus:ring-amber-fire/20 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-text-secondary mb-1.5">زر رئيسي</label>
              <input
                type="text"
                value={ctaPrimary}
                onChange={(e) => setCtaPrimary(e.target.value)}
                className="w-full h-10 bg-elevated border border-admin-border rounded-lg px-3 text-sm text-text-primary focus:outline-none focus:border-amber-fire"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-secondary mb-1.5">زر ثانوي</label>
              <input
                type="text"
                value={ctaSecondary}
                onChange={(e) => setCtaSecondary(e.target.value)}
                className="w-full h-10 bg-elevated border border-admin-border rounded-lg px-3 text-sm text-text-primary focus:outline-none focus:border-amber-fire"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">صورة الخلفية</label>
            <div className="border-2 border-dashed border-admin-border rounded-xl h-32 flex flex-col items-center justify-center gap-2 hover:border-amber-fire/40 hover:bg-amber-fire/5 transition-colors cursor-pointer">
              <Upload size={24} className="text-text-muted" />
              <span className="text-text-muted text-sm">اسحب الصورة هنا أو اضغط للاختيار</span>
              <span className="text-text-muted text-xs">PNG, JPG حتى 5MB</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">شدة الظل (Vignette): {vignette}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={vignette}
              onChange={(e) => setVignette(Number(e.target.value))}
              className="w-full accent-amber-fire"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">شدة التوهج (Glow): {glowIntensity}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={glowIntensity}
              onChange={(e) => setGlowIntensity(Number(e.target.value))}
              className="w-full accent-amber-fire"
            />
          </div>
        </div>

        {/* Preview */}
        <div className="bg-panel-bg border border-admin-border rounded-xl p-6">
          <h3 className="font-display font-bold text-text-primary text-lg mb-4">معاينة مباشرة</h3>
          <div className="relative rounded-xl overflow-hidden" style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
            <div className="relative w-full aspect-video">
              <img
                src="/images/hero-bg.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{
                background: `radial-gradient(ellipse 80% 70% at 50% 50%, transparent ${100 - vignette}%, #0A0A0A 100%)`
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="font-display font-extrabold text-cream text-4xl text-glow-strong mb-3">
                    {headline}
                  </h1>
                  <p className="text-parchment text-sm mb-6">{subtitle}</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="px-5 py-2 bg-amber-fire text-obsidian font-bold text-xs rounded-button">
                      {ctaPrimary}
                    </span>
                    <span className="px-5 py-2 border border-cream/40 text-cream font-bold text-xs rounded-button">
                      {ctaSecondary}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
