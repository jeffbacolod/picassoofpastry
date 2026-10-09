import { useId } from 'react';

const TONES = {
  burgundy: ['#8A2236', '#5E1424', '#3F0C18'],
  bordeaux: ['#6E1626', '#4A0F1E', '#300912'],
  plum: ['#5A1A3A', '#3C0F27', '#260818'],
  ube: ['#5B2C6F', '#3F1B50', '#291036'],
};

// Window opening on the front face of the box.
const WIN = { x: 76, y: 184, w: 148, h: 104 };
const FLOOR = 278;

/* ---------- Pastries seen through the window ---------- */

function Roll({ a, b, c }) {
  return (
    <g>
      <rect x="94" y={FLOOR - 40} width="104" height="40" rx="20" fill={a} />
      <path d={`M104 ${FLOOR - 33} Q146 ${FLOOR - 41} 190 ${FLOOR - 33}`} stroke={b} strokeWidth="3" fill="none" opacity="0.55" strokeLinecap="round" />
      <path d={`M100 ${FLOOR - 22} Q146 ${FLOOR - 30} 192 ${FLOOR - 22}`} stroke={b} strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round" />
      {/* spiral end — meringue wrapped around custard */}
      <ellipse cx="196" cy={FLOOR - 20} rx="11" ry="20" fill={c} />
      <ellipse cx="196" cy={FLOOR - 20} rx="7" ry="13" fill={a} />
      <ellipse cx="196" cy={FLOOR - 20} rx="3.5" ry="6.5" fill={c} />
      {[110, 128, 150, 172].map((x) => (
        <circle key={x} cx={x} cy={FLOOR - 37} r="1.4" fill="#FFFFFF" opacity="0.8" />
      ))}
    </g>
  );
}

function Round({ a, top, dot, crust }) {
  const y = FLOOR - 44;
  return (
    <g>
      <rect x="98" y={y} width="104" height="44" fill={a} />
      <rect x="98" y={FLOOR - 9} width="104" height="9" fill={crust} />
      <ellipse cx="150" cy={FLOOR} rx="52" ry="6" fill={crust} />
      <ellipse cx="150" cy={y} rx="52" ry="9" fill={top} />
      {/* soft side shading for a moist, glossy look */}
      <rect x="98" y={y} width="14" height="44" fill="#000" opacity="0.08" />
      <rect x="188" y={y} width="14" height="44" fill="#000" opacity="0.1" />
      {[-34, -17, 0, 17, 34].map((dx, i) => (
        <ellipse key={dx} cx={150 + dx} cy={y - 1 + (i % 2) * 2} rx="6" ry="2.6" fill={dot} />
      ))}
    </g>
  );
}

function Layer({ a, b, top, dot }) {
  const stripes = [0, 1, 2, 3];
  return (
    <g>
      {stripes.map((i) => (
        <rect key={i} x="92" y={FLOOR - 40 + i * 10} width="116" height="10" fill={i % 2 ? b : a} />
      ))}
      <rect x="92" y={FLOOR - 46} width="116" height="6" fill={top} />
      {[100, 116, 132, 148, 164, 180, 196].map((x, i) => (
        <circle key={x} cx={x} cy={FLOOR - 47 + (i % 2)} r="2.4" fill={dot} />
      ))}
    </g>
  );
}

function Pie({ a, b, c }) {
  const y = FLOOR - 20;
  return (
    <g>
      <rect x="90" y={y} width="120" height="20" fill={a} />
      {Array.from({ length: 15 }, (_, i) => (
        <circle key={i} cx={94 + i * 8} cy={y} r="4" fill={a} />
      ))}
      <ellipse cx="150" cy={y - 1} rx="54" ry="6" fill={b} />
      {[112, 131, 150, 169, 188].map((x) => (
        <path key={x} d={`M${x - 6} ${y - 2} Q${x} ${y - 14} ${x + 6} ${y - 2} Z`} fill={c} />
      ))}
      <rect x="90" y={y + 4} width="120" height="2" fill="#000" opacity="0.08" />
    </g>
  );
}

function Cupcakes({ a, b, c }) {
  return (
    <g>
      {[104, 150, 196].map((x, i) => (
        <g key={x}>
          <path d={`M${x - 16} ${FLOOR - 24} L${x + 16} ${FLOOR - 24} L${x + 12} ${FLOOR} L${x - 12} ${FLOOR} Z`} fill={a} />
          {[-8, 0, 8].map((dx) => (
            <line key={dx} x1={x + dx} y1={FLOOR - 23} x2={x + dx * 0.8} y2={FLOOR - 1} stroke="#8C6A34" strokeWidth="0.8" opacity="0.6" />
          ))}
          <ellipse cx={x} cy={FLOOR - 28} rx="18" ry="8" fill={i === 1 ? c : b} />
          <ellipse cx={x} cy={FLOOR - 35} rx="13" ry="7" fill={i === 1 ? c : b} />
          <ellipse cx={x} cy={FLOOR - 41} rx="7" ry="5" fill={i === 1 ? c : b} />
          <circle cx={x} cy={FLOOR - 47} r="2.6" fill={i === 1 ? b : c} />
        </g>
      ))}
    </g>
  );
}

function Pieces({ shape, a, b }) {
  const xs = [102, 134, 166, 198];
  return (
    <g>
      {xs.map((x) => {
        if (shape === 'bar') {
          return (
            <g key={x}>
              <rect x={x - 13} y={FLOOR - 18} width="26" height="18" rx="2" fill={a} />
              {[-6, 1, 7].map((dx, i) => <circle key={dx} cx={x + dx} cy={FLOOR - 12 + (i % 2) * 5} r="2" fill={b} />)}
            </g>
          );
        }
        if (shape === 'oval') {
          return (
            <g key={x}>
              <ellipse cx={x} cy={FLOOR - 10} rx="14" ry="10" fill={a} />
              {[-7, -2, 4, 8].map((dx, i) => <circle key={dx} cx={x + dx} cy={FLOOR - 14 + (i % 2) * 6} r="1.3" fill={b} />)}
            </g>
          );
        }
        if (shape === 'dome') {
          return (
            <g key={x}>
              <path d={`M${x - 14} ${FLOOR} Q${x - 14} ${FLOOR - 26} ${x} ${FLOOR - 26} Q${x + 14} ${FLOOR - 26} ${x + 14} ${FLOOR} Z`} fill={a} />
              <ellipse cx={x} cy={FLOOR - 22} rx="8" ry="3" fill={b} opacity="0.9" />
            </g>
          );
        }
        // swirl — ensaymada with grated cheese
        return (
          <g key={x}>
            <ellipse cx={x} cy={FLOOR - 11} rx="15" ry="11" fill={a} />
            <path d={`M${x - 8} ${FLOOR - 13} Q${x} ${FLOOR - 21} ${x + 8} ${FLOOR - 13}`} stroke="#C98F4E" strokeWidth="1.2" fill="none" />
            {[-6, -1, 4, 8].map((dx, i) => <line key={dx} x1={x + dx} y1={FLOOR - 18 + (i % 2) * 3} x2={x + dx + 3} y2={FLOOR - 16 + (i % 2) * 3} stroke={b} strokeWidth="1.6" strokeLinecap="round" />)}
          </g>
        );
      })}
    </g>
  );
}

const SHAPES = { roll: Roll, round: Round, layer: Layer, pie: Pie, cupcakes: Cupcakes, pieces: Pieces };

/* ---------- The box ---------- */

// One gift box with a clear window on the front, tied with a champagne ribbon on the lid.
function Box({ ids, tone, look, clipId }) {
  const [light, , dark] = TONES[tone] || TONES.burgundy;
  const Pastry = look ? SHAPES[look.type] : null;

  return (
    <g>
      <ellipse cx="165" cy="326" rx="120" ry="10" fill="#000" opacity="0.45" />
      {/* side */}
      <polygon points="240,170 270,140 270,290 240,320" fill={dark} />
      {/* front */}
      <rect x="60" y="170" width="180" height="150" fill={`url(#${ids.front})`} />

      {/* window — interior, pastry, then the clear film */}
      <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={`url(#${ids.liner})`} />
      <g clipPath={`url(#${clipId})`}>
        {Pastry && (
          <g transform={`translate(150 ${FLOOR}) scale(1.2) translate(-150 -${FLOOR})`}>
            <Pastry {...look} />
          </g>
        )}
        <rect x={WIN.x + 6} y={FLOOR} width={WIN.w - 12} height="4" fill={`url(#${ids.gold})`} />
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height="16" fill={`url(#${ids.shade})`} />
        <polygon points={`${WIN.x},${WIN.y} ${WIN.x + 52},${WIN.y} ${WIN.x + 18},${WIN.y + WIN.h} ${WIN.x},${WIN.y + WIN.h}`} fill="#FFFFFF" opacity="0.1" />
        <polygon points={`${WIN.x + 64},${WIN.y} ${WIN.x + 74},${WIN.y} ${WIN.x + 40},${WIN.y + WIN.h} ${WIN.x + 30},${WIN.y + WIN.h}`} fill="#FFFFFF" opacity="0.08" />
      </g>
      <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill="none" stroke="#D9BE86" strokeWidth="1" />

      {/* foil wordmark under the window */}
      <text x="150" y="307" fill="#D9BE86" fontFamily="'Playfair Display SC', serif" fontSize="9" letterSpacing="3" textAnchor="middle">PICASSO OF PASTRY</text>

      {/* lid */}
      <polygon points="60,170 240,170 270,140 90,140" fill={light} />
      <polygon points="60,170 240,170 240,176 60,176" fill={dark} opacity="0.35" />

      {/* ribbon across the lid and down the side */}
      <polygon points="142,170 158,170 188,140 172,140" fill={`url(#${ids.gold})`} />
      <rect x="142" y="170" width="16" height="6" fill="#9C7A40" />
      <polygon points="68,162 248,162 261,149 81,149" fill={`url(#${ids.gold})`} />
      <polygon points="248,162 261,149 261,299 248,312" fill="#9C7A40" />

      {/* bow */}
      <g transform="translate(165 152)">
        <ellipse cx="-20" cy="-8" rx="22" ry="10" transform="rotate(-20)" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="6" />
        <ellipse cx="20" cy="-8" rx="22" ry="10" transform="rotate(20)" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="6" />
        <path d="M-4 2 L-18 26 M4 2 L18 26" stroke={`url(#${ids.gold})`} strokeWidth="6" strokeLinecap="round" />
        <circle r="7" fill={`url(#${ids.gold})`} />
      </g>
    </g>
  );
}

/**
 * Luxury window-box artwork used until real product photography is added.
 * variant="single" — one box showing `look`;
 * variant="stack" — three boxes showing `looks` (collection shot).
 */
export default function PastryBox({ tone = 'burgundy', glow = '#7A2236', label, look, looks = [], variant = 'single', className = '' }) {
  const uid = useId().replace(/:/g, '');
  const ids = { bg: `bg${uid}`, front: `fr${uid}`, gold: `gd${uid}`, liner: `ln${uid}`, shade: `sh${uid}`, clip: `cl${uid}` };
  const [light, mid] = TONES[tone] || TONES.burgundy;
  const altTone = tone === 'plum' ? 'bordeaux' : 'plum';

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
        <linearGradient id={ids.liner} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D9C7AE" />
          <stop offset="100%" stopColor="#F6EDDF" />
        </linearGradient>
        <linearGradient id={ids.shade} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <clipPath id={ids.clip}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
      </defs>
      <rect width="330" height="440" fill={`url(#${ids.bg})`} />
      {variant === 'stack' ? (
        <g>
          <g transform="translate(-12 40) scale(0.62)"><Box ids={ids} clipId={ids.clip} tone={tone} look={looks[0]} /></g>
          <g transform="translate(128 40) scale(0.62)"><Box ids={ids} clipId={ids.clip} tone={altTone} look={looks[1]} /></g>
          <g transform="translate(40 140) scale(0.72)"><Box ids={ids} clipId={ids.clip} tone={tone} look={looks[2]} /></g>
        </g>
      ) : (
        <g transform="translate(0 30)"><Box ids={ids} clipId={ids.clip} tone={tone} look={look} /></g>
      )}
    </svg>
  );
}
