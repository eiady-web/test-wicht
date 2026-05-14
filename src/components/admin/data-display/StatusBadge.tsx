interface StatusBadgeProps {
  status: string;
  variant: 'success' | 'warning' | 'accent' | 'danger' | 'muted';
}

const variantClasses: Record<string, string> = {
  success: 'bg-success-green/15 text-success-green',
  warning: 'bg-amber-fire/15 text-amber-fire',
  accent: 'bg-amber-fire/15 text-amber-fire',
  danger: 'bg-error-red/15 text-error-red',
  muted: 'bg-ash/30 text-text-muted',
};

export default function StatusBadge({ status, variant }: StatusBadgeProps) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-small text-xs font-semibold ${variantClasses[variant]}`}>
      {status}
    </span>
  );
}
