'use client';

import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      <Navbar step={1} />

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '5rem 1.5rem 6rem',
          textAlign: 'center',
        }}
      >
        {/* Background decorations */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184, 112, 74, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Ornamental line */}
        <div
          className="animate-fade-up"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#C9A84C', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', fontWeight: '600' }}>
            Handcrafted with Love
          </span>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
        </div>

        <h1
          className="animate-fade-up animate-fade-up-delay-1"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: '700',
            color: '#2C2420',
            lineHeight: '1.2',
            marginBottom: '1.25rem',
            maxWidth: '700px',
            margin: '0 auto 1.25rem',
          }}
        >
          Custom Resin{' '}
          <span
            style={{
              fontStyle: 'italic',
              color: '#C9A84C',
              position: 'relative',
            }}
          >
            Artwork
          </span>{' '}
          Orders
        </h1>

        <p
          className="animate-fade-up animate-fade-up-delay-2"
          style={{
            fontSize: '1.05rem',
            color: '#7A6A62',
            lineHeight: '1.7',
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          Create personalized resin artworks for weddings, baby memories, and special occasions. Each piece is a unique treasure, crafted by hand.
        </p>

        {/* Trust badges */}
        <div
          className="animate-fade-up animate-fade-up-delay-3"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '1rem',
          }}
        >
          {[
            { icon: '✦', label: '100% Handmade' },
            { icon: '💎', label: 'Premium Resin' },
            { icon: '📲', label: 'WhatsApp Support' },
            { icon: '🚚', label: 'Pan India Delivery' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.82rem',
                color: '#9A8878',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              <span style={{ color: '#C9A84C' }}>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-divider" style={{ maxWidth: '200px', margin: '0 auto 3rem' }} />

      {/* Product Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Our Collections</p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
              fontWeight: '600',
              color: '#2C2420',
              margin: 0,
            }}
          >
            Choose Your Masterpiece
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          <ProductCard
            type="wedding"
            title="Wedding Flower Preservation Frame"
            subtitle="Bridal Collection"
            description="Preserve your wedding bouquet forever in a stunning resin frame. A timeless keepsake that captures the beauty of your most special day."
            emoji="💍"
            tags={['Flowers', 'Gold Frame', 'Custom Name']}
            priceFrom="₹3,000"
            gradient="linear-gradient(135deg, #F5EFE0 0%, #E8D5B0 40%, #D4B070 100%)"
            delay={0.1}
          />

          <ProductCard
            type="baby"
            title="Baby Memory Resin Frame"
            subtitle="Nursery Treasures"
            description="Capture precious baby memories — first shoes, hospital bands, ultrasound photos, and tiny handprints — in a beautiful resin keepsake."
            emoji="👶"
            tags={['Newborn', 'Keepsake', 'Milestone']}
            priceFrom="₹3,000"
            gradient="linear-gradient(135deg, #F0EDF8 0%, #DDD4F0 40%, #C4B0E0 100%)"
            delay={0.2}
          />

          <ProductCard
            type="nameboard"
            title="Custom Resin Name Board"
            subtitle="Décor & Gifting"
            description="Elegant custom name boards in premium resin, perfect for home décor, nurseries, offices, and meaningful personalized gifts."
            emoji="🏡"
            tags={['Décor', 'Name Art', 'Gift']}
            priceFrom="₹3,000"
            gradient="linear-gradient(135deg, #EDF5F0 0%, #C8E0D4 40%, #A0C8B4 100%)"
            delay={0.3}
          />
        </div>
      </section>

      {/* How it works */}
      <section
        style={{
          background: '#2C2420',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <p className="section-label" style={{ color: '#E8C97A', marginBottom: '0.75rem' }}>Simple Process</p>
        <h2
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: '600',
            color: '#FEFCF8',
            marginBottom: '3rem',
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {[
            { step: '01', title: 'Choose & Customize', desc: 'Select your product and fill in your personalization details', icon: '✦' },
            { step: '02', title: 'We Review & Confirm', desc: 'Our artisan contacts you on WhatsApp to finalize the design', icon: '💎' },
            { step: '03', title: 'Crafted with Care', desc: 'Your artwork is handcrafted with premium materials', icon: '🖐️' },
            { step: '04', title: 'Delivered to You', desc: 'Safely packed and shipped to your doorstep', icon: '🚚' },
          ].map(({ step, title, desc, icon }) => (
            <div key={step} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(201, 168, 76, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.4rem',
                }}
              >
                {icon}
              </div>
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: '#C9A84C',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: '600',
                }}
              >
                Step {step}
              </p>
              <h4
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1rem',
                  color: '#FEFCF8',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                }}
              >
                {title}
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif', lineHeight: '1.5' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { href: '/how-it-works', icon: '📖', label: 'How It Works', desc: 'See our 4-step process' },
            { href: '/gallery', icon: '🖼️', label: 'Before & After Gallery', desc: 'Browse real transformations' },
            { href: '/track-order', icon: '📦', label: 'Track Your Order', desc: 'Check order status live' },
            { href: '/admin', icon: '⚙️', label: 'Admin Demo', desc: 'View studio dashboard' },
          ].map(({ href, icon, label, desc }) => (
            <a
              key={href}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                background: '#FEFCF8',
                border: '1px solid #EDE0C8',
                borderRadius: '14px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = '#C9A84C'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = '#EDE0C8'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
            >
              <span style={{ fontSize: '1.5rem', width: '36px', height: '36px', background: 'rgba(201,168,76,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600', color: '#2C2420', fontFamily: '"DM Sans", sans-serif' }}>{label}</p>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '2rem 1.5rem',
          textAlign: 'center',
          borderTop: '1px solid #EDE0C8',
          background: '#FEFCF8',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {[
            { href: '/how-it-works', label: 'How It Works' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/track-order', label: 'Track Order' },
            { href: '/admin', label: 'Admin' },
          ].map(({ href, label }) => (
            <a key={href} href={href} style={{ fontSize: '0.82rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget as HTMLElement).style.color = '#C9A84C'}
              onMouseOut={e => (e.currentTarget as HTMLElement).style.color = '#9A8878'}
            >
              {label}
            </a>
          ))}
        </div>
        <p
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '0.95rem',
            color: '#9A8878',
            fontStyle: 'italic',
            margin: 0,
          }}
        >
          ✦ Resin Artistry — Memories, Preserved Forever ✦
        </p>
      </footer>
    </div>
  );
}
