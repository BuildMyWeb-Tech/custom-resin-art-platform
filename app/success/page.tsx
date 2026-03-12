'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useOrder } from '@/lib/OrderContext';

export default function SuccessPage() {
  const router = useRouter();
  const { order, resetOrder } = useOrder();
  const [isAnimated, setIsAnimated] = useState(false);
  const [orderNumber] = useState(() => `RA-${Date.now().toString().slice(-6)}`);

  useEffect(() => {
    const t = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleCreateAnother = () => {
    resetOrder();
    router.push('/');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      <Navbar step={4} />

      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '4rem 1.5rem 5rem',
          textAlign: 'center',
        }}
      >
        {/* Success icon */}
        <div
          style={{
            opacity: isAnimated ? 1 : 0,
            transform: isAnimated ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              fontSize: '2.8rem',
              boxShadow: '0 16px 48px rgba(201, 168, 76, 0.3)',
            }}
          >
            ✓
          </div>
        </div>

        {/* Heading */}
        <div
          style={{
            opacity: isAnimated ? 1 : 0,
            transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.2s',
          }}
        >
          {/* Order number */}
          <div
            className="badge"
            style={{
              background: 'rgba(201, 168, 76, 0.12)',
              color: '#9A7209',
              border: '1px solid rgba(201, 168, 76, 0.3)',
              margin: '0 auto 1.5rem',
              display: 'inline-flex',
            }}
          >
            Order #{orderNumber}
          </div>

          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              fontWeight: '700',
              color: '#2C2420',
              lineHeight: '1.2',
              marginBottom: '1rem',
            }}
          >
            Your Custom Resin Order Request Has Been Submitted
          </h1>

          <div className="gold-divider" style={{ maxWidth: '160px', margin: '1.5rem auto' }} />

          <p
            style={{
              fontSize: '1rem',
              color: '#7A6A62',
              lineHeight: '1.7',
              fontFamily: '"DM Sans", sans-serif',
              marginBottom: '2rem',
            }}
          >
            Thank you for your order request. Our team will review your customization details and contact you on{' '}
            <strong style={{ color: '#2C2420' }}>WhatsApp</strong>{' '}
            for confirmation, design approval, and payment details.
          </p>
        </div>

        {/* Order snapshot */}
        <div
          style={{
            opacity: isAnimated ? 1 : 0,
            transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.35s',
            background: '#2C2420',
            borderRadius: '20px',
            padding: '1.75rem',
            marginBottom: '2rem',
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'rgba(201, 168, 76, 0.07)',
            }}
          />

          <p className="section-label" style={{ color: '#E8C97A', marginBottom: '1.25rem' }}>✦ Order at a Glance</p>

          {[
            { label: 'Product', value: order.productName || 'Custom Resin Art' },
            { label: 'Size', value: order.size },
            { label: 'Color Theme', value: order.colorTheme },
            { label: 'Name', value: order.nameToAdd || 'None' },
            { label: 'Delivery Date', value: order.deliveryDate || 'To be confirmed' },
            { label: 'Estimated Total', value: `₹${order.totalPrice.toLocaleString()}` },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(237, 224, 200, 0.1)',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>{label}</span>
              <span style={{ fontSize: '0.875rem', color: '#FEFCF8', fontFamily: '"DM Sans", sans-serif', fontWeight: '500' }}>{value}</span>
            </div>
          ))}
        </div>

        {/* What's next */}
        <div
          style={{
            opacity: isAnimated ? 1 : 0,
            transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.45s',
            background: '#FEFCF8',
            border: '1px solid #EDE0C8',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '2rem',
            textAlign: 'left',
          }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>What happens next?</p>

          {[
            { step: '1', icon: '📲', text: 'We\'ll message you on WhatsApp within 24 hours' },
            { step: '2', icon: '🎨', text: 'Our artisan reviews your design and shares a mockup' },
            { step: '3', icon: '✓', text: 'You approve the design and confirm payment' },
            { step: '4', icon: '🚚', text: 'Your artwork is crafted and delivered to you' },
          ].map(({ step, icon, text }) => (
            <div
              key={step}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '0.5rem 0',
              }}
            >
              <span style={{ fontSize: '1.1rem', marginTop: '0.1rem' }}>{icon}</span>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#5C4F48', fontFamily: '"DM Sans", sans-serif', lineHeight: '1.5' }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          style={{
            opacity: isAnimated ? 1 : 0,
            transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.55s',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <button
            onClick={handleCreateAnother}
            className="btn-gold"
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '14px',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            Create Another Order
            <span>✦</span>
          </button>

          <button
            className="btn-outline"
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '14px',
              fontSize: '0.9rem',
            }}
          >
            💬 Contact Us on WhatsApp
          </button>
        </div>

        {/* Thank you note */}
        <p
          style={{
            marginTop: '2.5rem',
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '1rem',
            color: '#C9A84C',
            fontStyle: 'italic',
            opacity: isAnimated ? 1 : 0,
            transition: 'opacity 0.6s ease 0.7s',
          }}
        >
          "Every memory deserves to be preserved beautifully."
        </p>
      </div>
    </div>
  );
}
