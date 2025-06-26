import React from 'react';

const products = [
  { id: 1, name: 'Chocolate Cake', price: 25 },
  { id: 2, name: 'Croissant', price: 3 },
  { id: 3, name: 'Baguette', price: 2 },
  { id: 4, name: 'Cupcake', price: 4 },
];

const ProductList = () => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Products</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList; 