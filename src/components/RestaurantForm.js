import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    restaurantName: '',
    address: '',
    phone: '',
    website: '',
    socialMedia: '',
    daysOfOperation: '',
    openingTimes: '',
    ownerName: '',
    contactInfo: '',
    email: '',
    foodItems: '',
    categories: '',
    surplusTypes: '',
    quantity: '',
    expiryDates: '',
    preferredTime: '',
    contactPerson: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Restaurant form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Restaurant Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Restaurant Details */}
          <div className="bg-orange-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Restaurant Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Restaurant Name"
                className="w-full p-2 border rounded"
                value={formData.restaurantName}
                onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <input
                type="text"
                placeholder="Website (if any)"
                className="w-full p-2 border rounded"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
              />
              <input
                type="text"
                placeholder="Social Media Handles"
                className="w-full p-2 border rounded"
                value={formData.socialMedia}
                onChange={(e) => setFormData({...formData, socialMedia: e.target.value})}
              />
              <input
                type="text"
                placeholder="Days of Operation"
                className="w-full p-2 border rounded"
                value={formData.daysOfOperation}
                onChange={(e) => setFormData({...formData, daysOfOperation: e.target.value})}
              />
              <input
                type="text"
                placeholder="Opening and Closing Times"
                className="w-full p-2 border rounded"
                value={formData.openingTimes}
                onChange={(e) => setFormData({...formData, openingTimes: e.target.value})}
              />
            </div>
          </div>

          {/* Owner Details */}
          <div className="bg-purple-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Owner Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Owner Name"
                className="w-full p-2 border rounded"
                value={formData.ownerName}
                onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="text"
                placeholder="Contact Info"
                className="w-full p-2 border rounded"
                value={formData.contactInfo}
                onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
              />
            </div>
          </div>

          
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Menu Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Food Items"
                className="w-full p-2 border rounded"
                value={formData.foodItems}
                onChange={(e) => setFormData({...formData, foodItems: e.target.value})}
              />
              <input
                type="text"
                placeholder="Category"
                className="w-full p-2 border rounded"
                value={formData.categories}
                onChange={(e) => setFormData({...formData, categories: e.target.value})}
              />
            </div>
          </div>

          
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Surplus Food Info</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Types of Surplus Food"
                className="w-full p-2 border rounded"
                value={formData.surplusTypes}
                onChange={(e) => setFormData({...formData, surplusTypes: e.target.value})}
              />
              <input
                type="text"
                placeholder="Quantity"
                className="w-full p-2 border rounded"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              />
              <input
                type="text"
                placeholder="Expiry Dates"
                className="w-full p-2 border rounded"
                value={formData.expiryDates}
                onChange={(e) => setFormData({...formData, expiryDates: e.target.value})}
              />
            </div>
          </div>

          
          <div className="bg-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Pick Up Scheduling</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Preferred Time for Pick-Up"
                className="w-full p-2 border rounded"
                value={formData.preferredTime}
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
              />
              <input
                type="text"
                placeholder="Contact Person"
                className="w-full p-2 border rounded"
                value={formData.contactPerson}
                onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RestaurantForm;
