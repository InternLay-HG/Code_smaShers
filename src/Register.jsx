import React, { useState } from 'react';
import { ShoppingCart, Bell, User, Search } from 'lucide-react';

const Register = () => {
  const [userType, setUserType] = useState('restaurant');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="border-b bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold">
                <span>Meal</span>
                <span className="text-green-500">Connect</span>
              </span>
            </div>

            <div className="flex space-x-8">
              <a href="#" className="hover:text-gray-600">Home</a>
              <a href="#" className="hover:text-gray-600">Delivery</a>
              <a href="#" className="hover:text-gray-600">About</a>
              <a href="#" className="hover:text-gray-600">Contact</a>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <ShoppingCart className="w-5 h-5" />
                <span className="ml-2">Your Cart (0)</span>
              </div>
              <User className="w-5 h-5" />
              <Bell className="w-5 h-5" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-medium">
            <span className="text-gray-400">Register </span>
            <span className="text-blue-900">Now As</span>
          </h1>
        </div>

        {/* User Type Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 inline-flex shadow-lg">
            <button
              className={`px-8 py-2 rounded-full text-lg transition-colors ${
                userType === 'restaurant'
                  ? 'bg-blue-900 text-white'
                  : 'text-blue-900'
              }`}
              onClick={() => setUserType('restaurant')}
            >
              Restaurant
            </button>
            <button
              className={`px-8 py-2 rounded-full text-lg transition-colors ${
                userType === 'foodbank'
                  ? 'bg-blue-900 text-white'
                  : 'text-blue-900'
              }`}
              onClick={() => setUserType('foodbank')}
            >
              Food Bank
            </button>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-blue-200 rounded-3xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-white text-xl">
                Restaurant /Food Bank Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-white text-xl">Address</label>
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-white text-xl">E-Mail</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-white text-xl">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="text-center space-y-4">
              <button
                type="submit"
                className="bg-blue-900 text-white px-12 py-3 rounded-full text-lg hover:bg-blue-800 transition-colors"
              >
                Register
              </button>
              <div className="text-white">
                Already Have An Account?{' '}
                <a href="#" className="text-blue-900 hover:underline">
                  Log in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;