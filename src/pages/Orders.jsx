import React from 'react';
import OrderForm from '../components/OrderForm';

const demoOrders = [
  { id: 1, product: 'Chocolate Cake', quantity: 2, total: 50 },
  { id: 2, product: 'Croissant', quantity: 6, total: 18 },
  { id: 3, product: 'Cupcake', quantity: 4, total: 16 },
];

const Orders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Orders</h1>
      <OrderForm />
      <h2 className="text-2xl font-bold mt-8 mb-2">Order List</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Total ($)</th>
          </tr>
        </thead>
        <tbody>
          {demoOrders.map((order) => (
            <tr key={order.id}>
              <td className="py-2 px-4 border-b">{order.product}</td>
              <td className="py-2 px-4 border-b">{order.quantity}</td>
              <td className="py-2 px-4 border-b">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders; 