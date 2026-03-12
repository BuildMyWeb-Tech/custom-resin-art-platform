'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import OrderSummary from '@/components/OrderSummary';
import { useOrder } from '@/lib/OrderContext';

export default function SummaryPage() {
  const router = useRouter();
  const { order } = useOrder();
  const [isAnimated, setIsAnimated] = useState(false);
  const [isPlacing, setIsPlacing] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handlePlaceOrder = async () => {
    setIsPlacing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    router.push('/success');
  };

  const productEmoji = order.product === 'wedding' ? '💍' : order.product === 'baby' ? '👶' : '🏡';

  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      <Navbar step={3} />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
        {/* Page header */}
        <div
          style={{
            marginBottom: '2.5rem',
            opacity: isAnimated ? 1 : 0,
            transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <button
            onClick={() => router.back()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              color: '#9A8878',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"DM Sans", sans-serif',
              padding: '0 0 1rem 0',
            }}
          >
            ← Edit Order
          </button>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                flexShrink: 0,
              }}
            >
              {productEmoji}
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: '0.3rem' }}>Step 3 of 4</p>
              <h1
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                  fontWeight: '700',
                  color: '#2C2420',
                  margin: 0,
                  lineHeight: '1.2',
                }}
              >
                Review Your Order
              </h1>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.9rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
                Please verify all details before submitting
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div
          style={{
            opacity: isAnimated ? 1 : 0,
            transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.1s',
          }}
        >
          <OrderSummary order={order} />
        </div>

        {/* Place Order Section */}
        <div
          style={{
            marginTop: '2rem',
            opacity: isAnimated ? 1 : 0,
            transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.25s',
          }}
        >
          {/* Assurance badges */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
              padding: '1.25rem',
              background: '#FEFCF8',
              borderRadius: '14px',
              border: '1px solid #EDE0C8',
            }}
          >
            {[
              { icon: '🔒', text: 'Secure Order' },
              { icon: '💬', text: 'WhatsApp Confirmation' },
              { icon: '✦', text: 'No Upfront Payment' },
              { icon: '🚚', text: 'Tracked Shipping' },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: '#7A6A62',
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={isPlacing}
            className="btn-gold"
            style={{
              width: '100%',
              padding: '1.1rem 2rem',
              borderRadius: '14px',
              fontSize: '1.05rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              opacity: isPlacing ? 0.8 : 1,
            }}
          >
            {isPlacing ? (
              <>
                <span
                  style={{
                    display: 'inline-block',
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(44, 36, 32, 0.3)',
                    borderTopColor: '#2C2420',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                  }}
                />
                Submitting Order...
              </>
            ) : (
              <>
                Place Order
                <span style={{ fontSize: '1.1rem' }}>✦</span>
              </>
            )}
          </button>

          <p
            style={{
              textAlign: 'center',
              fontSize: '0.78rem',
              color: '#9A8878',
              marginTop: '0.75rem',
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            By placing this order, you agree that our team will contact you via WhatsApp for confirmation and payment details.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
