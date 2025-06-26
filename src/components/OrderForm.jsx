import React from 'react';

const OrderForm = () => {
  return (
    <form className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Add New Order</h2>
      {/* Form fields will go here */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Order
      </button>
    </form>
  );
};

export default OrderForm; 