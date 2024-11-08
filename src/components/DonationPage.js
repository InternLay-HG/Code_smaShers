import React from 'react';

const DonationPage = () => {
  const handleDonation = () => {
    
    console.log('Donation initiated');
  };

  return (
    <div>
      <h1>Food Heroes</h1>
      <div>
        <img src="/volunteer.jpg" alt="Volunteer" />
        <img src="/food-donation.jpg" alt="Food Donation" />
        <img src="/food-distribution.jpg" alt="Food Distribution" />
      </div>
      <h2>Donate Your Surplus</h2>
      <p>Food Today</p>
      <p>Help Us Feed The Hungry And Reduce Waste</p>
      <button onClick={handleDonation}>Make A Difference</button>
    </div>
  );
};

export default DonationPage;