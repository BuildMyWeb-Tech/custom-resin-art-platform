'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';
import { MOCK_ORDERS, STATUS_COLORS } from '@/lib/mockData';

export default function AdminPage() {
  const total = MOCK_ORDERS.length;
  const pending = MOCK_ORDERS.filter(o => o.status === 'Order Received').length;
  const inProgress = MOCK_ORDERS.filter(o => o.status === 'In Progress' || o.status === 'Materials Received').length;
  const completed = MOCK_ORDERS.filter(o => o.status === 'Completed' || o.status === 'Shipped').length;

  const stats = [
    { label: 'Total Orders', value: total, icon: '📋', color: '#C9A84C', bg: 'rgba(201, 168, 76, 0.1)', trend: '+2 this week' },
    { label: 'Pending', value: pending, icon: '⏳', color: '#2563EB', bg: 'rgba(37, 99, 235, 0.08)', trend: 'Awaiting review' },
    { label: 'In Progress', value: inProgress, icon: '🎨', color: '#B45309', bg: 'rgba(180, 83, 9, 0.08)', trend: 'Being crafted' },
    { label: 'Completed', value: completed, icon: '✅', color: '#059669', bg: 'rgba(5, 150, 105, 0.08)', trend: 'Delivered / Shipped' },
  ];

  const recentOrders = MOCK_ORDERS.slice(0, 4);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F4F1EC' }}>
      <AdminSidebar />

      {/* Main content */}
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
          <div>
            <h1
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#2C2420',
                margin: 0,
              }}
            >
              Dashboard
            </h1>
            <p style={{ margin: 0, fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
              Welcome back, Admin
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(201, 168, 76, 0.1)',
                border: '1px solid rgba(201, 168, 76, 0.25)',
                padding: '0.4rem 0.9rem',
                borderRadius: '999px',
              }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#25D366', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '0.75rem', color: '#9A7209', fontFamily: '"DM Sans", sans-serif', fontWeight: '600' }}>Studio Online</span>
            </div>
          </div>
        </div>

        <div style={{ padding: '2rem' }}>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card"
                style={{
                  background: '#FEFCF8',
                  borderRadius: '16px',
                  border: '1px solid #EDE0C8',
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: stat.bg,
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: stat.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <p
                  style={{
                    margin: '0 0 0.25rem',
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: stat.color,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ margin: '0 0 0.3rem', fontSize: '0.875rem', fontWeight: '600', color: '#2C2420', fontFamily: '"DM Sans", sans-serif' }}>
                  {stat.label}
                </p>
                <p style={{ margin: 0, fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
                  {stat.trend}
                </p>
              </div>
            ))}
          </div>

          {/* Two-column layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '1.5rem' }}>

            {/* Recent Orders */}
            <div
              style={{
                background: '#FEFCF8',
                borderRadius: '16px',
                border: '1px solid #EDE0C8',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid #EDE0C8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h2
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#2C2420',
                    margin: 0,
                  }}
                >
                  Recent Orders
                </h2>
                <Link
                  href="/admin/orders"
                  style={{
                    fontSize: '0.8rem',
                    color: '#C9A84C',
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                >
                  View all →
                </Link>
              </div>

              {recentOrders.map((order) => {
                const colors = STATUS_COLORS[order.status];
                return (
                  <div
                    key={order.id}
                    style={{
                      padding: '1rem 1.5rem',
                      borderBottom: '1px solid #F5EFE0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: '#2C2420',
                        flexShrink: 0,
                      }}
                    >
                      {order.customerName[0]}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600', color: '#2C2420', fontFamily: '"DM Sans", sans-serif' }}>
                        {order.customerName}
                      </p>
                      <p style={{ margin: '0.15rem 0 0', fontSize: '0.75rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {order.id} · {order.product}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <span
                        style={{
                          background: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '999px',
                          fontSize: '0.68rem',
                          fontWeight: '600',
                          fontFamily: '"DM Sans", sans-serif',
                          display: 'block',
                          marginBottom: '0.25rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {order.status}
                      </span>
                      <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: '700', color: '#C9A84C', fontFamily: '"Playfair Display", Georgia, serif' }}>
                        ₹{order.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick stats sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Revenue card */}
              <div
                style={{
                  background: '#2C2420',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(201, 168, 76, 0.07)' }} />
                <p className="section-label" style={{ color: '#E8C97A', marginBottom: '0.75rem' }}>✦ Revenue</p>
                <p style={{ margin: '0 0 0.25rem', fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.9rem', fontWeight: '700', color: '#E8C97A' }}>
                  ₹{MOCK_ORDERS.reduce((acc, o) => acc + o.price, 0).toLocaleString()}
                </p>
                <p style={{ margin: 0, fontSize: '0.78rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>Total from {total} orders</p>
              </div>

              {/* Status breakdown */}
              <div
                style={{
                  background: '#FEFCF8',
                  borderRadius: '16px',
                  border: '1px solid #EDE0C8',
                  padding: '1.25rem',
                }}
              >
                <p style={{ margin: '0 0 1rem', fontFamily: '"Playfair Display", Georgia, serif', fontSize: '0.95rem', fontWeight: '600', color: '#2C2420' }}>
                  Status Overview
                </p>
                {Object.entries(STATUS_COLORS).map(([status, colors]) => {
                  const count = MOCK_ORDERS.filter(o => o.status === status).length;
                  if (count === 0) return null;
                  return (
                    <div key={status} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors.text }} />
                        <span style={{ fontSize: '0.78rem', color: '#5C4F48', fontFamily: '"DM Sans", sans-serif' }}>{status}</span>
                      </div>
                      <span
                        style={{
                          background: colors.bg,
                          color: colors.text,
                          padding: '0.1rem 0.5rem',
                          borderRadius: '999px',
                          fontSize: '0.72rem',
                          fontWeight: '700',
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Quick actions */}
              <div
                style={{
                  background: '#FEFCF8',
                  borderRadius: '16px',
                  border: '1px solid #EDE0C8',
                  padding: '1.25rem',
                }}
              >
                <p style={{ margin: '0 0 0.75rem', fontFamily: '"Playfair Display", Georgia, serif', fontSize: '0.95rem', fontWeight: '600', color: '#2C2420' }}>
                  Quick Actions
                </p>
                <Link href="/admin/orders" style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      padding: '0.65rem 0.9rem',
                      background: 'rgba(201, 168, 76, 0.06)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      marginBottom: '0.5rem',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                  >
                    <span>📋</span>
                    <span style={{ fontSize: '0.82rem', color: '#2C2420', fontFamily: '"DM Sans", sans-serif', fontWeight: '500' }}>View All Orders</span>
                  </div>
                </Link>
                <Link href="/gallery" style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      padding: '0.65rem 0.9rem',
                      background: 'rgba(201, 168, 76, 0.06)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      cursor: 'pointer',
                    }}
                  >
                    <span>🖼️</span>
                    <span style={{ fontSize: '0.82rem', color: '#2C2420', fontFamily: '"DM Sans", sans-serif', fontWeight: '500' }}>Manage Gallery</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.5} }
        @media(max-width:900px){
          .admin-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}
