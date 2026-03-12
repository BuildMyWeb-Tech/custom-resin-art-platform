'use client';

import { OrderData } from '@/lib/OrderContext';

interface Props {
  order: OrderData;
}

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '0.6rem 0',
      borderBottom: '1px dashed #EDE0C8',
      gap: '1rem',
    }}
  >
    <span
      style={{
        fontSize: '0.8rem',
        color: '#9A8878',
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        flexShrink: 0,
      }}
    >
      {label}
    </span>
    <span
      style={{
        fontSize: '0.9rem',
        color: '#2C2420',
        fontFamily: '"DM Sans", sans-serif',
        textAlign: 'right',
        fontWeight: '500',
      }}
    >
      {value || '—'}
    </span>
  </div>
);

export default function OrderSummary({ order }: Props) {
  const sizeUpgrade = order.size === 'Medium' ? 1000 : order.size === 'Large' ? 2000 : 0;
  const nameUpgrade = order.nameToAdd?.trim() ? 300 : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Product Section */}
      <div
        style={{
          background: '#FEFCF8',
          border: '1px solid #EDE0C8',
          borderRadius: '16px',
          padding: '1.5rem',
        }}
      >
        <p className="section-label" style={{ marginBottom: '1rem' }}>📦 Product Information</p>
        <SummaryRow label="Product" value={order.productName} />
        <SummaryRow label="Size" value={order.size} />
        <SummaryRow label="Color Theme" value={order.colorTheme} />
      </div>

      {/* Customization Section */}
      <div
        style={{
          background: '#FEFCF8',
          border: '1px solid #EDE0C8',
          borderRadius: '16px',
          padding: '1.5rem',
        }}
      >
        <p className="section-label" style={{ marginBottom: '1rem' }}>💎 Customization Details</p>
        <SummaryRow label="Name Engraved" value={order.nameToAdd || 'None'} />
        <SummaryRow label="Special Date" value={order.specialDate || 'Not specified'} />
        <SummaryRow label="Message / Quote" value={order.message || 'None'} />
        <SummaryRow label="Delivery Date" value={order.deliveryDate || 'Not specified'} />
        {order.specialInstructions && (
          <SummaryRow label="Special Notes" value={order.specialInstructions} />
        )}
      </div>

      {/* Images */}
      {(order.referenceImagePreview || order.memoryImagePreview) && (
        <div
          style={{
            background: '#FEFCF8',
            border: '1px solid #EDE0C8',
            borderRadius: '16px',
            padding: '1.5rem',
          }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>📸 Uploaded Images</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {order.referenceImagePreview && (
              <div style={{ textAlign: 'center' }}>
                <img
                  src={order.referenceImagePreview}
                  alt="Reference"
                  style={{
                    width: '120px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '2px solid #C9A84C',
                    display: 'block',
                  }}
                />
                <p
                  style={{
                    margin: '0.4rem 0 0',
                    fontSize: '0.72rem',
                    color: '#9A8878',
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  Reference Photo
                </p>
              </div>
            )}
            {order.memoryImagePreview && (
              <div style={{ textAlign: 'center' }}>
                <img
                  src={order.memoryImagePreview}
                  alt="Memory item"
                  style={{
                    width: '120px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '2px solid #C9A84C',
                    display: 'block',
                  }}
                />
                <p
                  style={{
                    margin: '0.4rem 0 0',
                    fontSize: '0.72rem',
                    color: '#9A8878',
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  Memory Item
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Price Summary */}
      <div
        style={{
          background: '#2C2420',
          borderRadius: '16px',
          padding: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(201, 168, 76, 0.06)',
          }}
        />

        <p className="section-label" style={{ color: '#E8C97A', marginBottom: '1rem' }}>✦ Price Summary</p>

        {[
          { label: 'Base Price', value: '₹3,000' },
          { label: `Size Upgrade (${order.size})`, value: sizeUpgrade > 0 ? `+₹${sizeUpgrade.toLocaleString()}` : '—', dim: sizeUpgrade === 0 },
          { label: 'Name Engraving', value: nameUpgrade > 0 ? '+₹300' : '—', dim: nameUpgrade === 0 },
        ].map(({ label, value, dim }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0',
              borderBottom: '1px solid rgba(237, 224, 200, 0.12)',
              opacity: dim ? 0.4 : 1,
            }}
          >
            <span style={{ fontSize: '0.85rem', color: '#C4B5A8', fontFamily: '"DM Sans", sans-serif' }}>{label}</span>
            <span style={{ fontSize: '0.85rem', color: '#E8C97A', fontFamily: '"DM Sans", sans-serif', fontWeight: '500' }}>{value}</span>
          </div>
        ))}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(201, 168, 76, 0.35)',
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
              fontSize: '2rem',
              fontWeight: '700',
              color: '#E8C97A',
            }}
          >
            ₹{order.totalPrice.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
