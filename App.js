import React, { useState } from 'react';
import { View, Text } from 'react-native';
import OrderList from './OrderList';
import AddOrderForm from './AddOrderForm';

const App = () => {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, { ...newOrder, id: prevOrders.length + 1 }]);
  };

  const handleMarkComplete = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, completed: true } : order
      )
    );
  };

  const handleDelete = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <View>
      <Text>Restaurant Ordering App</Text>
      <OrderList orders={orders} onMarkComplete={handleMarkComplete} onDelete={handleDelete} />
      <AddOrderForm onAddOrder={handleAddOrder} />
    </View>
  );
};

export default App;