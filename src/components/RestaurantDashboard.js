
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantDashboard = () => {
  const [surplusFood, setSurplusFood] = useState([]);
  const [newItem, setNewItem] = useState({ item: '', quantity: 0, expiryDate: '' });

  useEffect(() => {
    
    axios.get('/api/restaurant/surplusFood')
      .then(response => setSurplusFood(response.data))
      .catch(error => console.error('Error fetching surplus food:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
   
    axios.post('/api/restaurant/addFood', newItem)
      .then(response => setSurplusFood([...surplusFood, response.data]))
      .catch(error => console.error('Error adding food item:', error));
  };

  return (
    <div>
      <h1>Restaurant Dashboard</h1>
      <h2>Surplus Food Inventory</h2>
      <ul>
        {surplusFood.map((food, index) => (
          <li key={index}>
            {food.item} - {food.quantity} units (Expires on: {new Date(food.expiryDate).toLocaleDateString()})
          </li>
        ))}
      </ul>

      <h2>Add New Surplus Food</h2>
      <input type="text" name="item" placeholder="Food Item" onChange={handleInputChange} />
      <input type="number" name="quantity" placeholder="Quantity" onChange={handleInputChange} />
      <input type="date" name="expiryDate" onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default RestaurantDashboard;
