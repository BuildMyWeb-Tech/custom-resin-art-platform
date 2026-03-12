'use client';

import { useState } from 'react';

interface GalleryCardProps {
  item: {
    id: number;
    title: string;
    category: string;
    beforeEmoji: string;
    afterEmoji: string;
    beforeLabel: string;
    afterLabel: string;
    colorAccent: string;
    gradientBefore: string;
    gradientAfter: string;
    description: string;
    turnaround: string;
    price: string;
  };
  delay?: number;
}

export default function GalleryCard({ item, delay = 0 }: GalleryCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className="gallery-card animate-fade-up"
        style={{
          animationDelay: `${delay}s`,
          background: '#FEFCF8',
          borderRadius: '20px',
          border: '1px solid #EDE0C8',
          overflow: 'hidden',
          cursor: 'pointer',
          position: 'relative',
        }}
        onClick={() => setExpanded(true)}
      >
        {/* Before / After Images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '200px' }}>
          {/* Before */}
          <div
            style={{
              background: item.gradientBefore,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              borderRight: '1px solid rgba(237, 224, 200, 0.5)',
              position: 'relative',
            }}
          >
            <span style={{ fontSize: '3rem' }}>{item.beforeEmoji}</span>
            <span
              style={{
                fontSize: '0.65rem',
                color: '#9A8878',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Before
            </span>
            <div
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(4px)',
                padding: '0.2rem 0.5rem',
                borderRadius: '999px',
                fontSize: '0.65rem',
                color: '#5C4F48',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: '600',
              }}
            >
              {item.beforeLabel}
            </div>
          </div>

          {/* After */}
          <div
            style={{
              background: item.gradientAfter,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              position: 'relative',
            }}
          >
            <span style={{ fontSize: '3rem' }}>{item.afterEmoji}</span>
            <span
              style={{
                fontSize: '0.65rem',
                color: '#9A8878',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              After
            </span>
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: `rgba(${hexToRgb(item.colorAccent)}, 0.15)`,
                padding: '0.2rem 0.5rem',
                borderRadius: '999px',
                fontSize: '0.65rem',
                color: item.colorAccent,
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: '700',
              }}
            >
              {item.afterLabel}
            </div>
          </div>

          {/* Arrow divider */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '30px',
              height: '30px',
              background: '#FEFCF8',
              borderRadius: '50%',
              border: `2px solid ${item.colorAccent}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              zIndex: 2,
              color: item.colorAccent,
              fontWeight: '700',
            }}
          >
            →
          </div>
        </div>

        {/* Overlay on hover */}
        <div
          className="gallery-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(44, 36, 32, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: 'rgba(201, 168, 76, 0.9)',
              color: '#2C2420',
              padding: '0.5rem 1.25rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: '700',
              fontFamily: '"DM Sans", sans-serif',
              letterSpacing: '0.04em',
            }}
          >
            View Details →
          </div>
        </div>

        {/* Card footer */}
        <div style={{ padding: '1.1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
            <div>
              <span
                className="badge"
                style={{
                  background: `rgba(${hexToRgb(item.colorAccent)}, 0.1)`,
                  color: item.colorAccent,
                  border: `1px solid rgba(${hexToRgb(item.colorAccent)}, 0.2)`,
                  marginBottom: '0.4rem',
                }}
              >
                {item.category}
              </span>
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#2C2420',
                  margin: 0,
                  lineHeight: '1.3',
                }}
              >
                {item.title}
              </h3>
            </div>
            <span
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1rem',
                fontWeight: '700',
                color: '#C9A84C',
                flexShrink: 0,
              }}
            >
              {item.price}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '0.6rem',
            }}
          >
            <span style={{ fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
              ⏱ {item.turnaround}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {expanded && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(26, 20, 16, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
          onClick={() => setExpanded(false)}
        >
          <div
            style={{
              background: '#FEFCF8',
              borderRadius: '20px',
              maxWidth: '540px',
              width: '100%',
              overflow: 'hidden',
              border: '1px solid #EDE0C8',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header images */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '200px' }}>
              <div
                style={{
                  background: item.gradientBefore,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '4rem' }}>{item.beforeEmoji}</span>
                <span style={{ fontSize: '0.75rem', color: '#7A6A62', fontFamily: '"DM Sans", sans-serif', fontWeight: '600' }}>BEFORE</span>
              </div>
              <div
                style={{
                  background: item.gradientAfter,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '4rem' }}>{item.afterEmoji}</span>
                <span style={{ fontSize: '0.75rem', color: '#7A6A62', fontFamily: '"DM Sans", sans-serif', fontWeight: '600' }}>AFTER</span>
              </div>
            </div>

            {/* Modal body */}
            <div style={{ padding: '1.5rem' }}>
              <span
                className="badge"
                style={{
                  background: `rgba(${hexToRgb(item.colorAccent)}, 0.1)`,
                  color: item.colorAccent,
                  marginBottom: '0.6rem',
                }}
              >
                {item.category}
              </span>
              <h2
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#2C2420',
                  margin: '0 0 0.75rem',
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#7A6A62',
                  lineHeight: '1.6',
                  fontFamily: '"DM Sans", sans-serif',
                  marginBottom: '1.25rem',
                }}
              >
                {item.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    background: 'rgba(201, 168, 76, 0.08)',
                    borderRadius: '10px',
                    padding: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '0.7rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Starting From</p>
                  <p style={{ margin: '0.25rem 0 0', fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.25rem', color: '#C9A84C', fontWeight: '700' }}>{item.price}</p>
                </div>
                <div
                  style={{
                    background: 'rgba(201, 168, 76, 0.08)',
                    borderRadius: '10px',
                    padding: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '0.7rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Turnaround</p>
                  <p style={{ margin: '0.25rem 0 0', fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1rem', color: '#2C2420', fontWeight: '600' }}>{item.turnaround}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href="/customize"
                  className="btn-gold"
                  style={{
                    flex: 1,
                    padding: '0.85rem',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Order This Style →
                </a>
                <button
                  onClick={() => setExpanded(false)}
                  className="btn-outline"
                  style={{ padding: '0.85rem 1rem', borderRadius: '12px', fontSize: '0.9rem' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '201, 168, 76';
}
