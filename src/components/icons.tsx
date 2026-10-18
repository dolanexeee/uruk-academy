/* Original URUK icon set — one consistent stroke style (1.8 stroke, rounded
   caps/joins, currentColor so callers control the gold/lapis palette).
   Drawn for this project; replaces all emoji in the UI chrome. */

interface IconProps {
  size?: number;
  className?: string;
}

function base(size: number) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
}

export function IconHome({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 11.2 12 4l8 7.2" />
      <path d="M6.3 9.8v9.7h11.4V9.8" />
      <path d="M10 19.5v-4.8h4v4.8" />
    </svg>
  );
}

export function IconBook({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 6.2C10.2 5 8 4.4 5 4.4v13.4c3 0 5.2.6 7 1.8 1.8-1.2 4-1.8 7-1.8V4.4c-3 0-5.2.6-7 1.8z" />
      <path d="M12 6.2v13.4" />
    </svg>
  );
}

export function IconCards({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M8.5 5.5V5A2.5 2.5 0 0 1 11 2.5h7A2.5 2.5 0 0 1 20.5 5v11a2.5 2.5 0 0 1-2.5 2.5h-1" />
      <rect x="3.5" y="7" width="13" height="14.5" rx="2" />
      <path d="M7 12h6M7 15.8h4" />
    </svg>
  );
}

export function IconClipboard({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="5.5" y="4.5" width="13" height="17" rx="2" />
      <rect x="9.3" y="2.5" width="5.4" height="4" rx="1.2" />
      <path d="M9 11.2h6M9 15h6" />
    </svg>
  );
}

export function IconUser({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20.2c1.2-3.3 3.9-5 7-5s5.8 1.7 7 5" />
    </svg>
  );
}

export function IconFlame({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3.2c.9 2.9-1.4 4.5-2.5 5.9C8.3 10.5 7.2 12 7.2 14a4.8 4.8 0 0 0 9.6 0c0-1.2-.5-2.3-1.1-3.3-.4 1-1 1.7-1.9 2.3.3-2.8-.5-6-1.8-7.8z" />
    </svg>
  );
}

export function IconCalendar({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="4" y="6" width="16" height="14.5" rx="2" />
      <path d="M4 10.8h16M8.5 3.5v4M15.5 3.5v4" />
    </svg>
  );
}

export function IconLock({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <circle cx="12" cy="15.2" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCheck({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12.6 10.2 17.8 19 7" />
    </svg>
  );
}

export function IconX({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconChevronEnd({ size = 22, className }: IconProps) {
  /* points left — "forward" in the RTL flow */
  return (
    <svg {...base(size)} className={className}>
      <path d="M14.5 5 7.5 12l7 7" />
    </svg>
  );
}

export function IconChevronStart({ size = 22, className }: IconProps) {
  /* points right — "back" in the RTL flow */
  return (
    <svg {...base(size)} className={className}>
      <path d="M9.5 5l7 7-7 7" />
    </svg>
  );
}

export function IconClock({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconPen({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 20l1.2-4.2L16.6 4.4a2.15 2.15 0 0 1 3 3L8.2 18.8z" />
      <path d="M14.6 6.4l3 3" />
    </svg>
  );
}

export function IconType({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4.5 19.5 12 4.5l7.5 15" />
      <path d="M7.8 14h8.4" />
    </svg>
  );
}

export function IconBulb({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3a6.2 6.2 0 0 1 3.6 11.2c-.7.6-1.1 1.3-1.1 2.3h-5c0-1-.4-1.7-1.1-2.3A6.2 6.2 0 0 1 12 3z" />
      <path d="M9.5 19.8h5M10.4 22h3.2" />
    </svg>
  );
}

export function IconIshtarStar({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="2.1" />
      <path d="M12 3v3.6M12 17.4V21M3 12h3.6M17.4 12H21M5.6 5.6l2.5 2.5M15.9 15.9l2.5 2.5M18.4 5.6l-2.5 2.5M8.1 15.9l-2.5 2.5" />
    </svg>
  );
}

export function IconTrophy({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M7 4h10v5.2a5 5 0 0 1-10 0z" />
      <path d="M7 5H4.6a2.6 2.6 0 0 0 2.7 4.4M17 5h2.4a2.6 2.6 0 0 1-2.7 4.4" />
      <path d="M12 14.2v3.3M9 20.5h6M12 17.5v3" />
    </svg>
  );
}

export function IconRefresh({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20 12a8 8 0 1 1-2.4-5.7" />
      <path d="M20.5 3.5v4.7h-4.7" />
    </svg>
  );
}

export function IconQuizMark({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.7 9.4A2.6 2.6 0 1 1 12.1 12c-.8.35-1.3 1-1.3 1.9" />
      <path d="M12 17h.01" strokeWidth={2.6} />
    </svg>
  );
}

export function IconCircle({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

/* Cuneiform wedge marker (filled glyph) — used to number lesson sections.
   A stylised wedge head on a shaft, after the impressed signs of clay tablets. */
export function WedgeMark({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M13.2 5.5 21 12l-7.8 6.5v-4.2H3.5V9.7h9.7z" />
    </svg>
  );
}
