'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '▦' },
  { href: '/admin/orders', label: 'Orders', icon: '📋' },
  { href: '/gallery', label: 'Gallery Manager', icon: '🖼️' },
  { href: '/admin', label: 'Customers', icon: '👥' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: '230px',
        minHeight: '100vh',
        background: '#18120E',
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        overflowY: 'auto',
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: '1.5rem 1.25rem',
          borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
            }}
          >
            ✦
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: '#FEFCF8',
              }}
            >
              Resin Artistry
            </p>
            <p
              style={{
                margin: 0,
                fontSize: '0.65rem',
                color: '#C9A84C',
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '1rem 0.75rem', flex: 1 }}>
        <p
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#5C4F48',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: '600',
            padding: '0 0.25rem',
            marginBottom: '0.5rem',
          }}
        >
          Navigation
        </p>

        {navItems.map((item) => {
          const isActive =
            item.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`admin-nav-item ${isActive ? 'active' : ''}`}
            >
              <span style={{ fontSize: '1rem', width: '20px', textAlign: 'center' }}>
                {item.icon}
              </span>
              {item.label}
              {item.label === 'Orders' && (
                <span
                  style={{
                    marginLeft: 'auto',
                    background: 'rgba(201, 168, 76, 0.2)',
                    color: '#E8C97A',
                    fontSize: '0.65rem',
                    fontWeight: '700',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '999px',
                  }}
                >
                  6
                </span>
              )}
            </Link>
          );
        })}

        <div
          style={{
            height: '1px',
            background: 'rgba(201, 168, 76, 0.12)',
            margin: '1rem 0',
          }}
        />

        <p
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#5C4F48',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: '600',
            padding: '0 0.25rem',
            marginBottom: '0.5rem',
          }}
        >
          Settings
        </p>

        <Link href="/" className="admin-nav-item">
          <span style={{ fontSize: '1rem', width: '20px', textAlign: 'center' }}>🌐</span>
          View Website
        </Link>
      </nav>

      {/* Bottom user */}
      <div
        style={{
          padding: '1rem 1.25rem',
          borderTop: '1px solid rgba(201, 168, 76, 0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            fontWeight: '700',
            color: '#2C2420',
            flexShrink: 0,
          }}
        >
          A
        </div>
        <div style={{ overflow: 'hidden' }}>
          <p
            style={{
              margin: 0,
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#FEFCF8',
              fontFamily: '"DM Sans", sans-serif',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Admin
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '0.7rem',
              color: '#9A8878',
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            Studio Manager
          </p>
        </div>
      </div>
    </aside>
  );
}
