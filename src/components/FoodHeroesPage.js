import React from 'react';
import Button from './ui/buttons';

const FoodDonationLanding = () => {
  return (
    <div className="min-h-screen bg-[#fafae5]">
      
      <nav className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center">
          <span className="text-xl font-semibold">
            <span className="text-black">Meal</span>
            <span className="text-green-500">Connect</span>
          </span>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-green-500">Home</a>
          <a href="#" className="text-gray-600">Delivery</a>
          <a href="#" className="text-gray-600">About</a>
          <a href="#" className="text-gray-600">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Your Cart (0)</span>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </nav>

      
      <main className="container mx-auto px-4 py-8">
        <div className="relative">
          
          <h1 className="text-6xl font-bold text-[#8B4513] text-center mb-20">
            Food Heroes
          </h1>

          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img 
                src="/images/4th.jpg" 
                alt="Volunteer helping with food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-80 h-80 rounded-full overflow-hidden -mt-16">
              <img 
                src="/images/1st.jpg" 
                alt="People donating food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img 
                src="/images/6th copy.jpg" 
                alt="Food donations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <p className="text-[#8B4513] text-2xl text-center mb-4">
            Transforming Surplus Into<br />
            Smiles For Those In Need!
          </p>
        </div>

        
        <div className="bg-[#FF8C00] text-white py-16 px-4 rounded-lg text-center mt-8">
          <h2 className="text-5xl font-bold mb-4">Donate Your Surplus</h2>
          <h3 className="text-4xl mb-8">Food Today</h3>
          <p className="text-2xl mb-8">Help Us Feed The Hungry And Reduce Waste</p>
          <Button 
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-xl hover:bg-gray-300 transition-colors"
          >
            Make A Difference
          </Button>
        </div>
      </main>
    </div>
  );
};

export default FoodDonationLanding;
