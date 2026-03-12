'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

const STEPS = [
  {
    number: '01',
    icon: '✦',
    title: 'Place Your Custom Order',
    description: 'Browse our collection of resin artwork types — wedding flower preservation, baby memory frames, or custom name boards. Select your preferences, customize the size, color theme, name engraving, and any personal message.',
    sub: 'Estimated time: 5 minutes',
    gradient: 'linear-gradient(135deg, #F5EFE0, #E8D5B0)',
    accent: '#C9A84C',
  },
  {
    number: '02',
    icon: '📦',
    title: 'Send Your Memory Items',
    description: 'After confirmation, carefully pack and ship your flowers, jewelry, hospital bands, or other memory items to our studio address. We\'ll send you detailed packing instructions on WhatsApp to ensure they arrive safely.',
    sub: 'We handle with utmost care',
    gradient: 'linear-gradient(135deg, #F0EDF8, #DDD4F0)',
    accent: '#9B7ED4',
  },
  {
    number: '03',
    icon: '🎨',
    title: 'Artwork Creation',
    description: 'Our skilled resin artisan carefully arranges and preserves your items in premium resin. Each piece is handcrafted with attention to every detail — from the color mixing to the final polish and finishing.',
    sub: 'Crafted by hand, with love',
    gradient: 'linear-gradient(135deg, #EDF5F0, #C0D8C4)',
    accent: '#5BA88A',
  },
  {
    number: '04',
    icon: '🚚',
    title: 'Delivery to Your Doorstep',
    description: 'Your finished masterpiece is wrapped with premium packaging and shipped with tracking to your address across India. We share the tracking details on WhatsApp so you can follow every step of its journey.',
    sub: 'Pan-India delivery available',
    gradient: 'linear-gradient(135deg, #FFF0F0, #FFD8D0)',
    accent: '#D45A5A',
  },
];

export default function HowItWorksPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      <Navbar step={1} />

      {/* Hero */}
      <section style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', top: '10%', left: '5%',
            width: '280px', height: '280px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201, 168, 76, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: '5%', right: '5%',
            width: '220px', height: '220px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(155, 126, 212, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="animate-fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#C9A84C', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', fontWeight: '600' }}>
            Simple Process
          </span>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
        </div>

        <h1
          className="animate-fade-up animate-fade-up-delay-1"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: '700',
            color: '#2C2420',
            lineHeight: '1.2',
            marginBottom: '1.25rem',
          }}
        >
          How It <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Works</span>
        </h1>

        <p
          className="animate-fade-up animate-fade-up-delay-2"
          style={{
            fontSize: '1.05rem',
            color: '#7A6A62',
            lineHeight: '1.7',
            maxWidth: '520px',
            margin: '0 auto 0',
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          From your precious memories to a stunning resin artwork — our simple 4-step process makes it effortless.
        </p>
      </section>

      {/* Steps */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="animate-fade-up"
              style={{
                animationDelay: `${0.1 * i}s`,
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 320px' : '320px 1fr',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              {/* Image side — flip order on odd */}
              {i % 2 !== 0 && (
                <div
                  style={{
                    height: '240px',
                    borderRadius: '20px',
                    background: step.gradient,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    border: '1px solid rgba(237, 224, 200, 0.5)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      width: '160px', height: '160px', borderRadius: '50%',
                      border: `1px solid rgba(255,255,255,0.4)`,
                    }}
                  />
                  <span style={{ fontSize: '4.5rem', position: 'relative', zIndex: 1 }}>{step.icon}</span>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '4rem',
                      fontWeight: '900',
                      color: 'rgba(44, 36, 32, 0.06)',
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>
                </div>
              )}

              {/* Text side */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: `${step.accent}18`,
                      border: `1.5px solid ${step.accent}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      color: step.accent,
                      fontFamily: '"DM Sans", sans-serif',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {step.number}
                  </div>
                  <p className="section-label" style={{ color: step.accent }}>Step {step.number}</p>
                </div>

                <h2
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.7rem',
                    fontWeight: '700',
                    color: '#2C2420',
                    marginBottom: '0.75rem',
                    lineHeight: '1.25',
                  }}
                >
                  {step.title}
                </h2>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#7A6A62',
                    lineHeight: '1.7',
                    fontFamily: '"DM Sans", sans-serif',
                    marginBottom: '1rem',
                  }}
                >
                  {step.description}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.9rem',
                    background: `${step.accent}12`,
                    border: `1px solid ${step.accent}30`,
                    borderRadius: '999px',
                    fontSize: '0.78rem',
                    color: step.accent,
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: '600',
                  }}
                >
                  ✦ {step.sub}
                </div>
              </div>

              {/* Image side — even */}
              {i % 2 === 0 && (
                <div
                  style={{
                    height: '240px',
                    borderRadius: '20px',
                    background: step.gradient,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    border: '1px solid rgba(237, 224, 200, 0.5)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      width: '160px', height: '160px', borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.4)',
                    }}
                  />
                  <span style={{ fontSize: '4.5rem', position: 'relative', zIndex: 1 }}>{step.icon}</span>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '4rem',
                      fontWeight: '900',
                      color: 'rgba(44, 36, 32, 0.06)',
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>
                </div>
              )}

              <style>{`@media(max-width:640px){.steps-grid{grid-template-columns:1fr!important}}`}</style>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: '4rem',
            background: '#2C2420',
            borderRadius: '24px',
            padding: '3rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute', top: '-40px', left: '-40px',
              width: '180px', height: '180px', borderRadius: '50%',
              background: 'rgba(201, 168, 76, 0.06)',
            }}
          />
          <div
            style={{
              position: 'absolute', bottom: '-40px', right: '-40px',
              width: '180px', height: '180px', borderRadius: '50%',
              background: 'rgba(201, 168, 76, 0.05)',
            }}
          />

          <p className="section-label" style={{ color: '#E8C97A', marginBottom: '0.75rem' }}>Ready to begin?</p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
              fontWeight: '700',
              color: '#FEFCF8',
              marginBottom: '1rem',
              lineHeight: '1.25',
            }}
          >
            Start Creating Your{' '}
            <span style={{ fontStyle: 'italic', color: '#E8C97A' }}>Masterpiece</span>
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#9A8878',
              maxWidth: '400px',
              margin: '0 auto 2rem',
              fontFamily: '"DM Sans", sans-serif',
              lineHeight: '1.6',
            }}
          >
            Every precious memory deserves to be preserved beautifully. Place your order in minutes.
          </p>
          <Link
            href="/"
            className="btn-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2.5rem',
              borderRadius: '14px',
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            Start Custom Order
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 640px) {
          section > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
