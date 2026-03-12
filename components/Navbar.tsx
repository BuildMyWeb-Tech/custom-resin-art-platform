'use client';

import Link from 'next/link';

interface NavProps {
  step?: number; // 1=home, 2=customize, 3=summary, 4=success
}

export default function Navbar({ step = 1 }: NavProps) {
  const steps = ['Browse', 'Customize', 'Review', 'Confirm'];

  return (
    <nav
      style={{
        background: 'rgba(254, 252, 248, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #EDE0C8',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.4rem' }}>✦</span>
            <span
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#2C2420',
                letterSpacing: '-0.01em',
              }}
            >
              Resin Artistry
            </span>
          </div>
        </Link>

        {/* Step Indicator */}
        {step > 1 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            className="hidden sm:flex"
          >
            {steps.map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    opacity: i + 1 <= step ? 1 : 0.4,
                  }}
                >
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: i + 1 < step ? '#C9A84C' : i + 1 === step ? '#2C2420' : '#EDE0C8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      fontWeight: '700',
                      color: i + 1 <= step ? '#FEFCF8' : '#999',
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {i + 1 < step ? '✓' : i + 1}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: i + 1 === step ? '#2C2420' : '#9A8878',
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: '28px',
                      height: '1px',
                      background: i + 1 < step ? '#C9A84C' : '#EDE0C8',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {[
            { href: '/how-it-works', label: 'How It Works' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/track-order', label: 'Track' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: '0.78rem',
                color: '#7A6A62',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: '500',
                textDecoration: 'none',
                padding: '0.35rem 0.65rem',
                borderRadius: '8px',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/admin"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.75rem',
              color: '#C9A84C',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: '600',
              textDecoration: 'none',
              padding: '0.35rem 0.7rem',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '8px',
            }}
          >
            ⚙️
          </Link>
        </div>
      </div>
    </nav>
  );
}
