'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import OrdersTable from '@/components/OrdersTable';
import { MOCK_ORDERS, MockOrder, OrderStatus } from '@/lib/mockData';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<MockOrder[]>(MOCK_ORDERS);
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState('');

  const handleStatusChange = (id: string, status: OrderStatus) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  const filtered = orders.filter(o => {
    const matchStatus = filter === 'All' || o.status === filter;
    const matchSearch =
      search === '' ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const STATUS_FILTERS = ['All', 'Order Received', 'Materials Received', 'In Progress', 'Completed', 'Shipped'];

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
          <div>
            <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.2rem', fontWeight: '600', color: '#2C2420', margin: 0 }}>
              Orders
            </h1>
            <p style={{ margin: 0, fontSize: '0.72rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
              {filtered.length} orders found
            </p>
          </div>
        </div>

        <div style={{ padding: '1.75rem 2rem' }}>
          {/* Filters row */}
          <div
            style={{
              background: '#FEFCF8',
              borderRadius: '14px',
              border: '1px solid #EDE0C8',
              padding: '1rem 1.25rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Search */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.85rem', color: '#9A8878' }}>🔍</span>
              <input
                type="text"
                placeholder="Search by name or ID..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  background: '#F4F1EC',
                  border: '1px solid #EDE0C8',
                  borderRadius: '10px',
                  padding: '0.55rem 0.9rem 0.55rem 2.2rem',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.85rem',
                  color: '#2C2420',
                  outline: 'none',
                  width: '220px',
                }}
              />
            </div>

            <div style={{ width: '1px', height: '24px', background: '#EDE0C8' }} />

            {/* Status filters */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {STATUS_FILTERS.map(s => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '999px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: '600',
                    transition: 'all 0.2s',
                    background: filter === s ? '#2C2420' : 'transparent',
                    color: filter === s ? '#E8C97A' : '#9A8878',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <OrdersTable orders={filtered} onStatusChange={handleStatusChange} />

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#9A8878', fontFamily: '"DM Sans", sans-serif' }}>
              No orders found matching your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
