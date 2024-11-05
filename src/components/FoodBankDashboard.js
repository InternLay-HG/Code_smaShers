
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodBankDashboard = () => {
  const [availableDonations, setAvailableDonations] = useState([]);
  const [donationHistory, setDonationHistory] = useState([]);

  useEffect(() => {
  
    axios.get('/api/foodbank/availableDonations')
      .then(response => setAvailableDonations(response.data))
      .catch(error => console.error('Error fetching donations:', error));

    axios.get('/api/foodbank/donationHistory')
      .then(response => setDonationHistory(response.data))
      .catch(error => console.error('Error fetching donation history:', error));
  }, []);

  const handleClaimDonation = (donationId) => {
   
    axios.post(`/api/foodbank/claimDonation/${donationId}`)
      .then(response => {
       
        setAvailableDonations(availableDonations.filter(donation => donation._id !== donationId));
        setDonationHistory([...donationHistory, response.data]);
      })
      .catch(error => console.error('Error claiming donation:', error));
  };

  return (
    <div>
      <h1>Food Bank Dashboard</h1>
      <h2>Available Donations</h2>
      <ul>
        {availableDonations.map(donation => (
          <li key={donation._id}>
            {donation.item} - {donation.quantity} units
            <button onClick={() => handleClaimDonation(donation._id)}>Claim</button>
          </li>
        ))}
      </ul>

      <h2>Donation History</h2>
      <ul>
        {donationHistory.map((donation, index) => (
          <li key={index}>
            {donation.item} - {donation.quantity} units (Received on: {new Date(donation.receivedDate).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodBankDashboard;
