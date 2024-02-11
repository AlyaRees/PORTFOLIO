import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="menu">
          <ul>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#" onClick={toggleSubMenu} className={isSubMenuOpen ? 'open' : ''}>Menu</a>
            <a href="#">Light/Dark</a>
            </ul>
            {isSubMenuOpen && (

            <ul className="submenu animated">
              <li><a href="#">Services</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Poems</a></li>
              <li><a href="#">Animation</a></li>
            </ul>
          )}

        
        </div>
      </header>
    </div>
  );
}

export default App;
