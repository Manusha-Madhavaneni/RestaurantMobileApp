import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Order = ({ order, onMarkComplete, onDelete }) => {
  const { id, customer, table, dishes, completed } = order;

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <View>
        <Text>Customer: {customer.name}</Text>
        <Text>Phone: {customer.phone}</Text>
        <Text>Table: {table}</Text>
        <Text>Dishes: {dishes.join(', ')}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        {!completed && <TouchableOpacity onPress={() => onMarkComplete(id)}>
          <Text>Mark as Complete</Text>
        </TouchableOpacity>}
        {!completed && <TouchableOpacity onPress={() => onDelete(id)}>
          <Text>Delete</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

export default Order;