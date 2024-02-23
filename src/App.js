import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Home from './home';
import Chat from './chat/chat';

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/chat" Component={Chat} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
