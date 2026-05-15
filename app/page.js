'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

/* ─── Affiliate links ─── */
const LINKS = {
  earbuds:
    'https://www.jumia.com.ng/bolizma-wireless-earbuds-bluetooth-5.4-open-ear-bluetooth-headphones-wireless-ear-hook-earbuds-with-enc-noise-cancelling-mic-comfortable-sports-headset-with-long-battery-life-for-running-gym-driving-daily-use-418652828.html?sharedLink=d0YFYoX',
  powerbank:
    'https://www.jumia.com.ng/foomee-ab35-30000mah-power-bankwith-type-c-built-in-4-in-1-cable-4-output-dual-led-light-long-lasting-419068996.html?sharedLink=d0YFYoX',
  whatsapp:
    'https://wa.me/2349029282035?text=Assalamu%20Alaikum!%20I%20want%20the%20free%20Halal%20Rizq%20guide.',
};

/* ─── Scroll-reveal ─── */
function Reveal({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(24px)',
      transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── Islamic geometric pattern ─── */
function GeomPattern({ id, stroke = '#c9a84c', opacity = 0.07 }) {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={id} x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
          <polygon points="36,3 69,19.5 69,52.5 36,69 3,52.5 3,19.5"
            fill="none" stroke={stroke} strokeWidth="0.7" opacity={opacity * 10} />
          <polygon points="36,14 58,25.5 58,46.5 36,58 14,46.5 14,25.5"
            fill="none" stroke={stroke} strokeWidth="0.4" opacity={opacity * 7} />
          <line x1="36" y1="3" x2="36" y2="69" stroke={stroke} strokeWidth="0.3" opacity={opacity * 4} />
          <line x1="3" y1="19.5" x2="69" y2="52.5" stroke={stroke} strokeWidth="0.3" opacity={opacity * 4} />
          <line x1="69" y1="19.5" x2="3" y2="52.5" stroke={stroke} strokeWidth="0.3" opacity={opacity * 4} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* ─── WhatsApp icon ─── */
function WaIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Jumia button ─── */
function JumiaBtn({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: 8, width: '100%',
        background: hov
          ? 'linear-gradient(135deg,#e8780a,#f5960f)'
          : 'linear-gradient(135deg,#f5960f,#f7ab3d)',
        color: '#fff',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700, fontSize: '1rem',
        padding: '16px 24px', borderRadius: 14,
        textDecoration: 'none', border: 'none', cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov
          ? '0 10px 28px rgba(245,150,15,0.45)'
          : '0 4px 16px rgba(245,150,15,0.3)',
        letterSpacing: '0.01em',
      }}
    >
      {children}
      <span style={{ fontSize: '1.1rem', marginLeft: 2 }}>→</span>
    </a>
  );
}

/* ─── WhatsApp button ─── */
function WABtn({ href, children, large = false }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: 10,
        background: hov ? '#1ebe5a' : '#25d366',
        color: '#fff',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: large ? '1.05rem' : '0.97rem',
        padding: large ? '18px 36px' : '14px 28px',
        borderRadius: 50, textDecoration: 'none', border: 'none', cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov
          ? '0 10px 28px rgba(37,211,102,0.45)'
          : '0 4px 18px rgba(37,211,102,0.35)',
      }}
    >
      <WaIcon size={large ? 22 : 18} />
      {children}
    </a>
  );
}

/* ─── Product card with image gallery ─── */
function ProductCard({ title, description, images, jumiaHref, badge, features }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{
      background: '#fff',
      borderRadius: 22,
      overflow: 'hidden',
      boxShadow: '0 6px 32px rgba(11,61,32,0.11)',
      border: '1px solid #d6eade',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.25s, box-shadow 0.25s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 44px rgba(11,61,32,0.15)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 32px rgba(11,61,32,0.11)'; }}
    >
      {/* ── Main image ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 280,
        background: 'linear-gradient(135deg,#f0f7f2,#e4f3e9)',
        overflow: 'hidden',
      }}>
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center', transition: 'opacity 0.3s ease' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* Gradient vignette bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
          background: 'linear-gradient(to top, rgba(0,0,0,0.18), transparent)',
        }} />
        {badge && (
          <div style={{
            position: 'absolute', top: 14, left: 14,
            background: 'linear-gradient(135deg,#0b3d20,#1e8449)',
            color: '#e8c96a', borderRadius: 20,
            padding: '5px 14px', fontSize: '0.74rem',
            fontWeight: 700, letterSpacing: '0.8px',
            boxShadow: '0 2px 10px rgba(11,61,32,0.3)',
          }}>
            {badge}
          </div>
        )}
        {/* Image counter */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          background: 'rgba(0,0,0,0.45)',
          color: '#fff', borderRadius: 20,
          padding: '3px 10px', fontSize: '0.72rem',
          fontWeight: 600, backdropFilter: 'blur(6px)',
        }}>
          {active + 1} / {images.length}
        </div>
      </div>

      {/* ── Thumbnail strip ── */}
      <div style={{
        display: 'flex', gap: 8, padding: '10px 14px',
        background: '#f6fbf7',
        borderBottom: '1px solid #e2eedb',
        overflowX: 'auto',
      }}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              flexShrink: 0,
              width: 62, height: 52,
              borderRadius: 10,
              overflow: 'hidden',
              border: i === active
                ? '2.5px solid #1e8449'
                : '2.5px solid transparent',
              padding: 0, cursor: 'pointer',
              position: 'relative',
              outline: 'none',
              transition: 'border-color 0.2s, opacity 0.2s',
              opacity: i === active ? 1 : 0.62,
              background: '#e8f5ec',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="62px"
            />
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.45rem', fontWeight: 700,
          color: '#0b3d20', lineHeight: 1.25,
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.92rem', color: '#4a6352',
          lineHeight: 1.72, flex: 1,
        }}>
          {description}
        </p>

        {/* Feature chips */}
        {features && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {features.map(f => (
              <span key={f} style={{
                background: '#edf7f0',
                border: '1px solid #b6ddc2',
                borderRadius: 20,
                padding: '4px 12px',
                fontSize: '0.76rem',
                fontWeight: 600,
                color: '#0b5c28',
              }}>✓ {f}</span>
            ))}
          </div>
        )}

        {/* Jumia trust line */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: '#fff9f0',
          border: '1px solid #fde8c4',
          borderRadius: 10, padding: '10px 14px',
          fontSize: '0.8rem', color: '#7a5a1e', fontWeight: 500,
        }}>
          <span style={{ fontSize: '1rem' }}>🔗</span>
          Affiliate link · Sold & delivered by Jumia · No extra cost to you
        </div>

        <JumiaBtn href={jumiaHref}>Shop on Jumia Now</JumiaBtn>
      </div>
    </div>
  );
}

/* ─── Feature pill ─── */
function Pill({ icon, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 40, padding: '8px 16px',
      color: 'rgba(255,255,255,0.88)',
      fontSize: '0.82rem', fontWeight: 500, whiteSpace: 'nowrap',
    }}>
      <span>{icon}</span>{label}
    </div>
  );
}

/* ════════════════════════════════════════════
   PAGE
════════════════════════════════════════════ */
export default function Page() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(160deg,#072214 0%,#0b3d20 55%,#0f4a28 100%)',
        padding: 'clamp(72px,10vw,110px) 24px clamp(64px,8vw,96px)',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <GeomPattern id="hero-gp" stroke="#c9a84c" opacity={0.065} />
        </div>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
          {/* Brand badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(201,168,76,0.15)',
            border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: 40, padding: '7px 20px',
            marginBottom: 28,
            animation: 'fadeUp 0.6s ease both',
          }}>
            <span style={{ fontSize: '1rem' }}>☪️</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#e8c96a', fontSize: '0.78rem', letterSpacing: '1.8px', textTransform: 'uppercase' }}>
              Halal Rizq Nigeria
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
            fontWeight: 700, color: '#ffffff',
            lineHeight: 1.18, marginBottom: 20,
            animation: 'fadeUp 0.7s 0.1s ease both',
          }}>
            Shop Quality{' '}
            <span style={{
              background: 'linear-gradient(90deg, #c9a84c, #f0d878, #c9a84c)',
              backgroundSize: '200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3.5s linear infinite',
            }}>
              Wireless Earbuds & Power Banks
            </span>
            {' '}on Jumia
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.78, maxWidth: 600,
            margin: '0 auto 36px',
            animation: 'fadeUp 0.7s 0.2s ease both',
          }}>
            Reliable mobile accessories that solve real daily needs in Lagos.
            Shop through our affiliate links —{' '}
            <strong style={{ color: '#e8c96a' }}>100% transparent</strong>.
            No extra cost to you.
          </p>

          {/* CTA */}
          <div style={{ animation: 'fadeUp 0.7s 0.3s ease both', display: 'flex', justifyContent: 'center' }}>
            <a
              href="#products"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg,#c9a84c,#e8c96a)',
                color: '#0b3d20',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700, fontSize: '1.05rem',
                padding: '17px 40px', borderRadius: 50,
                textDecoration: 'none',
                boxShadow: '0 6px 26px rgba(201,168,76,0.4)',
                letterSpacing: '0.01em',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(201,168,76,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 26px rgba(201,168,76,0.4)'; }}
            >
              Browse Deals Now <span style={{ fontSize: '1.15rem' }}>→</span>
            </a>
          </div>

          {/* Trust pills */}
          <div style={{
            marginTop: 44,
            display: 'flex', justifyContent: 'center',
            flexWrap: 'wrap', gap: 10,
            animation: 'fadeUp 0.7s 0.4s ease both',
          }}>
            <Pill icon="🔗" label="JForce Affiliate Links" />
            <Pill icon="🛒" label="Sold on Jumia.com.ng" />
            <Pill icon="💳" label="No Extra Cost to You" />
            <Pill icon="☪️" label="Halal Commerce" />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" style={{
        background: '#f4fbf6',
        padding: 'clamp(56px,8vw,88px) 24px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
          <GeomPattern id="prod-gp" stroke="#0b3d20" opacity={0.5} />
        </div>

        <Reveal style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg,#0b3d20,#1e8449)',
              color: '#fff', borderRadius: 40,
              padding: '6px 20px', fontSize: '0.76rem',
              fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '1.8px', marginBottom: 16,
            }}>
              Our Recommended Products
            </span>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700, color: '#0b3d20',
              lineHeight: 1.2, marginBottom: 12,
            }}>
              Handpicked for Daily Life in Lagos
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.95rem', color: '#4a6352',
              maxWidth: 520, margin: '0 auto', lineHeight: 1.7,
            }}>
              Each product below links directly to Jumia via our JForce affiliate link.
              You pay the same Jumia price — nothing extra.
            </p>
          </div>

          {/* Product grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 28,
          }}>
            <Reveal delay={0.05}>
              <ProductCard
                title="Bolizma Wireless Earbuds (Bluetooth 5.4)"
                description="Open-ear design with ENC noise-cancelling microphone — ideal for sports, the gym, driving, and daily use. Hook-style fit stays comfortable for hours. Long battery life so you're never caught short."
                images={[
                  { src: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=85', alt: 'Wireless TWS earbuds close-up' },
                  { src: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=85', alt: 'Wireless earbuds product shot' },
                ]}
                jumiaHref={LINKS.earbuds}
                badge="Bluetooth 5.4"
                features={['Open-ear design', 'ENC mic', 'Sports-ready', 'Long battery']}
              />
            </Reveal>
            <Reveal delay={0.12}>
              <ProductCard
                title="Foomee AB35 30000mAh Power Bank"
                description="High-capacity 30000mAh power bank with a built-in 4-in-1 cable (Type-C, Micro-USB, Lightning & more), 4 output ports, dual LED torch, and fast charging. A must-have for power outages in Lagos."
                images={[
                  { src: 'https://images.unsplash.com/photo-1525858907241-d230b66fb9fa?w=800&q=85', alt: 'Power bank with LED display' },
                  { src: 'https://images.unsplash.com/photo-1618478594486-c65b899c4936?w=800&q=85', alt: 'Power bank with phone tech shot' },
                ]}
                jumiaHref={LINKS.powerbank}
                badge="30000mAh"
                features={['Built-in 4-in-1 cable', 'Fast charging', 'Dual LED torch', '4 output ports']}
              />
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* ── TRANSPARENCY NOTE ── */}
      <Reveal>
        <section style={{
          background: '#fff',
          padding: 'clamp(48px,6vw,72px) 24px',
        }}>
          <div style={{
            maxWidth: 700, margin: '0 auto',
            background: 'linear-gradient(135deg,#fffbf0,#fff9e6)',
            border: '1.5px solid #f0d98a',
            borderRadius: 22,
            padding: 'clamp(28px,4vw,44px)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* top accent bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 4,
              background: 'linear-gradient(90deg,#c9a84c,#e8c96a,#c9a84c)',
            }} />

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{
                fontSize: '2rem', flexShrink: 0,
                background: 'linear-gradient(135deg,#f5e6b8,#e8c96a)',
                borderRadius: '50%', width: 52, height: 52,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>ℹ️</span>

              <div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem', fontWeight: 700,
                  color: '#5a3e00', marginBottom: 12,
                }}>
                  Important Information
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.93rem', color: '#6b4d00',
                  lineHeight: 1.78,
                }}>
                  All links on this page are my{' '}
                  <strong>Jumia JForce affiliate links</strong>.
                  When you make a purchase through them, I earn a small commission
                  at no extra cost to you. This helps support Halal Rizq Nigeria.
                </p>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.93rem', color: '#6b4d00',
                  lineHeight: 1.78, marginTop: 12,
                }}>
                  Please buy directly and{' '}
                  <strong>avoid using random third-party coupon codes</strong>
                  {' '}at checkout so the tracking works properly.
                </p>
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.05rem', fontStyle: 'italic',
                  color: '#8a6200', marginTop: 14,
                }}>
                  Jazakallahu khairan. 🤲
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── BONUS GUIDE (secondary) ── */}
      <Reveal>
        <section style={{
          background: 'linear-gradient(160deg,#072214,#0b3d20)',
          padding: 'clamp(56px,8vw,84px) 24px',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <GeomPattern id="guide-gp" stroke="#c9a84c" opacity={0.065} />
          </div>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
            <div style={{ fontSize: '2.8rem', marginBottom: 16 }}>📖</div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem,4vw,2.6rem)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.22, marginBottom: 16,
            }}>
              Want to Earn Halal Income Online?
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1rem', color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75, marginBottom: 32,
            }}>
              Get our free guide: <em style={{ color: '#e8c96a' }}>Simple halal ways to earn extra money using platforms like Jumia.</em>
              {' '}Delivered instantly on WhatsApp.
            </p>
            <WABtn href={LINKS.whatsapp} large>
              Get Free Halal Rizq Guide on WhatsApp
            </WABtn>
            <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>
              Free · Sent via WhatsApp · No spam
            </p>
          </div>
        </section>
      </Reveal>

      {/* ── FOOTER ── */}
      <footer style={{
        background: '#030c05',
        padding: '36px 24px',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.38)',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.82rem',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.5rem', fontWeight: 700,
            color: '#c9a84c', marginBottom: 8,
          }}>
            ☪️ Halal Rizq Nigeria
          </div>
          <p style={{ marginBottom: 6, fontWeight: 500, color: 'rgba(255,255,255,0.52)' }}>
            Promoting Halal Commerce with Transparency and Barakah
          </p>
          <p style={{ marginBottom: 18, fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
            All purchases are made directly on{' '}
            <a href="https://www.jumia.com.ng" target="_blank" rel="noopener noreferrer"
              style={{ color: '#f5960f', textDecoration: 'none' }}>
              Jumia.com.ng
            </a>
          </p>
          <div style={{
            paddingTop: 16,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            fontSize: '0.74rem', color: 'rgba(255,255,255,0.22)',
          }}>
            © {year} Halal Rizq Nigeria · Affiliate links are disclosed as required.
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp bubble ── */}
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: 'fixed', bottom: 26, right: 26, zIndex: 999,
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg,#25d366,#128c7e)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', textDecoration: 'none',
          boxShadow: '0 4px 22px rgba(37,211,102,0.5)',
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        <WaIcon size={28} />
        <span style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.45)',
          animation: 'pulse-ring 1.9s ease-out infinite',
        }} />
      </a>

      {/* ── Global styles & keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'DM Sans', sans-serif;
          background: #f4fbf6;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f4fbf6; }
        ::-webkit-scrollbar-thumb { background: #1e8449; border-radius: 8px; }

        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-9px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.65; }
          100% { transform: scale(1.85); opacity: 0; }
        }

        /* Mobile tweaks */
        @media (max-width: 480px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </>
  );
}
