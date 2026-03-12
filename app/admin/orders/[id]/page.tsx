'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';
import { MOCK_ORDERS, STATUS_COLORS, OrderStatus, STATUS_STEPS } from '@/lib/mockData';

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const mockOrder = MOCK_ORDERS.find(o => o.id === id);
  const [status, setStatus] = useState<OrderStatus>(mockOrder?.status || 'Order Received');
  const [saved, setSaved] = useState(false);

  if (!mockOrder) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', background: '#F4F1EC' }}>
        <AdminSidebar />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ fontSize: '3rem' }}>🔍</span>
          <p style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.3rem', color: '#2C2420' }}>Order not found</p>
          <Link href="/admin/orders" style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}>← Back to Orders</Link>
        </div>
      </div>
    );
  }

  const handleSaveStatus = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const colors = STATUS_COLORS[status];

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ background: '#FEFCF8', borderRadius: '16px', border: '1px solid #EDE0C8', padding: '1.5rem', marginBottom: '1.25rem' }}>
      <p className="section-label" style={{ marginBottom: '1rem' }}>{title}</p>
      {children}
    </div>
  );

  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.55rem 0', borderBottom: '1px dashed #EDE0C8', gap: '1rem' }}>
      <span style={{ fontSize: '0.78rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: '0.875rem', color: '#2C2420', fontFamily: '"DM Sans", sans-serif', fontWeight: '500', textAlign: 'right' }}>{value || '—'}</span>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F4F1EC' }}>
      <AdminSidebar />

      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Top bar */}
        <div
          style={{
            background: '#FEFCF8',
            borderBottom: '1px solid #EDE0C8',
            padding: '0 2rem',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => router.back()}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#9A8878',
                fontSize: '0.82rem',
                fontFamily: '"DM Sans", sans-serif',
                padding: '0.4rem 0.6rem',
                borderRadius: '8px',
                transition: 'background 0.2s',
              }}
            >
              ← Back
            </button>
            <div style={{ width: '1px', height: '24px', background: '#EDE0C8' }} />
            <div>
              <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.1rem', fontWeight: '600', color: '#2C2420', margin: 0 }}>
                Order {mockOrder.id}
              </h1>
              <p style={{ margin: 0, fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
                Placed on {new Date(mockOrder.placedOn).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>

          <span
            style={{
              background: colors.bg,
              color: colors.text,
              border: `1px solid ${colors.border}`,
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: '600',
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            {status}
          </span>
        </div>

        <div style={{ padding: '1.75rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.5rem', alignItems: 'start' }}>

            {/* Left column */}
            <div>
              {/* Customer Info */}
              <Section title="👤 Customer Information">
                <DetailRow label="Name" value={mockOrder.customerName} />
                <DetailRow label="WhatsApp" value={mockOrder.whatsapp} />
                <DetailRow label="Email" value={mockOrder.email} />
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={`https://wa.me/91${mockOrder.whatsapp}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 1.1rem',
                      background: '#25D366',
                      color: '#fff',
                      borderRadius: '10px',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      fontFamily: '"DM Sans", sans-serif',
                      textDecoration: 'none',
                    }}
                  >
                    📲 WhatsApp
                  </a>
                  <a
                    href={`mailto:${mockOrder.email}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 1.1rem',
                      background: '#FEFCF8',
                      color: '#2C2420',
                      border: '1px solid #EDE0C8',
                      borderRadius: '10px',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      fontFamily: '"DM Sans", sans-serif',
                      textDecoration: 'none',
                    }}
                  >
                    ✉️ Email
                  </a>
                </div>
              </Section>

              {/* Customization */}
              <Section title="🎨 Customization Details">
                <DetailRow label="Product Type" value={mockOrder.product} />
                <DetailRow label="Size" value={mockOrder.size} />
                <DetailRow label="Color Theme" value={mockOrder.colorTheme} />
                <DetailRow label="Name Engraving" value={mockOrder.nameEngraving} />
                <DetailRow label="Special Date" value={mockOrder.specialDate ? new Date(mockOrder.specialDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''} />
                <DetailRow label="Message / Quote" value={mockOrder.message} />
                <DetailRow label="Special Instructions" value={mockOrder.specialInstructions} />
              </Section>

              {/* Images */}
              <Section title="📸 Uploaded Images">
                {mockOrder.referenceImage || mockOrder.memoryImage ? (
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {mockOrder.referenceImage && (
                      <div>
                        <img src={mockOrder.referenceImage} style={{ width: '120px', height: '100px', objectFit: 'cover', borderRadius: '10px', border: '2px solid #C9A84C' }} alt="Reference" />
                        <p style={{ margin: '0.3rem 0 0', fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>Reference</p>
                      </div>
                    )}
                    {mockOrder.memoryImage && (
                      <div>
                        <img src={mockOrder.memoryImage} style={{ width: '120px', height: '100px', objectFit: 'cover', borderRadius: '10px', border: '2px solid #C9A84C' }} alt="Memory" />
                        <p style={{ margin: '0.3rem 0 0', fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>Memory Item</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    style={{
                      padding: '1.5rem',
                      textAlign: 'center',
                      background: '#F4F1EC',
                      borderRadius: '12px',
                      border: '1px dashed #EDE0C8',
                    }}
                  >
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
                      No images uploaded for this order
                    </p>
                  </div>
                )}
              </Section>

              {/* Delivery */}
              <Section title="🚚 Delivery Details">
                <DetailRow label="Preferred Delivery Date" value={mockOrder.deliveryDate ? new Date(mockOrder.deliveryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''} />
              </Section>
            </div>

            {/* Right sidebar */}
            <div style={{ position: 'sticky', top: '84px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Price card */}
              <div
                style={{
                  background: '#2C2420',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(201, 168, 76, 0.06)' }} />
                <p className="section-label" style={{ color: '#E8C97A', marginBottom: '0.5rem' }}>✦ Order Value</p>
                <p style={{ margin: '0 0 0.25rem', fontFamily: '"Playfair Display", Georgia, serif', fontSize: '2rem', fontWeight: '700', color: '#E8C97A' }}>
                  ₹{mockOrder.price.toLocaleString()}
                </p>
                <p style={{ margin: 0, fontSize: '0.78rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
                  Estimate confirmed via WhatsApp
                </p>
              </div>

              {/* Status control */}
              <div
                style={{
                  background: '#FEFCF8',
                  border: '1px solid #EDE0C8',
                  borderRadius: '16px',
                  padding: '1.5rem',
                }}
              >
                <p className="section-label" style={{ marginBottom: '1rem' }}>⚙️ Order Status</p>

                <select
                  value={status}
                  onChange={(e) => { setStatus(e.target.value as OrderStatus); setSaved(false); }}
                  className="form-field"
                  style={{ marginBottom: '1rem' }}
                >
                  {STATUS_STEPS.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {/* Progress bar */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>Progress</span>
                    <span style={{ fontSize: '0.72rem', color: '#C9A84C', fontFamily: '"DM Sans", sans-serif', fontWeight: '700' }}>
                      {Math.round(((STATUS_STEPS.indexOf(status) + 1) / STATUS_STEPS.length) * 100)}%
                    </span>
                  </div>
                  <div style={{ height: '6px', background: '#EDE0C8', borderRadius: '999px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #C9A84C, #E8C97A)',
                        borderRadius: '999px',
                        width: `${((STATUS_STEPS.indexOf(status) + 1) / STATUS_STEPS.length) * 100}%`,
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={handleSaveStatus}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {saved ? '✓ Saved!' : 'Update Status'}
                </button>
              </div>

              {/* Notes area */}
              <div
                style={{
                  background: '#FEFCF8',
                  border: '1px solid #EDE0C8',
                  borderRadius: '16px',
                  padding: '1.5rem',
                }}
              >
                <p className="section-label" style={{ marginBottom: '0.75rem' }}>📝 Admin Notes</p>
                <textarea
                  className="form-field"
                  placeholder="Internal notes about this order..."
                  rows={4}
                  style={{ resize: 'vertical', minHeight: '90px' }}
                />
                <button
                  className="btn-outline"
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '10px', fontSize: '0.82rem', marginTop: '0.75rem' }}
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .order-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}
