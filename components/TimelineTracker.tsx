'use client';

import { OrderStatus, STATUS_STEPS } from '@/lib/mockData';

interface TimelineTrackerProps {
  currentStatus: OrderStatus;
  orderId: string;
  customerName: string;
  product: string;
  deliveryDate: string;
}

const STEP_ICONS = ['📬', '📦', '🎨', '✅', '🚚'];
const STEP_DESCRIPTIONS = [
  'We have received your order request and will contact you shortly on WhatsApp.',
  'Your memory items have arrived at our studio safely.',
  'Our artisan is crafting your personalized resin artwork with care.',
  'Your beautiful artwork is complete and ready for dispatch.',
  'Your package is on its way! Expected within 3–5 business days.',
];

export default function TimelineTracker({
  currentStatus,
  orderId,
  customerName,
  product,
  deliveryDate,
}: TimelineTrackerProps) {
  const currentIdx = STATUS_STEPS.indexOf(currentStatus);

  return (
    <div>
      {/* Order header */}
      <div
        style={{
          background: '#2C2420',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(201, 168, 76, 0.07)',
          }}
        />
        <p className="section-label" style={{ color: '#E8C97A', marginBottom: '0.75rem' }}>
          ✦ Order Tracking
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {[
            { label: 'Order ID', value: orderId },
            { label: 'Customer', value: customerName },
            { label: 'Product', value: product },
            { label: 'Est. Delivery', value: deliveryDate },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ margin: 0, fontSize: '0.68rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{label}</p>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', color: '#FEFCF8', fontFamily: '"DM Sans", sans-serif', fontWeight: '500' }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {STATUS_STEPS.map((step, idx) => {
          const isDone = idx < currentIdx;
          const isActive = idx === currentIdx;
          const isPending = idx > currentIdx;

          return (
            <div
              key={step}
              style={{
                display: 'flex',
                gap: '1.25rem',
                position: 'relative',
              }}
            >
              {/* Left column: dot + line */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '44px',
                  flexShrink: 0,
                }}
              >
                {/* Circle */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: isDone
                      ? 'linear-gradient(135deg, #C9A84C, #E8C97A)'
                      : isActive
                      ? '#2C2420'
                      : '#EDE0C8',
                    border: isActive ? '2.5px solid #C9A84C' : isDone ? 'none' : '2px solid #EDE0C8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isDone ? '✓' : <span style={{ opacity: isPending ? 0.4 : 1 }}>{STEP_ICONS[idx]}</span>}

                  {/* Active pulse ring */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-6px',
                        borderRadius: '50%',
                        border: '2px solid rgba(201, 168, 76, 0.3)',
                        animation: 'ping 1.5s ease-in-out infinite',
                      }}
                    />
                  )}
                </div>

                {/* Connector line */}
                {idx < STATUS_STEPS.length - 1 && (
                  <div
                    style={{
                      width: '2px',
                      flex: 1,
                      minHeight: '40px',
                      background: isDone
                        ? 'linear-gradient(180deg, #C9A84C, #C9A84C)'
                        : 'linear-gradient(180deg, #EDE0C8, #EDE0C8)',
                      transition: 'background 0.4s ease',
                    }}
                  />
                )}
              </div>

              {/* Right column: content */}
              <div
                style={{
                  flex: 1,
                  paddingBottom: idx < STATUS_STEPS.length - 1 ? '2rem' : '0',
                  paddingTop: '0.5rem',
                }}
              >
                <div
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(201, 168, 76, 0.08), rgba(184, 112, 74, 0.05))'
                      : isDone
                      ? 'rgba(201, 168, 76, 0.04)'
                      : 'transparent',
                    border: isActive
                      ? '1.5px solid rgba(201, 168, 76, 0.3)'
                      : isDone
                      ? '1px solid rgba(201, 168, 76, 0.15)'
                      : '1px solid transparent',
                    borderRadius: '12px',
                    padding: isActive || isDone ? '1rem 1.25rem' : '0.5rem 0',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: isActive ? '0.5rem' : '0.2rem' }}>
                    <h4
                      style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: '1rem',
                        fontWeight: isActive ? '700' : '600',
                        color: isActive ? '#2C2420' : isDone ? '#5C4F48' : '#B0A090',
                        margin: 0,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {step}
                    </h4>
                    {isActive && (
                      <span
                        className="badge"
                        style={{
                          background: 'rgba(201, 168, 76, 0.15)',
                          color: '#9A7209',
                          border: '1px solid rgba(201, 168, 76, 0.3)',
                          fontSize: '0.65rem',
                        }}
                      >
                        Current
                      </span>
                    )}
                    {isDone && (
                      <span
                        className="badge"
                        style={{
                          background: 'rgba(5, 150, 105, 0.1)',
                          color: '#059669',
                          fontSize: '0.65rem',
                        }}
                      >
                        Done
                      </span>
                    )}
                  </div>

                  {(isActive || isDone) && (
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.82rem',
                        color: isActive ? '#5C4F48' : '#9A8878',
                        fontFamily: '"DM Sans", sans-serif',
                        lineHeight: '1.5',
                      }}
                    >
                      {STEP_DESCRIPTIONS[idx]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
