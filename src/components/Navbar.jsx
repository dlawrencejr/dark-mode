import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const clickHandler = () =>{
    console.log('clicked');
  };

  return (
    <Router>
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
    <div className='coin-dropdown'>
      <label htmlFor="coins">Select Coin:</label>
      <select id='coins'>
        <option value="placeholder">Select</option>
        <option value="Numeraire" onClick={clickHandler}>Numeraire</option>
      </select>
    </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
    </Router>
  );
};


export default Navbar;
