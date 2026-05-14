import { useState } from 'react';
import { Send, ShoppingCart, AlertTriangle, Tag, Settings } from 'lucide-react';

const notifications = [
  { id: 1, title: 'طلب جديد', message: 'تم استلام طلب جديد WCH-1284 من أحمد محمد', type: 'order', read: false, time: 'منذ 5 دقائق', icon: ShoppingCart },
  { id: 2, title: 'تحديث النظام', message: 'تم تحديث النظام إلى الإصدار 2.4.0 بنجاح', type: 'system', read: false, time: 'منذ ساعة', icon: Settings },
  { id: 3, title: 'تنبيه مخزون', message: 'صوص السيراتشا على وشك النفاد في فرع جدة', type: 'alert', read: true, time: 'منذ 3 ساعات', icon: AlertTriangle },
  { id: 4, title: 'عرض جديد', message: 'تم إطلاق عرض ميجا ويشت الجديد', type: 'promotion', read: true, time: 'منذ يوم', icon: Tag },
  { id: 5, title: 'طلب مكتمل', message: 'تم إنجاز طلب WCH-1278 بنجاح', type: 'order', read: true, time: 'منذ يوم', icon: ShoppingCart },
];

const typeColors: Record<string, string> = {
  order: 'text-amber-fire bg-amber-fire/10',
  system: 'text-text-secondary bg-elevated',
  alert: 'text-amber-fire bg-amber-fire/10',
  promotion: 'text-success-green bg-success-green/10',
};

export default function AdminNotifications() {
  const [activeTab, setActiveTab] = useState('all');
  const tabs = [
    { id: 'all', label: 'الكل' },
    { id: 'unread', label: 'غير مقروءة' },
    { id: 'read', label: 'مقروءة' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-elevated rounded-lg p-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-panel-bg text-text-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button className="h-10 px-4 bg-amber-fire text-obsidian font-bold text-sm rounded-lg hover:bg-amber-glow transition-colors flex items-center gap-2">
          <Send size={16} />
          إرسال إشعار
        </button>
      </div>

      <div className="bg-panel-bg border border-admin-border rounded-xl divide-y divide-admin-border">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-start gap-4 p-5 hover:bg-elevated/50 transition-colors cursor-pointer ${
              !notif.read ? 'border-r-[3px] border-r-amber-fire' : ''
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${typeColors[notif.type]}`}>
              <notif.icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-text-primary text-sm">{notif.title}</h4>
                {!notif.read && <span className="w-2 h-2 bg-amber-fire rounded-full shrink-0" />}
              </div>
              <p className="text-text-secondary text-sm line-clamp-1">{notif.message}</p>
              <span className="text-text-muted text-xs mt-1">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
