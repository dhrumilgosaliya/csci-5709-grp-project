import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WhatsNew from './components/proversion/WhatsNew';
import Navbar from './components/Navbar';
import SubscriptionPlans from './components/proversion/SubscriptionPlans';
import PaymentForm from './components/proversion/PaymentForm';

const Home = () => <div>Home Page</div>;

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsnew" element={<WhatsNew />} />
        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
        <Route path="/checkout" element={<PaymentForm />} />
      </Routes>
      </div>
    </Router>
      
  );
};

export default App;
