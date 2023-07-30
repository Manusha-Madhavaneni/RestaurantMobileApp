import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const AddOrderForm = ({ onAddOrder }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [table, setTable] = useState('');
  const [dishes, setDishes] = useState('');

  const handleAddOrder = () => {
    const customer = { name, phone };
    const newOrder = { customer, table, dishes: dishes.split(','), completed: false };
    onAddOrder(newOrder);
    setName('');
    setPhone('');
    setTable('');
    setDishes('');
  };

  return (
    <View>
      <Text>Customer Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Phone:</Text>
      <TextInput value={phone} onChangeText={setPhone} />
      <Text>Table ID:</Text>
      <TextInput value={table} onChangeText={setTable} />
      <Text>Dishes (comma-separated):</Text>
      <TextInput value={dishes} onChangeText={setDishes} />
      <TouchableOpacity onPress={handleAddOrder}>
        <Text>Add Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddOrderForm;