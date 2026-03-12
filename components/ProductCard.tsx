'use client';

import { useRouter } from 'next/navigation';
import { useOrder, ProductType } from '@/lib/OrderContext';

interface ProductCardProps {
  type: ProductType;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  tags: string[];
  priceFrom: string;
  gradient: string;
  delay: number;
}

export default function ProductCard({
  type,
  title,
  subtitle,
  description,
  emoji,
  tags,
  priceFrom,
  gradient,
  delay,
}: ProductCardProps) {
  const router = useRouter();
  const { setOrder } = useOrder();

  const handleSelect = () => {
    setOrder({ product: type, productName: title });
    router.push('/customize');
  };

  return (
    <div
      className="product-card animate-fade-up"
      style={{
        animationDelay: `${delay}s`,
        background: '#FEFCF8',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #EDE0C8',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image Placeholder */}
      <div
        style={{
          height: '220px',
          background: gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.25)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.2)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <span style={{ fontSize: '4.5rem', position: 'relative', zIndex: 1 }}>{emoji}</span>

        {/* Price badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'rgba(44, 36, 32, 0.75)',
            backdropFilter: 'blur(8px)',
            color: '#E8C97A',
            padding: '0.25rem 0.75rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: '600',
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          From {priceFrom}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: '1.5rem',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        <div>
          <p className="section-label" style={{ marginBottom: '0.35rem' }}>{subtitle}</p>
          <h3
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#2C2420',
              lineHeight: '1.3',
              margin: 0,
            }}
          >
            {title}
          </h3>
        </div>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#7A6A62',
            lineHeight: '1.6',
            margin: 0,
            flex: 1,
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="badge"
              style={{
                background: 'rgba(201, 168, 76, 0.1)',
                color: '#9A7209',
                border: '1px solid rgba(201, 168, 76, 0.25)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="gold-divider" style={{ margin: '0.25rem 0' }} />

        {/* CTA */}
        <button
          onClick={handleSelect}
          className="btn-gold"
          style={{
            width: '100%',
            padding: '0.85rem 1.5rem',
            borderRadius: '12px',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          Customize Now
          <span style={{ fontSize: '1rem' }}>→</span>
        </button>
      </div>
    </div>
  );
}
