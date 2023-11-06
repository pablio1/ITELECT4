import React, { useState } from 'react';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState('');

  const handleAddOrder = () => {
    if (newOrder.trim() !== '') {
      setOrders([...orders, newOrder]);
      setNewOrder('');
    }
  };

  return (
    <div>
      <h1>Orders </h1>
      <input
        type="text"
        placeholder="Enter a new order"
        value={newOrder}
        onChange={(e) => setNewOrder(e.target.value)}
      />
      <button onClick={handleAddOrder}>Add Order</button>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;