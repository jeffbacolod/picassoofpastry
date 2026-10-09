import { useId } from 'react';

const TONES = {
  burgundy: ['#8A2236', '#5E1424', '#3F0C18'],
  bordeaux: ['#6E1626', '#4A0F1E', '#300912'],
  plum: ['#5A1A3A', '#3C0F27', '#260818'],
  ube: ['#5B2C6F', '#3F1B50', '#291036'],
};

// One gift box: front, lid and side, tied with a champagne ribbon and bow.
function Box({ ids, tone, label }) {
  const [light, , dark] = TONES[tone] || TONES.burgundy;
  return (
    <g>
      <ellipse cx="165" cy="326" rx="120" ry="10" fill="#000" opacity="0.45" />
      {/* side */}
      <polygon points="240,170 270,140 270,290 240,320" fill={dark} />
      {/* front */}
      <rect x="60" y="170" width="180" height="150" fill={`url(#${ids.front})`} />
      {/* lid */}
      <polygon points="60,170 240,170 270,140 90,140" fill={light} />
      <polygon points="60,170 240,170 240,176 60,176" fill={dark} opacity="0.35" />
      {/* ribbon — vertical */}
      <rect x="142" y="170" width="16" height="150" fill={`url(#${ids.gold})`} />
      <polygon points="142,170 158,170 188,140 172,140" fill={`url(#${ids.gold})`} />
      {/* ribbon — horizontal */}
      <rect x="60" y="238" width="180" height="13" fill={`url(#${ids.gold})`} />
      <polygon points="240,238 270,208 270,221 240,251" fill="#9C7A40" />
      <polygon points="68,162 248,162 261,149 81,149" fill={`url(#${ids.gold})`} />
      {/* bow */}
      <g transform="translate(165 152)">
        <ellipse cx="-20" cy="-8" rx="22" ry="10" transform="rotate(-20)" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="6" />
        <ellipse cx="20" cy="-8" rx="22" ry="10" transform="rotate(20)" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="6" />
        <path d="M-4 2 L-18 26 M4 2 L18 26" stroke={`url(#${ids.gold})`} strokeWidth="6" strokeLinecap="round" />
        <circle r="7" fill={`url(#${ids.gold})`} />
      </g>
      {/* foil wordmark */}
      <text x="100" y="208" fill="#D9BE86" fontFamily="'Playfair Display SC', serif" fontSize="9" letterSpacing="2.5" textAnchor="middle">PICASSO</text>
      <text x="100" y="220" fill="#D9BE86" fontFamily="'Playfair Display SC', serif" fontSize="6" letterSpacing="2" textAnchor="middle">OF PASTRY</text>
      {label && (
        <text x="150" y="296" fill="#E8D6AE" fontFamily="'Inter', sans-serif" fontSize="7" letterSpacing="2.5" textAnchor="middle" opacity="0.9">
          {label}
        </text>
      )}
    </g>
  );
}

/**
 * Luxury box artwork used until real product photography is added.
 * variant="single" — one box; variant="stack" — three boxes (collection shot).
 */
export default function PastryBox({ tone = 'burgundy', glow = '#7A2236', label, variant = 'single', className = '' }) {
  const uid = useId().replace(/:/g, '');
  const ids = { bg: `bg${uid}`, front: `fr${uid}`, gold: `gd${uid}` };
  const [light, mid] = TONES[tone] || TONES.burgundy;

  return (
    <svg viewBox="0 0 330 440" className={className} role="img" aria-label={label || 'Picasso of Pastry box'} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={ids.bg} cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.55" />
          <stop offset="55%" stopColor="#1C060C" />
          <stop offset="100%" stopColor="#0E0306" />
        </radialGradient>
        <linearGradient id={ids.front} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={light} />
          <stop offset="100%" stopColor={mid} />
        </linearGradient>
        <linearGradient id={ids.gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C6A34" />
          <stop offset="45%" stopColor="#E9D3A1" />
          <stop offset="100%" stopColor="#B08D4F" />
        </linearGradient>
      </defs>
      <rect width="330" height="440" fill={`url(#${ids.bg})`} />
      {variant === 'stack' ? (
        <g>
          <g transform="translate(-12 40) scale(0.62)"><Box ids={ids} tone={tone} /></g>
          <g transform="translate(128 40) scale(0.62)"><Box ids={ids} tone={tone === 'plum' ? 'bordeaux' : 'plum'} /></g>
          <g transform="translate(40 140) scale(0.72)"><Box ids={ids} tone={tone} /></g>
        </g>
      ) : (
        <g transform="translate(0 30)"><Box ids={ids} tone={tone} /></g>
      )}
    </svg>
  );
}
