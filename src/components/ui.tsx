/* Shared UI atoms — original URUK artwork (stepped ziggurat + Ishtar star). */

export function ZigguratMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" role="img" aria-label="شعار أكاديمية أوروك">
      <defs>
        <linearGradient id="ua-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1D56B4" />
          <stop offset="1" stopColor="#0A1C40" />
        </linearGradient>
        <linearGradient id="ua-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F6D67C" />
          <stop offset="0.55" stopColor="#D9A441" />
          <stop offset="1" stopColor="#B57E26" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="90" height="90" rx="22" fill="url(#ua-ground)" />
      <rect x="3.75" y="3.75" width="88.5" height="88.5" rx="21" fill="none" stroke="#F6D67C" strokeOpacity="0.22" strokeWidth="1.5" />
      {/* star of Ishtar above the shrine */}
      <g fill="#F7ECD2">
        <rect x="43.6" y="13.6" width="8.8" height="8.8" rx="1.2" />
        <rect x="43.6" y="13.6" width="8.8" height="8.8" rx="1.2" transform="rotate(45 48 18)" />
      </g>
      <circle cx="48" cy="18" r="1.8" fill="#D9A441" />
      {/* stepped ziggurat: three terraces + shrine */}
      <rect x="20" y="72" width="56" height="9" rx="1.5" fill="url(#ua-gold)" />
      <rect x="27" y="62" width="42" height="9" rx="1.5" fill="#C99A5F" />
      <rect x="34" y="52" width="28" height="9" rx="1.5" fill="url(#ua-gold)" />
      <rect x="41" y="40" width="14" height="11" rx="1.5" fill="#F7ECD2" />
      <rect x="45.4" y="44" width="5.2" height="7" rx="1" fill="#0E2A57" />
      {/* stair */}
      <rect x="45.8" y="52" width="4.4" height="29" fill="#0E2A57" opacity="0.28" />
    </svg>
  );
}

export function ProgressRing({
  value,
  size = 64,
  stroke = 6,
  track = 'rgba(18,48,100,0.12)',
  bar = '#D9A441',
  children,
}: {
  value: number; // 0..1
  size?: number;
  stroke?: number;
  track?: string;
  bar?: string;
  children?: React.ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(1, value));
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={bar}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - clamped)}
          style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.22,0.9,0.3,1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}

export function Chip({ children, tone = 'lapis' }: { children: React.ReactNode; tone?: 'lapis' | 'gold' | 'teal' | 'muted' }) {
  const tones: Record<string, string> = {
    lapis: 'bg-lapis-50 text-lapis-700 border-lapis-100',
    gold: 'bg-gold-200/60 text-gold-700 border-gold-300/60',
    teal: 'bg-tealdeep-500/10 text-tealdeep-600 border-tealdeep-500/25',
    muted: 'bg-ink-900/5 text-ink-600 border-ink-900/10',
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function fmtDate(iso: string | null): string {
  if (!iso) return '—';
  try {
    return new Intl.DateTimeFormat('ar', { year: 'numeric', month: 'long', day: 'numeric' }).format(
      new Date(iso + 'T12:00:00'),
    );
  } catch {
    return iso;
  }
}

export const pct = (a: number, b: number) => (b <= 0 ? 0 : Math.round((a / b) * 100));
