import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 120 },
  { name: 'Tue', sales: 98 },
  { name: 'Wed', sales: 150 },
  { name: 'Thu', sales: 80 },
  { name: 'Fri', sales: 170 },
  { name: 'Sat', sales: 200 },
  { name: 'Sun', sales: 90 },
];

const ChartCard = () => {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h3 className="text-xl font-bold mb-2">Weekly Sales</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard; 