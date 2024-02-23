import { Route, Routes } from "react-router-dom";
import AddExpense from "./Components/AddExpense";
import './App.css';
import Home from './home';
import Chat from './chat/chat';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddExpense/>}/>
        <Route path="/home" exact Component={Home} />
        <Route path="/chat" Component={Chat} />
      </Routes>
    </div>
  );
}

export default App;