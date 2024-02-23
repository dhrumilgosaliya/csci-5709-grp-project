import { Route, Routes } from "react-router-dom";
import AddExpense from "./Components/AddExpense";
import './App.css';
//import Home from './home'; Dhrumil home
import Chat from './chat/chat';
import Home from './Components/Home';
import AddObjective from './Components/AddObjective';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/addexpense" element={<AddExpense/>}/>
        {/*  home from Dhrumil <Route path="/home" exact Component={Home} /> */}
        <Route path="/chat" Component={Chat} />
        <Route path="/" element={<Home />} />
        <Route path="/add-objective" element={<AddObjective />} />
        
      </Routes>
    </div>
  );
}

export default App;