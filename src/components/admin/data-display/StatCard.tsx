import { type LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: { value: number; direction: 'up' | 'down' };
  color?: string;
}

export default function StatCard({ title, value, icon: Icon, trend, color = 'amber-fire' }: StatCardProps) {
  return (
    <div className="bg-panel-bg border border-admin-border rounded-xl p-5 hover:shadow-admin-panel-hover transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-lg bg-${color}/10 flex items-center justify-center`}>
          <Icon size={20} className={`text-${color}`} />
        </div>
      </div>
      <div className="text-2xl font-bold text-text-primary mb-1">{value}</div>
      <div className="text-sm text-text-secondary">{title}</div>
      {trend && (
        <div className={`flex items-center gap-1 mt-2 text-xs font-semibold ${
          trend.direction === 'up' ? 'text-success-green' : 'text-error-red'
        }`}>
          <span>{trend.direction === 'up' ? '↑' : '↓'}</span>
          <span>{trend.value}%</span>
          <span className="text-text-muted font-normal mr-1">من الشهر الماضي</span>
        </div>
      )}
    </div>
  );
}
