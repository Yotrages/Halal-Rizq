'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

/* ─── Constants ─── */
const WA_NUMBER = '2349029282035';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Assalamu%20Alaikum!%20I%20want%20the%20free%20Halal%20Rizq%20guide.`;

/* ════════════════════════════════════════════
   MICRO COMPONENTS
════════════════════════════════════════════ */

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CTAButton({ text = 'Get the Free Guide Now', large = false, block = false }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
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
        letterSpacing: '0.01em',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
        transform: hov ? 'translateY(-3px) scale(1.02)' : 'none',
        boxShadow: hov
          ? '0 14px 44px rgba(201,168,76,0.55),0 4px 14px rgba(0,0,0,0.2)'
          : '0 6px 28px rgba(201,168,76,0.4),0 2px 8px rgba(0,0,0,0.12)',
      }}
    >
      <WhatsAppIcon size={large ? 22 : 18} />
      {text}
    </a>
  );
}

function Check() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 24, height: 24, minWidth: 24,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#1e8449,#155c30)',
      color: '#fff', fontSize: '0.78rem', marginRight: 10,
      boxShadow: '0 2px 8px rgba(30,132,73,0.3)',
    }}>✓</span>
  );
}

function Stars({ n = 5 }) {
  return <span style={{ color: '#e8c96a', fontSize: '1.1rem', letterSpacing: 2 }}>{'★'.repeat(n)}</span>;
}

function Badge({ children, bg = '#e8f5e9', color = '#0b3d20' }) {
  return (
    <span style={{
      display: 'inline-block', background: bg, color,
      borderRadius: 40, padding: '6px 20px',
      fontSize: '0.78rem', fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 20,
    }}>
      {children}
    </span>
  );
}

/* ─── Islamic geometric SVG pattern ─── */
function GeomPattern({ id = 'gp', strokeColor = '#c9a84c', opacity = 0.065 }) {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={id} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" fill="none" stroke={strokeColor} strokeWidth="0.8" opacity={opacity * 10} />
          <polygon points="40,16 64,28 64,52 40,64 16,52 16,28" fill="none" stroke={strokeColor} strokeWidth="0.5" opacity={opacity * 7} />
          <line x1="40" y1="4" x2="40" y2="76" stroke={strokeColor} strokeWidth="0.3" opacity={opacity * 5} />
          <line x1="4" y1="22" x2="76" y2="58" stroke={strokeColor} strokeWidth="0.3" opacity={opacity * 5} />
          <line x1="76" y1="22" x2="4" y2="58" stroke={strokeColor} strokeWidth="0.3" opacity={opacity * 5} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* ─── Scroll-reveal wrapper ─── */
function Reveal({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(28px)',
      transition: `opacity 0.75s ${delay}s ease, transform 0.75s ${delay}s ease`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── Countdown timer ─── */
function Countdown() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev;
        if (--s < 0) { s = 59; if (--m < 0) { m = 59; if (--h < 0) h = 23; } }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = n => String(n).padStart(2, '0');
  return (
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', margin: '16px 0' }}>
      {[['hrs', time.h], ['min', time.m], ['sec', time.s]].map(([label, val]) => (
        <div key={label} style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(201,168,76,0.4)',
          borderRadius: 10, padding: '10px 18px', minWidth: 68, textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2rem', fontWeight: 700, color: '#e8c96a', lineHeight: 1 }}>
            {pad(val)}
          </div>
          <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: 4 }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Hover card (needs client for onMouseEnter) ─── */
function FeatureCard({ icon, title, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'linear-gradient(145deg,#f4fbf5,#fff)',
        border: '1px solid #d2e8d8',
        borderRadius: 20,
        padding: '28px 24px',
        cursor: 'default',
        transition: 'transform 0.22s, box-shadow 0.22s',
        transform: hov ? 'translateY(-5px)' : 'none',
        boxShadow: hov ? '0 14px 32px rgba(11,61,32,0.13)' : '0 2px 14px rgba(11,61,32,0.05)',
      }}
    >
      <div style={{ fontSize: '2.2rem', marginBottom: 14 }}>{icon}</div>
      <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.32rem', fontWeight: 700, color: '#0b3d20', marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: '0.89rem', color: '#4a6352', lineHeight: 1.68 }}>{desc}</p>
    </div>
  );
}

/* ─── FAQ accordion ─── */
function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'Is this 100% Halal and Shariah-compliant?', a: 'Yes, absolutely. Every method in this guide avoids riba (interest), gharar (uncertainty), and haram products. We only promote halal goods and ethical income streams — reviewed with Islamic principles in mind. Barakah is the goal.' },
    { q: 'Do I need any experience or tech skills?', a: 'None at all. The guide is designed for absolute beginners. If you can use WhatsApp, you can do this. Step-by-step instructions, screenshots, and real Nigerian examples are all included.' },
    { q: 'How much money can I realistically make?', a: "Results vary based on effort, but brothers and sisters in our community are making ₦50,000–₦150,000+ monthly within their first 60 days. Some do much more. It's not a get-rich scheme — it's a real skill that grows over time." },
    { q: 'How do I receive my guide?', a: "Simply click the WhatsApp button, send us a message, and we'll deliver everything directly to you on WhatsApp within minutes — no complicated sign-ups or email required." },
    { q: "What if it doesn't work for me?", a: "We offer a full satisfaction guarantee. If you follow the steps and don't see any results, message us and we will either give you a full refund or work with you personally until it works. Your trust matters more than money." },
    { q: 'Is this only for people in Lagos?', a: 'The guide is perfect for Lagos (all areas), but it works anywhere in Nigeria with internet access — Abuja, Kano, Ibadan, Port Harcourt — and even diaspora Muslims.' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{
          border: `1px solid ${open === i ? '#c9a84c' : '#d4e8da'}`,
          borderRadius: 16, overflow: 'hidden',
          boxShadow: open === i ? '0 4px 20px rgba(201,168,76,0.15)' : '0 2px 8px rgba(11,61,32,0.05)',
          transition: 'border-color 0.25s, box-shadow 0.25s',
        }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', padding: '20px 24px',
              background: open === i ? 'linear-gradient(90deg,#f5e6b8,#fffdf6)' : '#fff',
              border: 'none', cursor: 'pointer', textAlign: 'left', gap: 12,
              transition: 'background 0.25s',
            }}
          >
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 700, color: '#0b3d20', fontSize: '1rem', flex: 1, lineHeight: 1.5 }}>
              {faq.q}
            </span>
            <span style={{
              flexShrink: 0, width: 30, height: 30, borderRadius: '50%',
              background: open === i ? '#c9a84c' : '#e8f5e9',
              color: open === i ? '#fff' : '#0b3d20',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.3rem', fontWeight: 700, lineHeight: 1,
              transition: 'background 0.25s, transform 0.3s',
              transform: open === i ? 'rotate(45deg)' : 'none',
            }}>+</span>
          </button>
          <div style={{ maxHeight: open === i ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
            <div style={{ padding: '0 24px 22px', color: '#4a6352', fontSize: '0.95rem', lineHeight: 1.75, background: '#fff' }}>
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Floating WhatsApp bubble ─── */
function FloatingWA() {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp"
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 999,
        width: 62, height: 62, borderRadius: '50%',
        background: 'linear-gradient(135deg,#25d366,#128c7e)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', textDecoration: 'none',
        boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
        animation: 'float 3s ease-in-out infinite',
      }}
    >
      <WhatsAppIcon size={30} />
      <span style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        border: '2px solid rgba(37,211,102,0.5)',
        animation: 'pulse-ring 1.8s ease-out infinite',
      }} />
    </a>
  );
}

/* ════════════════════════════════════════════
   MAIN PAGE
════════════════════════════════════════════ */
export default function Page() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', overflow: 'hidden',
        padding: '80px 24px 64px',
        background: 'linear-gradient(168deg,#061610 0%,#0b3d20 50%,#0d4a26 100%)',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1600&q=70"
            alt="Mosque at dusk"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.16 }}
            priority
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}><GeomPattern id="hero-gp" /></div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse 75% 60% at 50% 55%,rgba(201,168,76,0.09) 0%,transparent 72%)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 780, width: '100%' }}>
          {/* Halal badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(201,168,76,0.14)', border: '1px solid rgba(201,168,76,0.45)',
            borderRadius: 40, padding: '8px 22px', marginBottom: 28,
            animation: 'fadeUp 0.6s ease both',
          }}>
            <span style={{ fontSize: '1.1rem' }}>☪️</span>
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 700, color: '#e8c96a', fontSize: '0.8rem', letterSpacing: '1.8px', textTransform: 'uppercase' }}>
              100% Halal · No Riba · Barakah-First
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Cormorant Garamond,serif',
            fontSize: 'clamp(2.3rem,6vw,4.4rem)',
            fontWeight: 700, color: '#fff', lineHeight: 1.13,
            marginBottom: 24, animation: 'fadeUp 0.75s 0.1s ease both',
          }}>
            Earn Extra{' '}
            <span style={{
              background: 'linear-gradient(90deg,#c9a84c,#f0d878,#c9a84c)',
              backgroundSize: '200%', WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              animation: 'shimmer 3.5s linear infinite',
            }}>Halal Income</span>
            {' '}in Lagos<br />Without Compromising<br />Your Deen
          </h1>

          {/* Sub */}
          <p style={{
            fontFamily: 'DM Sans,sans-serif',
            fontSize: 'clamp(1rem,2.4vw,1.18rem)',
            color: 'rgba(255,255,255,0.8)', lineHeight: 1.75,
            maxWidth: 640, margin: '0 auto 38px',
            animation: 'fadeUp 0.75s 0.2s ease both',
          }}>
            Discover simple, Shariah-compliant side hustles that regular Muslims are using to make{' '}
            <strong style={{ color: '#e8c96a' }}>₦50,000–₦150,000+ monthly</strong> — straight from their phone.
          </p>

          <div style={{ animation: 'fadeUp 0.75s 0.3s ease both', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <CTAButton text="Get the Free Guide Now — via WhatsApp" large />
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>🔒 Completely Free · No spam · Delivered on WhatsApp in minutes</p>
          </div>

          {/* Stats */}
          <div style={{ marginTop: 52, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 36, animation: 'fadeUp 0.75s 0.45s ease both' }}>
            {[['👥','500+','Muslims Helped'],['☪️','100%','Shariah-Compliant'],['📱','₦50k+','Avg. Monthly Earn']].map(([icon,stat,label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 4 }}>{icon}</div>
                <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.8rem', fontWeight: 700, color: '#e8c96a', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll chevron */}
        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 2, animation: 'float 2.2s ease-in-out infinite' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ background: '#faf6ee', padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.035 }}><GeomPattern id="prob-gp" strokeColor="#0b3d20" opacity={0.5} /></div>
        <Reveal style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Badge>Does This Sound Like You?</Badge>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, color: '#0b3d20', marginBottom: 22 }}>
            Bills piling up while trying to keep everything halal?
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#4a6352', lineHeight: 1.8, marginBottom: 40 }}>
            You see haram opportunities everywhere — interest-based loans, betting apps, shady deals — but you refuse to compromise your deen.
            You want <strong style={{ color: '#0b3d20' }}>barakah in your rizq</strong>, not just cash.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 14, textAlign: 'left' }}>
            {["Rent or bills stress every month","Can't find halal side hustle ideas","Tried things that didn't work","No capital to start a big business","Don't know who to trust online","Want income that earns duas, not sins"].map(pain => (
              <div key={pain} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#fff', borderRadius: 14, padding: '14px 16px', boxShadow: '0 2px 14px rgba(11,61,32,0.07)', border: '1px solid #e4ede6', fontSize: '0.91rem', color: '#2d4a32', fontWeight: 500, lineHeight: 1.5 }}>
                <span style={{ color: '#c0392b', fontSize: '1.1rem', marginTop: 1, flexShrink: 0 }}>✗</span>{pain}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 44, padding: '28px 36px', background: 'linear-gradient(135deg,#0b3d20,#155c30)', borderRadius: 22, color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.08 }}><GeomPattern id="qbox-gp" strokeColor="#c9a84c" opacity={0.5} /></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '3.5rem', color: '#c9a84c', lineHeight: 0.5, display: 'block', marginBottom: 14 }}>"</span>
              <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.3rem', fontStyle: 'italic', lineHeight: 1.65, color: 'rgba(255,255,255,0.92)' }}>
                There is a halal path to abundance — and it starts with the right knowledge.
              </p>
              <p style={{ marginTop: 14, fontSize: '0.82rem', color: '#e8c96a', fontWeight: 600, letterSpacing: '0.5px' }}>— Halal Rizq Community, Lagos</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── SOLUTION & BENEFITS ── */}
      <section style={{ background: '#fff', padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        <Reveal style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Badge bg="linear-gradient(90deg,#0b3d20,#1e8449)" color="#fff">The Halal Rizq System</Badge>
            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, color: '#0b3d20', marginBottom: 16 }}>
              Everything You Need to Start Earning Halal — This Week
            </h2>
            <p style={{ color: '#4a6352', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
              No fluff. No theory. A practical, step-by-step system built specifically for Muslims in Nigeria.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(264px,1fr))', gap: 20, marginBottom: 56 }}>
            {[
              { icon: '📱', title: 'Start from Your Phone', desc: "No laptop, no office. Everything runs from your smartphone — WhatsApp, Instagram, or Jumia affiliate links." },
              { icon: '💰', title: 'No Big Capital Needed', desc: "Most methods start with ₦0–₦5,000. You don't need to risk your savings to earn your first ₦50k." },
              { icon: '🕌', title: 'Fully Shariah-Compliant', desc: "Every method vetted against Islamic principles. No riba, no gambling, no deception. Pure halal income." },
              { icon: '🇳🇬', title: 'Made for Nigerians', desc: "Real examples from Lagos, Kano, Abuja. Local platforms like Jumia, Konga & Nigerian digital markets included." },
              { icon: '📈', title: '₦50k–₦150k Monthly', desc: "Realistic, achievable targets. Follow the steps and scale — from side hustle to full-time halal rizq." },
              { icon: '🤝', title: 'Community & Support', desc: "Join a WhatsApp community of like-minded Muslim entrepreneurs. Share wins, get help, stay accountable." },
            ].map(card => <FeatureCard key={card.title} {...card} />)}
          </div>

          {/* What's inside */}
          <div style={{ background: 'linear-gradient(140deg,#0b3d20 0%,#0f4a28 100%)', borderRadius: 26, padding: '44px 40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}><GeomPattern id="inside-gp" strokeColor="#c9a84c" opacity={0.5} /></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: 30, textAlign: 'center' }}>
                📦 What's Inside the Free Guide
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
                {["Top 5 halal affiliate methods on Jumia & Konga","How to sell digital products with no inventory","WhatsApp marketing scripts that convert","Step-by-step setup — done in one afternoon","How to withdraw & manage your halal earnings","Bonus: Halal freelancing skills that pay well","Real testimonials from Nigerian Muslims","Private community access (ongoing support)"].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.88)', fontSize: '0.91rem', lineHeight: 1.55 }}>
                    <Check />{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: 'linear-gradient(180deg,#f0e9d6 0%,#faf6ee 100%)', padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }}><GeomPattern id="testi-gp" strokeColor="#0b3d20" opacity={0.5} /></div>
        <Reveal style={{ maxWidth: 920, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <Badge bg="#c9a84c" color="#fff">Testimonials</Badge>
            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.1rem)', fontWeight: 700, color: '#0b3d20' }}>
              Brothers & Sisters Already Earning Halal
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(264px,1fr))', gap: 22 }}>
            {[
              { name: 'Fatimah A.', location: 'Surulere, Lagos', earn: '₦67,000/mo', emoji: '🧕🏾', text: "Wallahi, I was skeptical at first. But I followed the guide and made ₦67,000 in my second month just doing affiliate marketing on WhatsApp. No riba, no problem. Alhamdulillah!" },
              { name: 'AbdulAzeez M.', location: 'Mushin, Lagos', earn: '₦52,000/mo', emoji: '🧔🏾', text: "As a fresh grad with no job, this was exactly what I needed. The guide is simple and halal. I started with nothing and now make consistent income. Barakallahu feek!" },
              { name: 'Khadijah O.', location: 'Ibadan, Oyo', earn: '₦98,000/mo', emoji: '🧕🏿', text: "I was worried it would be haram like other 'make money online' things. But this is genuinely clean. I've been doing it 3 months and it's changing my life. JazakAllah khair!" },
            ].map(({ name, location, earn, emoji, text }) => (
              <div key={name} style={{ background: '#fff', borderRadius: 22, padding: '28px 24px', boxShadow: '0 4px 22px rgba(11,61,32,0.08)', border: '1px solid #deeadf', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Stars />
                <p style={{ fontSize: '0.91rem', color: '#2d4a32', lineHeight: 1.73, fontStyle: 'italic', flex: 1 }}>"{text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 14, borderTop: '1px solid #e9f2ea' }}>
                  <div style={{ fontSize: '2.4rem' }}>{emoji}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0b3d20', fontSize: '0.94rem' }}>{name}</div>
                    <div style={{ fontSize: '0.76rem', color: '#7a9982' }}>{location}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', background: 'linear-gradient(135deg,#0b3d20,#1e8449)', color: '#e8c96a', borderRadius: 20, padding: '5px 13px', fontSize: '0.76rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{earn}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 50, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
            {[['☪️','100% Halal Verified'],['🚫','Zero Riba / Interest'],['🇳🇬','Made for Nigerians'],['🔒','Safe & Trustworthy'],['🤲','Created by a Muslim']].map(([icon,label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid #cfe6d3', borderRadius: 40, padding: '10px 20px', fontSize: '0.84rem', fontWeight: 600, color: '#0b3d20', boxShadow: '0 2px 10px rgba(11,61,32,0.06)' }}>
                <span>{icon}</span>{label}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── OFFER + URGENCY ── */}
      <section style={{ background: 'linear-gradient(162deg,#061610 0%,#0b3d20 100%)', padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}><GeomPattern id="offer-gp" strokeColor="#c9a84c" opacity={0.5} /></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 65% at 50% 50%,rgba(201,168,76,0.08) 0%,transparent 72%)' }} />
        <Reveal style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ background: 'rgba(192,57,43,0.18)', border: '1px solid rgba(192,57,43,0.45)', borderRadius: 12, padding: '12px 24px', marginBottom: 24, color: '#ff8a7a', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.5px' }}>
            ⚠️ FREE OFFER EXPIRES IN — Claim your copy before the timer hits zero!
          </div>
          <Countdown />
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, color: '#fff', margin: '28px 0 16px' }}>
            Get the Full Guide —{' '}
            <span style={{ background: 'linear-gradient(90deg,#c9a84c,#f0d878,#c9a84c)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 3.5s linear infinite' }}>100% Free</span>
            {' '}This Week
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.78, marginBottom: 36 }}>
            Normally valued at <s style={{ color: 'rgba(255,255,255,0.35)' }}>₦5,000</s>, we're giving this away FREE to the first 100 Muslims who take action this week. After that, the price goes up permanently.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.28)', borderRadius: 26, padding: '38px 34px', marginBottom: 32, textAlign: 'left' }}>
            <div style={{ fontSize: '0.78rem', color: '#e8c96a', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 20, textAlign: 'center' }}>What You Get Today — For Free</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[['✅','The Complete Halal Rizq Guide (PDF + WhatsApp training)'],['✅','Top halal affiliate methods for Jumia, Konga & more'],['✅','WhatsApp marketing scripts & templates (copy-paste ready)'],['✅','Private Muslim Entrepreneurs community access'],['✅','Ongoing personal support via WhatsApp'],['🎁','BONUS: Halal Freelancing Income Starter Pack']].map(([icon,item]) => (
                <div key={item} style={{ display: 'flex', gap: 12, color: 'rgba(255,255,255,0.86)', fontSize: '0.94rem', lineHeight: 1.5, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{icon}</span>{item}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 30, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Total Value</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
                <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.9rem', color: 'rgba(255,255,255,0.32)', textDecoration: 'line-through' }}>₦15,000</span>
                <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.8rem', fontWeight: 700, color: '#e8c96a' }}>FREE</span>
              </div>
            </div>
          </div>
          <CTAButton text="Claim My Free Guide on WhatsApp" large block />
          <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.4)', fontSize: '0.79rem' }}>💯 Satisfaction guaranteed — full refund if you're not happy. No questions asked.</p>
          <div style={{ marginTop: 30 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
              <span>🔥 78 of 100 free spots claimed</span><span>22 remaining</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 10, height: 9, overflow: 'hidden' }}>
              <div style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg,#c9a84c,#e8c96a)', borderRadius: 10 }} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '88px 24px' }}>
        <Reveal style={{ maxWidth: 740, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <Badge>Common Questions</Badge>
            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.1rem)', fontWeight: 700, color: '#0b3d20' }}>
              Answering Your Questions
            </h2>
          </div>
          <FAQ />
        </Reveal>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: 'linear-gradient(162deg,#061610,#0b3d20)', padding: '88px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}><GeomPattern id="final-gp" strokeColor="#c9a84c" opacity={0.5} /></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 50%,rgba(201,168,76,0.09) 0%,transparent 72%)' }} />
        <Reveal style={{ maxWidth: 660, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '3.8rem', marginBottom: 18 }}>🤲</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,5vw,3.3rem)', fontWeight: 700, color: '#fff', marginBottom: 18 }}>
            Your Halal Rizq Is Waiting
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', lineHeight: 1.82, marginBottom: 36 }}>
            Don't let another month pass with the same worries. Take one step toward barakah in your income today. It's free. It's halal. And it works.
          </p>
          <CTAButton text="Get Free Guide on WhatsApp Now" large block />
          <p style={{ marginTop: 24, color: 'rgba(255,255,255,0.35)', fontSize: '0.84rem', fontStyle: 'italic', fontFamily: 'Cormorant Garamond,serif' }}>
            "And whoever fears Allah — He will make for him a way out and provide for him from where he does not expect." — Quran 65:2–3
          </p>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#030b05', padding: '34px 24px', textAlign: 'center', color: 'rgba(255,255,255,0.38)', fontSize: '0.82rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.45rem', fontWeight: 700, color: '#c9a84c', marginBottom: 12 }}>☪️ Halal Rizq</div>
          <p style={{ marginBottom: 16 }}>Created for Muslims by a Muslim in Nigeria. All income methods are Shariah-compliant.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: '#c9a84c', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <WhatsAppIcon size={15} /> 09029282035
            </a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
            <span>© {year} Halal Rizq. All rights reserved.</span>
          </div>
          <p style={{ marginTop: 12, fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>Results may vary. Earnings depend on individual effort and market conditions.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <FloatingWA />

      {/* Global keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:.7} 100%{transform:scale(1.9);opacity:0} }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; overflow-x: hidden; font-family: 'DM Sans', sans-serif; background: #faf6ee; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #faf6ee; }
        ::-webkit-scrollbar-thumb { background: #155c30; border-radius: 8px; }
      `}</style>
    </>
  );
}
