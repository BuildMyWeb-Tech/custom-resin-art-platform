'use client';

interface PriceCalculatorProps {
  size: string;
  nameToAdd: string;
  totalPrice: number;
}

export default function PriceCalculator({ size, nameToAdd, totalPrice }: PriceCalculatorProps) {
  const sizeUpgrade = size === 'Medium' ? 1000 : size === 'Large' ? 2000 : 0;
  const nameUpgrade = nameToAdd.trim() ? 300 : 0;

  return (
    <div
      style={{
        background: '#2C2420',
        borderRadius: '16px',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(201, 168, 76, 0.08)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
        }}
      >
        <span style={{ fontSize: '1rem' }}>✦</span>
        <p
          className="section-label"
          style={{ color: '#E8C97A', margin: 0 }}
        >
          Price Breakdown
        </p>
      </div>

      {/* Price rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.6rem 0',
            borderBottom: '1px solid rgba(237, 224, 200, 0.15)',
          }}
        >
          <span style={{ fontSize: '0.875rem', color: '#C4B5A8', fontFamily: '"DM Sans", sans-serif' }}>Base Price</span>
          <span style={{ fontSize: '0.875rem', color: '#FEFCF8', fontFamily: '"DM Sans", sans-serif', fontWeight: '500' }}>₹3,000</span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.6rem 0',
            borderBottom: '1px solid rgba(237, 224, 200, 0.15)',
            opacity: sizeUpgrade > 0 ? 1 : 0.4,
          }}
        >
          <span style={{ fontSize: '0.875rem', color: '#C4B5A8', fontFamily: '"DM Sans", sans-serif' }}>
            Size Upgrade ({size})
          </span>
          <span
            style={{
              fontSize: '0.875rem',
              color: sizeUpgrade > 0 ? '#E8C97A' : '#C4B5A8',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: '500',
            }}
          >
            {sizeUpgrade > 0 ? `+₹${sizeUpgrade.toLocaleString()}` : '—'}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.6rem 0',
            borderBottom: '1px solid rgba(237, 224, 200, 0.15)',
            opacity: nameUpgrade > 0 ? 1 : 0.4,
          }}
        >
          <span style={{ fontSize: '0.875rem', color: '#C4B5A8', fontFamily: '"DM Sans", sans-serif' }}>Name Engraving</span>
          <span
            style={{
              fontSize: '0.875rem',
              color: nameUpgrade > 0 ? '#E8C97A' : '#C4B5A8',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: '500',
            }}
          >
            {nameUpgrade > 0 ? `+₹300` : '—'}
          </span>
        </div>
      </div>

      {/* Total */}
      <div
        style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(201, 168, 76, 0.4)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '1rem',
            color: '#FEFCF8',
            fontStyle: 'italic',
          }}
        >
          Total Estimate
        </span>
        <span
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '1.6rem',
            fontWeight: '700',
            color: '#E8C97A',
          }}
        >
          ₹{totalPrice.toLocaleString()}
        </span>
      </div>

      <p
        style={{
          fontSize: '0.72rem',
          color: '#9A8878',
          marginTop: '0.75rem',
          fontFamily: '"DM Sans", sans-serif',
          lineHeight: '1.5',
        }}
      >
        * Final price confirmed after WhatsApp consultation with our artisan.
      </p>
    </div>
  );
}
