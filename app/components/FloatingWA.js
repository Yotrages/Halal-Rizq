'use client';

import { WA_LINK, WhatsAppIcon } from './CTAButton';

export default function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 999,
        width: 62,
        height: 62,
        borderRadius: '50%',
        background: 'linear-gradient(135deg,#25d366,#128c7e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
        animation: 'float 3s ease-in-out infinite',
        textDecoration: 'none',
      }}
    >
      <WhatsAppIcon size={30} />
      <span style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        border: '2px solid rgba(37,211,102,0.5)',
        animation: 'pulse-ring 1.8s ease-out infinite',
      }} />
    </a>
  );
}
