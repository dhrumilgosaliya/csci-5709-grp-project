import { Route, Routes } from "react-router-dom";
import AddExpense from "./Components/AddExpense";
import './App.css';
//import Home from './home'; Dhrumil home
import Chat from './chat/chat';
import Home from './Components/Home';
import AddObjective from './Components/AddObjective';
import BasicPie from './Components/budget-planner/budget-planner';
import Navbar from './Components/navbar/navbar';
import WhatsNew from './Components/proversion/WhatsNew';
// import Navbar from './components/Navbar'; Shreya's navbar
import SubscriptionPlans from './Components/proversion/SubscriptionPlans';
import PaymentForm from './Components/proversion/PaymentForm';
import Contactus from './Components/contactus/Contactus';
import Faq from './Components/faq/Faq';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/addexpense" element={<AddExpense/>}/>
        {/*  home from Dhrumil <Route path="/home" exact Component={Home} /> */}
        <Route path="/chat" Component={Chat} />
        <Route path="/" element={<Home />} />
        <Route path="/add-objective" element={<AddObjective />} />
        <Route path="/budget-planner" element={<BasicPie />} />
        <Route path="/whatsnew" element={<WhatsNew />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
        <Route path="/checkout" element={<PaymentForm />} />
      </Routes>
    </div>
  );
}

export default App;