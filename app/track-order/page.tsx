'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import TimelineTracker from '@/components/TimelineTracker';
import { MOCK_ORDERS } from '@/lib/mockData';

export default function TrackOrderPage() {
  const [inputId, setInputId] = useState('');
  const [searched, setSearched] = useState('');
  const [error, setError] = useState('');

  const foundOrder = MOCK_ORDERS.find(o => o.id.toUpperCase() === searched.toUpperCase().trim());

  const handleSearch = () => {
    const val = inputId.trim().toUpperCase();
    if (!val) {
      setError('Please enter an order ID');
      return;
    }
    setError('');
    setSearched(val);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      <Navbar step={1} />

      {/* Hero */}
      <section style={{ padding: '4.5rem 1.5rem 2rem', textAlign: 'center' }}>
        <div className="animate-fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#C9A84C', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', fontWeight: '600' }}>
            Live Tracking
          </span>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
        </div>

        <h1
          className="animate-fade-up animate-fade-up-delay-1"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            color: '#2C2420',
            lineHeight: '1.2',
            marginBottom: '1rem',
          }}
        >
          Track Your{' '}
          <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Order</span>
        </h1>
        <p
          className="animate-fade-up animate-fade-up-delay-2"
          style={{
            fontSize: '1rem',
            color: '#7A6A62',
            maxWidth: '420px',
            margin: '0 auto',
            fontFamily: '"DM Sans", sans-serif',
            lineHeight: '1.6',
          }}
        >
          Enter your order ID to see the current status of your resin artwork.
        </p>
      </section>

      {/* Search */}
      <section style={{ maxWidth: '520px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <div
          className="animate-fade-up animate-fade-up-delay-3"
          style={{
            background: '#FEFCF8',
            border: '1px solid #EDE0C8',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(44, 36, 32, 0.07)',
          }}
        >
          <label
            style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#5C4F48',
              marginBottom: '0.5rem',
              fontFamily: '"DM Sans", sans-serif',
              letterSpacing: '0.03em',
            }}
          >
            Order ID
          </label>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input
              type="text"
              className="form-field"
              placeholder="e.g. RESIN-1001"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              style={{
                flex: 1,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: '600',
              }}
            />
            <button
              onClick={handleSearch}
              className="btn-gold"
              style={{
                padding: '0 1.5rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
              }}
            >
              Track →
            </button>
          </div>

          {error && (
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem', color: '#B85C3A', fontFamily: '"DM Sans", sans-serif' }}>
              {error}
            </p>
          )}

          {/* Sample IDs */}
          <div style={{ marginTop: '1rem' }}>
            <p style={{ margin: '0 0 0.4rem', fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Try a sample order:
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {MOCK_ORDERS.map(o => (
                <button
                  key={o.id}
                  onClick={() => { setInputId(o.id); setSearched(o.id); setError(''); }}
                  style={{
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(201, 168, 76, 0.1)',
                    border: '1px solid rgba(201, 168, 76, 0.25)',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    color: '#9A7209',
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: '600',
                    cursor: 'pointer',
                    letterSpacing: '0.04em',
                  }}
                >
                  {o.id}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result */}
        {searched && (
          <div style={{ marginTop: '2rem' }}>
            {foundOrder ? (
              <TimelineTracker
                currentStatus={foundOrder.status}
                orderId={foundOrder.id}
                customerName={foundOrder.customerName}
                product={foundOrder.product}
                deliveryDate={
                  foundOrder.deliveryDate
                    ? new Date(foundOrder.deliveryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
                    : 'To be confirmed'
                }
              />
            ) : (
              <div
                style={{
                  background: '#FEFCF8',
                  border: '1px solid #EDE0C8',
                  borderRadius: '16px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.75rem' }}>🔍</span>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.1rem', color: '#2C2420', marginBottom: '0.5rem' }}>
                  Order Not Found
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
                  No order found for <strong style={{ color: '#C9A84C' }}>{searched}</strong>. Please check the ID and try again, or contact us on WhatsApp.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
