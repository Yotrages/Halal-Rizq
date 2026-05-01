'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Is this 100% Halal and Shariah-compliant?',
    a: 'Yes, absolutely. Every method in this guide avoids riba (interest), gharar (uncertainty), and haram products. We only promote halal goods and ethical income streams — reviewed with Islamic principles in mind. Barakah is the goal.',
  },
  {
    q: 'Do I need any experience or tech skills?',
    a: 'None at all. The guide is designed for absolute beginners. If you can use WhatsApp, you can do this. Step-by-step instructions, screenshots, and real Nigerian examples are all included.',
  },
  {
    q: 'How much money can I realistically make?',
    a: "Results vary based on effort, but brothers and sisters in our community are making ₦50,000–₦150,000+ monthly within their first 60 days. Some do much more. It's not a get-rich scheme — it's a real skill that grows over time with consistency.",
  },
  {
    q: 'How do I receive my guide?',
    a: 'Simply click the WhatsApp button, send us a message, and we\'ll deliver everything directly to you on WhatsApp within minutes — no complicated sign-ups or email required.',
  },
  {
    q: 'What if it doesn\'t work for me?',
    a: 'We offer a full satisfaction guarantee. If you follow the steps and don\'t see any results, message us and we will either give you a full refund or work with you personally until it works. Your trust matters more than money.',
  },
  {
    q: 'Is this only for people in Lagos?',
    a: 'The guide is perfect for Lagos (all areas), but it works anywhere in Nigeria with internet access — Abuja, Kano, Ibadan, Port Harcourt — and even diaspora Muslims.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {FAQS.map((faq, i) => (
        <div key={i} style={{
          border: `1px solid ${open === i ? '#c9a84c' : '#d4e8da'}`,
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: open === i ? '0 4px 20px rgba(201,168,76,0.15)' : '0 2px 8px rgba(11,61,32,0.05)',
          transition: 'border-color 0.25s, box-shadow 0.25s',
        }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 24px',
              background: open === i ? 'linear-gradient(90deg,#f5e6b8,#fffdf6)' : '#fff',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: 12,
              transition: 'background 0.25s',
            }}
          >
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              color: '#0b3d20',
              fontSize: '1rem',
              flex: 1,
              lineHeight: 1.5,
            }}>
              {faq.q}
            </span>
            <span style={{
              flexShrink: 0,
              width: 30, height: 30,
              borderRadius: '50%',
              background: open === i ? '#c9a84c' : '#e8f5e9',
              color: open === i ? '#fff' : '#0b3d20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              fontWeight: 700,
              transition: 'background 0.25s, transform 0.3s',
              transform: open === i ? 'rotate(45deg)' : 'none',
              lineHeight: 1,
            }}>
              +
            </span>
          </button>

          <div style={{
            maxHeight: open === i ? '500px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.35s ease',
          }}>
            <div style={{
              padding: '0 24px 22px',
              color: '#4a6352',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              background: '#fff',
            }}>
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
