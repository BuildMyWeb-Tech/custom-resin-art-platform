'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CustomizationForm from '@/components/CustomizationForm';
import PriceCalculator from '@/components/PriceCalculator';
import { useOrder, OrderData } from '@/lib/OrderContext';
import { useState } from 'react';

export default function CustomizePage() {
  const router = useRouter();
  const { order, setOrder } = useOrder();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  // Calculate total price
  useEffect(() => {
    const base = 3000;
    const sizeUpgrade = order.size === 'Medium' ? 1000 : order.size === 'Large' ? 2000 : 0;
    const nameUpgrade = order.nameToAdd?.trim() ? 300 : 0;
    setOrder({ totalPrice: base + sizeUpgrade + nameUpgrade });
  }, [order.size, order.nameToAdd]);

  const handleChange = (field: keyof OrderData, value: string | null) => {
    setOrder({ [field]: value } as Partial<OrderData>);
    if (errors[field as string]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field as string];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!order.deliveryDate) newErrors.deliveryDate = 'Please select a delivery date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReviewOrder = () => {
    if (validate()) {
      router.push('/summary');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const productEmoji = order.product === 'wedding' ? '💍' : order.product === 'baby' ? '👶' : '🏡';

  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      <Navbar step={2} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
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
            ← Back to Products
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
              <p className="section-label" style={{ marginBottom: '0.3rem' }}>Step 2 of 4</p>
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
                Customize Your Order
              </h1>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.9rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
                Fill in the details to make your artwork truly unique
              </p>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 320px',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="customize-grid"
        >
          {/* Form Column */}
          <div
            style={{
              background: '#FEFCF8',
              borderRadius: '20px',
              border: '1px solid #EDE0C8',
              padding: '2rem',
              opacity: isAnimated ? 1 : 0,
              transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            <CustomizationForm
              order={order}
              onChange={handleChange}
              errors={errors}
            />
          </div>

          {/* Sidebar */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              opacity: isAnimated ? 1 : 0,
              transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s',
              position: 'sticky',
              top: '84px',
            }}
          >
            <PriceCalculator
              size={order.size}
              nameToAdd={order.nameToAdd}
              totalPrice={order.totalPrice}
            />

            {/* Info card */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(201, 168, 76, 0.08), rgba(184, 112, 74, 0.06))',
                border: '1px solid rgba(201, 168, 76, 0.25)',
                borderRadius: '14px',
                padding: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span>💬</span>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    color: '#2C2420',
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  WhatsApp Confirmation
                </p>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.78rem',
                  color: '#7A6A62',
                  lineHeight: '1.5',
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                After placing your order, our artisan will reach out to confirm all details and discuss design options personally.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={handleReviewOrder}
              className="btn-gold"
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: '14px',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              Review Order
              <span style={{ fontSize: '1.1rem' }}>→</span>
            </button>
          </div>
        </div>

        {/* Mobile CTA (visible on small screens) */}
        <div
          style={{
            marginTop: '2rem',
            display: 'none',
          }}
          className="mobile-cta"
        >
          <button
            onClick={handleReviewOrder}
            className="btn-gold"
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '14px',
              fontSize: '1rem',
            }}
          >
            Review Order →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .customize-grid {
            grid-template-columns: 1fr !important;
          }
          .mobile-cta {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
