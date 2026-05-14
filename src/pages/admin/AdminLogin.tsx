import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Demo auth - just redirect
    setTimeout(() => {
      navigate('/admin/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-admin-bg flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] bg-panel-bg rounded-2xl shadow-admin-panel p-8 md:p-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center mb-6">
            <span className="font-brand text-warm-gold text-sm tracking-wider">Wicht</span>
            <span className="font-display font-extrabold text-cream text-4xl">ويشت</span>
          </div>
          <h1 className="font-display font-bold text-text-primary text-xl mb-2">
            تسجيل الدخول
          </h1>
          <p className="text-text-secondary text-sm">
            أدخل بياناتك للوصول إلى لوحة التحكم
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@wicht.com"
              className="w-full h-11 bg-elevated border border-admin-border rounded-lg px-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber-fire focus:ring-2 focus:ring-amber-fire/20 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-text-secondary mb-1.5">
              كلمة المرور
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-11 bg-elevated border border-admin-border rounded-lg px-3 pl-10 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-amber-fire focus:ring-2 focus:ring-amber-fire/20 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="rounded border-admin-border" />
            <label htmlFor="remember" className="text-sm text-text-secondary">تذكرني</label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-amber-fire text-obsidian font-bold rounded-lg hover:bg-amber-glow transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
            ) : (
              'تسجيل الدخول'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
