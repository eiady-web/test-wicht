import { Star, Reply, Flag, Trash2 } from 'lucide-react';

const reviews = [
  { id: 1, customer: 'أحمد محمد', date: '14 مايو 2025', branch: 'جدة — الأمير فواز', rating: 5, comment: 'أفضل ساندويتش جربته في حياتي! الشيش طاووق كان ممتاز والخدمة سريعة.', orderId: 'WCH-1284', status: 'approved' },
  { id: 2, customer: 'سارة العتيبي', date: '13 مايو 2025', branch: 'الرياض — لبن', rating: 4, comment: 'جودة ممتازة والسعر مناسب. أنصح به بشدة.', orderId: 'WCH-1276', status: 'approved' },
  { id: 3, customer: 'خالد السالم', date: '12 مايو 2025', branch: 'الطائف — البيعة', rating: 5, comment: 'بوكس اللمة كان رائع للعائلة. الكل استمتع!', orderId: 'WCH-1268', status: 'approved' },
  { id: 4, customer: 'نورة الحربي', date: '11 مايو 2025', branch: 'جدة — الحمدانية', rating: 3, comment: 'طعم جيد لكن الانتظار طول شوي.', orderId: 'WCH-1254', status: 'pending' },
  { id: 5, customer: 'فهد القحطاني', date: '10 مايو 2025', branch: 'المدينة المنورة', rating: 5, comment: 'كباب لحم الترفل لا يُوصف! تجربة فاخرة.', orderId: 'WCH-1241', status: 'approved' },
];

const ratingDistribution = [
  { stars: 5, count: 156, percent: 72 },
  { stars: 4, count: 42, percent: 19 },
  { stars: 3, count: 12, percent: 6 },
  { stars: 2, count: 4, percent: 2 },
  { stars: 1, count: 2, percent: 1 },
];

export default function AdminReviews() {


  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rating Summary */}
        <div className="lg:col-span-1 bg-panel-bg border border-admin-border rounded-xl p-6">
          <h3 className="font-display font-bold text-text-primary mb-4">توزيع التقييمات</h3>
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-text-primary mb-1">4.7</div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className={s <= 4 ? 'text-warm-gold fill-warm-gold' : s === 5 ? 'text-warm-gold fill-warm-gold/50' : 'text-ash'} />
              ))}
            </div>
            <div className="text-text-muted text-sm">من 216 تقييم</div>
          </div>
          <div className="space-y-2">
            {ratingDistribution.map((r) => (
              <div key={r.stars} className="flex items-center gap-3">
                <span className="text-text-secondary text-xs w-4">{r.stars}</span>
                <Star size={10} className="text-warm-gold shrink-0" />
                <div className="flex-1 h-2 bg-elevated rounded-full overflow-hidden">
                  <div className="h-full bg-warm-gold rounded-full" style={{ width: `${r.percent}%` }} />
                </div>
                <span className="text-text-muted text-xs w-8">{r.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-panel-bg border border-admin-border rounded-xl p-5 hover:shadow-admin-panel-hover transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display font-bold text-text-primary text-sm">{review.customer}</span>
                    <span className="text-text-muted text-xs">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} className={s <= review.rating ? 'text-warm-gold fill-warm-gold' : 'text-ash'} />
                      ))}
                    </div>
                    <span className="text-text-muted text-xs bg-elevated px-2 py-0.5 rounded-small">{review.branch}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-text-secondary hover:text-amber-fire rounded-lg transition-colors">
                    <Reply size={14} />
                  </button>
                  <button className="p-1.5 text-text-secondary hover:text-error-red rounded-lg transition-colors">
                    <Flag size={14} />
                  </button>
                  <button className="p-1.5 text-text-secondary hover:text-error-red rounded-lg transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-2">{review.comment}</p>
              <div className="text-text-muted text-xs">
                طلب #{review.orderId}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
