import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/expenses">Expense Management</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/whatsnew">Pro Version</Link>
        </li>
        <li className="hello-user">
        <Link to="/">Hello, Petra</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;