'use client';

import { ChangeEvent } from 'react';
import { OrderData } from '@/lib/OrderContext';

interface Props {
  order: OrderData;
  onChange: (field: keyof OrderData, value: string | null) => void;
  errors: Record<string, string>;
}

export default function CustomizationForm({ order, onChange, errors }: Props) {
  const handleFileUpload = (field: 'referenceImagePreview' | 'memoryImagePreview') => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        onChange(field, ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#5C4F48',
    marginBottom: '0.4rem',
    fontFamily: '"DM Sans", sans-serif',
    letterSpacing: '0.02em',
  };

  const errorStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    color: '#B85C3A',
    marginTop: '0.3rem',
    fontFamily: '"DM Sans", sans-serif',
  };

  const fieldWrapper: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Section: Product Info */}
      <div>
        <p className="section-label" style={{ marginBottom: '1rem' }}>📦 Product Details</p>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(201, 168, 76, 0.08), rgba(184, 112, 74, 0.06))',
            border: '1.5px solid #D4C0A0',
            borderRadius: '12px',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>✦</span>
          <div>
            <p style={{ margin: 0, fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Selected Product</p>
            <p style={{ margin: 0, fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.05rem', color: '#2C2420', fontWeight: '600' }}>
              {order.productName || 'Custom Resin Art'}
            </p>
          </div>
        </div>
      </div>

      {/* Size & Color */}
      <div>
        <p className="section-label" style={{ marginBottom: '1rem' }}>🎨 Size & Style</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={fieldWrapper}>
            <label style={labelStyle}>Frame Size *</label>
            <select
              className="form-field"
              value={order.size}
              onChange={(e) => onChange('size', e.target.value)}
            >
              <option value="Small">Small — Standard (₹0)</option>
              <option value="Medium">Medium — Popular (+₹1,000)</option>
              <option value="Large">Large — Premium (+₹2,000)</option>
            </select>
            {errors.size && <p style={errorStyle}>{errors.size}</p>}
          </div>

          <div style={fieldWrapper}>
            <label style={labelStyle}>Color Theme *</label>
            <select
              className="form-field"
              value={order.colorTheme}
              onChange={(e) => onChange('colorTheme', e.target.value)}
            >
              <option value="Gold">Gold — Timeless Luxury</option>
              <option value="White">White — Pure Elegance</option>
              <option value="Pastel">Pastel — Soft Romance</option>
              <option value="Custom">Custom — Tell Us Your Vision</option>
            </select>
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div>
        <p className="section-label" style={{ marginBottom: '1rem' }}>💎 Personalization</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          <div style={fieldWrapper}>
            <label style={labelStyle}>Name to Engrave</label>
            <input
              type="text"
              className="form-field"
              placeholder="e.g., Priya & Arjun (+₹300)"
              value={order.nameToAdd}
              onChange={(e) => onChange('nameToAdd', e.target.value)}
            />
            {order.nameToAdd && (
              <p style={{ fontSize: '0.75rem', color: '#C9A84C', marginTop: '0.3rem', fontFamily: '"DM Sans", sans-serif' }}>
                ✓ Name engraving added (+₹300)
              </p>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={fieldWrapper}>
              <label style={labelStyle}>Special Date</label>
              <input
                type="date"
                className="form-field"
                value={order.specialDate}
                onChange={(e) => onChange('specialDate', e.target.value)}
              />
            </div>

            <div style={fieldWrapper}>
              <label style={labelStyle}>Preferred Delivery Date *</label>
              <input
                type="date"
                className="form-field"
                value={order.deliveryDate}
                onChange={(e) => onChange('deliveryDate', e.target.value)}
              />
              {errors.deliveryDate && <p style={errorStyle}>{errors.deliveryDate}</p>}
            </div>
          </div>

          <div style={fieldWrapper}>
            <label style={labelStyle}>Message / Quote</label>
            <textarea
              className="form-field"
              placeholder="e.g., &quot;Together is our favourite place to be&quot;"
              rows={3}
              value={order.message}
              onChange={(e) => onChange('message', e.target.value)}
              style={{ resize: 'vertical', minHeight: '80px' }}
            />
          </div>
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <p className="section-label" style={{ marginBottom: '1rem' }}>📸 Reference Images</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

          {/* Reference Image */}
          <div style={fieldWrapper}>
            <label style={labelStyle}>Reference / Inspiration Photo</label>
            {order.referenceImagePreview ? (
              <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '2px solid #C9A84C' }}>
                <img
                  src={order.referenceImagePreview}
                  alt="Reference"
                  style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                />
                <button
                  onClick={() => onChange('referenceImagePreview', null)}
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    background: 'rgba(44, 36, 32, 0.8)',
                    color: '#FEFCF8',
                    border: 'none',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                  }}
                >
                  ✕
                </button>
              </div>
            ) : (
              <label className="upload-zone" style={{ cursor: 'pointer' }}>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload('referenceImagePreview')}
                />
                <div>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.4rem' }}>🖼️</span>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
                    Upload reference
                  </p>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.7rem', color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}>
                    Click to browse
                  </p>
                </div>
              </label>
            )}
          </div>

          {/* Memory Item */}
          <div style={fieldWrapper}>
            <label style={labelStyle}>Memory Item Photo</label>
            {order.memoryImagePreview ? (
              <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '2px solid #C9A84C' }}>
                <img
                  src={order.memoryImagePreview}
                  alt="Memory item"
                  style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                />
                <button
                  onClick={() => onChange('memoryImagePreview', null)}
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    background: 'rgba(44, 36, 32, 0.8)',
                    color: '#FEFCF8',
                    border: 'none',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                  }}
                >
                  ✕
                </button>
              </div>
            ) : (
              <label className="upload-zone" style={{ cursor: 'pointer' }}>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload('memoryImagePreview')}
                />
                <div>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.4rem' }}>💐</span>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
                    Upload memory item
                  </p>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.7rem', color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}>
                    Flowers, ultrasound, etc.
                  </p>
                </div>
              </label>
            )}
          </div>
        </div>
      </div>

      {/* Special Instructions */}
      <div>
        <p className="section-label" style={{ marginBottom: '1rem' }}>📝 Additional Notes</p>
        <div style={fieldWrapper}>
          <label style={labelStyle}>Special Instructions</label>
          <textarea
            className="form-field"
            placeholder="Any specific requirements, additional items to preserve, style preferences..."
            rows={4}
            value={order.specialInstructions}
            onChange={(e) => onChange('specialInstructions', e.target.value)}
            style={{ resize: 'vertical', minHeight: '100px' }}
          />
        </div>
      </div>
    </div>
  );
}
