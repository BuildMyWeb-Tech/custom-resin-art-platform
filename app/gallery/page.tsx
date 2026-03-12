'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import GalleryCard from '@/components/GalleryCard';
import { GALLERY_ITEMS } from '@/lib/mockData';

const CATEGORIES = ['All', 'Wedding', 'Baby', 'Name Board', 'Special Occasion'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', background: '#FAF7F0' }}>
      <Navbar step={1} />

      {/* Hero */}
      <section style={{ padding: '4.5rem 1.5rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '8%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201, 168, 76, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="animate-fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#C9A84C', fontFamily: '"DM Sans", sans-serif', textTransform: 'uppercase', fontWeight: '600' }}>
            Before & After
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
          Our{' '}
          <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Gallery</span>
        </h1>

        <p
          className="animate-fade-up animate-fade-up-delay-2"
          style={{
            fontSize: '1rem',
            color: '#7A6A62',
            lineHeight: '1.7',
            maxWidth: '500px',
            margin: '0 auto',
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          Witness the transformation — from precious memories and flowers to stunning resin keepsakes.
        </p>
      </section>

      {/* Category Filter */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 1.5rem' }}>
        <div
          className="animate-fade-up animate-fade-up-delay-3"
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                background: activeCategory === cat ? '#2C2420' : '#FEFCF8',
                color: activeCategory === cat ? '#E8C97A' : '#7A6A62',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(44,36,32,0.15)' : 'none',
                border: activeCategory === cat ? 'none' : '1px solid #EDE0C8',
              } as React.CSSProperties}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem 1.5rem 5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filtered.map((item, i) => (
            <GalleryCard key={item.id} item={item} delay={0.05 * i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
            No items in this category yet.
          </div>
        )}

        {/* Info strip */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(201, 168, 76, 0.08), rgba(184, 112, 74, 0.06))',
            border: '1px solid rgba(201, 168, 76, 0.2)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <p style={{ margin: 0, fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.1rem', color: '#2C2420', fontWeight: '600' }}>
              Don't see your style? We create custom designs too.
            </p>
            <p style={{ margin: '0.3rem 0 0', fontSize: '0.85rem', color: '#7A6A62', fontFamily: '"DM Sans", sans-serif' }}>
              Describe your vision and our artisan will bring it to life.
            </p>
          </div>
          <a
            href="/"
            className="btn-gold"
            style={{
              padding: '0.8rem 1.75rem',
              borderRadius: '12px',
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              flexShrink: 0,
            }}
          >
            Start Your Order →
          </a>
        </div>
      </section>
    </div>
  );
}
