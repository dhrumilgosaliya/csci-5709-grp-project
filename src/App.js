import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddObjective from './components/AddObjective';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-objective" element={<AddObjective />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
