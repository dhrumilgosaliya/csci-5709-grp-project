import { Route, Routes } from "react-router-dom";
import AddExpense from "./Components/AddExpense";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddExpense/>}/>
      </Routes>
    </div>
  );
}

export default App;