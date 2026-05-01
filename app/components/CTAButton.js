'use client';

import { useState } from 'react';

const WHATSAPP_NUMBER = '2349029282035';
export const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Assalamu%20Alaikum!%20I%20want%20the%20free%20Halal%20Rizq%20guide.`;

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CTAButton({
  text = 'Get the Free Guide Now',
  large = false,
  block = false,
  style = {},
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: block ? '100%' : 'auto',
        background: 'linear-gradient(135deg,#c9a84c 0%,#e8c96a 50%,#c9a84c 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 2.8s linear infinite',
        color: '#0b3d20',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: large ? '1.1rem' : '0.97rem',
        padding: large ? '20px 44px' : '15px 32px',
        borderRadius: 60,
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        boxShadow: hovered
          ? '0 14px 44px rgba(201,168,76,0.55), 0 4px 14px rgba(0,0,0,0.2)'
          : '0 6px 28px rgba(201,168,76,0.4), 0 2px 8px rgba(0,0,0,0.12)',
        transform: hovered ? 'translateY(-3px) scale(1.02)' : 'none',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
        letterSpacing: '0.01em',
        ...style,
      }}
    >
      <WhatsAppIcon size={large ? 22 : 18} />
      {text}
    </a>
  );
}
