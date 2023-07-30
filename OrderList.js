import React from 'react';
import { View, FlatList } from 'react-native';
import Order from './Order';

const OrderList = ({ orders, onMarkComplete, onDelete }) => {
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Order order={item} onMarkComplete={onMarkComplete} onDelete={onDelete} />
        )}
      />
    </View>
  );
};

export default OrderList;