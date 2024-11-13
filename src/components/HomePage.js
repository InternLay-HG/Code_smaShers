import React, { useState, useEffect } from 'react';
import { Home, MapPin, ShoppingCart, User, Search, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/buttons';

const Nav = () => (
  <nav className="flex items-center justify-between p-4 bg-white border-b">
    <div className="flex items-center">
      <span className="text-xl font-bold">Meal<span className="text-green-500">Connect</span></span>
    </div>
    <div className="flex gap-6">
      <button className="text-green-500">Home</button>
      <button className="text-gray-600">Delivery</button>
      <button className="text-gray-600">About</button>
      <button className="text-gray-600">Contact</button>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <ShoppingCart className="w-5 h-5" />
        <span className="ml-1">Your Cart (0)</span>
      </div>
      <User className="w-5 h-5" />
      <Search className="w-5 h-5" />
      <Menu className="w-5 h-5" />
    </div>
  </nav>
);

const MissionSection = () => (
  <div className="bg-green-50 p-8 flex gap-8 min-h-[600px]">
    <div className="w-1/2">
      <h2 className="text-2xl font-bold mb-4">DON'T WASTE FOOD</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-full overflow-hidden">
          <img src="/images/8th.jpg" alt="Food waste" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-full overflow-hidden">
          <img src="/images/10th.jpg" alt="Fresh produce" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-full overflow-hidden">
          <img src="/images/5th.jpg" alt="Fresh produce" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-full overflow-hidden">
          <img src="/images/9th.jpg" alt="Food donation" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <div className="w-1/2">
      <div className="bg-white p-6 rounded-lg h-full">
        <h2 className="text-2xl mb-4">Mission Of <span className="text-green-500">Meal Connect</span></h2>
        <p className="text-gray-700 mb-4">
          Welcome to Meal Connect, where we believe that no plate should go empty! Our mission is to bridge the gap between restaurants and food banks, ensuring that surplus food finds its way to those in need.
        </p>
        <p className="text-gray-700 mb-4">
          We're not just about filling bellies; we're about filling hearts with hope and joy.
          Every day, restaurants across the city donate their excess food, and we track every crumb! Our platform provides a seamless way for eateries to contribute to their communities while reducing waste.
        </p>
        <p className="text-gray-700 mb-4">
          Join us in this delicious revolution! Together, we can create a world where food waste is a thing of the past and every meal counts. Let's make hunger history, one donation at a time!
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Daily Donation</button>
      </div>
    </div>
  </div>
);

const ReviewsSection = () => (
  <div className="bg-green-50 p-8 min-h-[600px]">
    <div className="grid grid-cols-3 gap-8 mb-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="text-center">
          <div className="w-16 h-16 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-2">
            <img src="/api/placeholder/64/64" alt="User" className="rounded-full" />
          </div>
          <p className="text-gray-600">Name</p>
          <p className="text-gray-500">Review</p>
        </div>
      ))}
    </div>
    <div className="bg-blue-900 text-white p-8 rounded-lg grid grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="text-3xl font-bold mb-2">1000000+</h3>
        <p>Meals Delivered</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-2">500+</h3>
        <p>Partner Restaurants</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-2">200+</h3>
        <p>Food Banks</p>
      </div>
    </div>
  </div>
);

const HelpSection = () => (
  <div className="bg-white p-8 min-h-[600px]">
    <h2 className="text-2xl font-bold text-purple-800 mb-6">Need Help</h2>
    <div className="flex justify-between items-start">
      <div className="w-1/3">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block mb-2">Phone=</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email=</label>
            <input type="email" className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Address=</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="bg-pink-200 p-8 rounded-lg flex flex-col items-center">
          <MapPin className="w-12 h-12 mb-2" />
          <span className="text-lg">Map</span>
        </div>
      </div>
    </div>
    <div className="mt-8 bg-purple-800 text-white p-4 rounded-lg">
      <h3 className="text-center text-xl">Join Our Food Revolution</h3>
      <div className="flex justify-center gap-4 mt-4">
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
    </div>
  </div>
);

const FoodHeroes = () => (
  <div className="bg-gray-100 p-8 min-h-[600px]">
    
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
            className="bg-gray-200 text-white-800 px-8 py-3 rounded-full text-xl hover:bg-gray-300 transition-colors"
          >
            Make A Difference
          </Button>
        </div>
    </main>
  </div>
);

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  // Auto-switch pages every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <MissionSection />;
      case 1:
        return <ReviewsSection />;
      case 2:
        return <HelpSection />;
      case 3:
        return <FoodHeroes />;
      default:
        return <MissionSection />;
    }
  };

  return (
    <div className="relative">
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === currentPage ? 'bg-green-500' : 'bg-gray-300'}`}

            onClick={() => setCurrentPage(i)}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevPage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextPage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="transition-opacity duration-500">
        {renderPage()}
      </div>
    </div>
  );
};

const App = () => (
  <div className="min-h-screen bg-white">
    <Nav />
    <HomePage />
  </div>
);

export default App;