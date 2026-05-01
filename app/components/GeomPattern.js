/** Pure decorative SVG — no interactivity needed, Server Component is fine */
export default function GeomPattern({ id = 'gp', strokeColor = '#c9a84c', opacity = 0.07 }) {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id={id} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <polygon
            points="40,4 76,22 76,58 40,76 4,58 4,22"
            fill="none"
            stroke={strokeColor}
            strokeWidth="0.8"
            opacity={opacity * 10}
          />
          <polygon
            points="40,16 64,28 64,52 40,64 16,52 16,28"
            fill="none"
            stroke={strokeColor}
            strokeWidth="0.5"
            opacity={opacity * 7}
          />
          <line x1="40" y1="4" x2="40" y2="76" stroke={strokeColor} strokeWidth="0.3" opacity={opacity * 5} />
          <line x1="4" y1="22" x2="76" y2="58" stroke={strokeColor} strokeWidth="0.3" opacity={opacity * 5} />
          <line x1="76" y1="22" x2="4" y2="58" stroke={strokeColor} strokeWidth="0.3" opacity={opacity * 5} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
