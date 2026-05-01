'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
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
          borderRadius: 10,
          padding: '10px 18px',
          minWidth: 68,
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#e8c96a',
            lineHeight: 1,
          }}>
            {pad(val)}
          </div>
          <div style={{
            fontSize: '0.62rem',
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginTop: 4,
          }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
