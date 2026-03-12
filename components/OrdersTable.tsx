'use client';

import Link from 'next/link';
import { MockOrder, STATUS_COLORS, OrderStatus } from '@/lib/mockData';

interface OrdersTableProps {
  orders: MockOrder[];
  onStatusChange?: (id: string, status: OrderStatus) => void;
}

export default function OrdersTable({ orders, onStatusChange }: OrdersTableProps) {
  const STATUS_STEPS: OrderStatus[] = [
    'Order Received',
    'Materials Received',
    'In Progress',
    'Completed',
    'Shipped',
  ];

  return (
    <div
      style={{
        background: '#FEFCF8',
        borderRadius: '16px',
        border: '1px solid #EDE0C8',
        overflow: 'hidden',
      }}
    >
      <div style={{ overflowX: 'auto' }}>
        <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>WhatsApp</th>
              <th>Product</th>
              <th>Size</th>
              <th>Delivery</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const colors = STATUS_COLORS[order.status];
              return (
                <tr key={order.id}>
                  <td>
                    <span
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontWeight: '700',
                        fontSize: '0.82rem',
                        color: '#C9A84C',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {order.id}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: '#2C2420',
                          flexShrink: 0,
                        }}
                      >
                        {order.customerName[0]}
                      </div>
                      <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>{order.customerName}</span>
                    </div>
                  </td>
                  <td>
                    <a
                      href={`https://wa.me/91${order.whatsapp}`}
                      style={{ color: '#25D366', fontSize: '0.82rem', fontFamily: '"DM Sans", sans-serif', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      📲 {order.whatsapp}
                    </a>
                  </td>
                  <td>
                    <span style={{ fontSize: '0.82rem', color: '#5C4F48' }}>
                      {order.product.length > 24 ? order.product.slice(0, 24) + '…' : order.product}
                    </span>
                  </td>
                  <td>
                    <span
                      style={{
                        background: 'rgba(201, 168, 76, 0.1)',
                        color: '#9A7209',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      {order.size}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: '0.82rem', color: '#5C4F48' }}>
                      {order.deliveryDate
                        ? new Date(order.deliveryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
                        : '—'}
                    </span>
                  </td>
                  <td>
                    <span
                      style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontWeight: '700',
                        color: '#2C2420',
                        fontSize: '0.9rem',
                      }}
                    >
                      ₹{order.price.toLocaleString()}
                    </span>
                  </td>
                  <td>
                    {onStatusChange ? (
                      <select
                        value={order.status}
                        onChange={(e) => onStatusChange(order.id, e.target.value as OrderStatus)}
                        style={{
                          background: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          borderRadius: '8px',
                          padding: '0.3rem 0.6rem',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          fontFamily: '"DM Sans", sans-serif',
                          cursor: 'pointer',
                          outline: 'none',
                        }}
                      >
                        {STATUS_STEPS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    ) : (
                      <span
                        style={{
                          background: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          padding: '0.3rem 0.7rem',
                          borderRadius: '999px',
                          fontSize: '0.72rem',
                          fontWeight: '600',
                          fontFamily: '"DM Sans", sans-serif',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {order.status}
                      </span>
                    )}
                  </td>
                  <td>
                    <Link
                      href={`/admin/orders/${order.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.4rem 0.8rem',
                        background: '#2C2420',
                        color: '#E8C97A',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        fontFamily: '"DM Sans", sans-serif',
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
