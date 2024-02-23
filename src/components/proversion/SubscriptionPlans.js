import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const navigate = useNavigate();

  const handlePayNowClick = () => {
    navigate('/checkout');
  };

  return (
    <div className="subscription-plans">
      <h1>Choose a Collaborative Plan</h1>
      <div className="plans-container">
        <div className="plan-card">
          <h2>Monthly</h2>
          <p>$9.99 per month</p>
          <button className="pay-now-button" onClick={handlePayNowClick}>
            Pay Now
          </button>
        </div>
        <div className="plan-card">
          <h2>Yearly</h2>
          <p>$99.99 per year</p>
          <button className="pay-now-button" onClick={handlePayNowClick}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
