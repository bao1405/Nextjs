import React from 'react';
import './components/navigation.scss';

const App = () => {
  return (
    <div className="navigation">
      <a href="/" className="logo">Logo</a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/updates">Updates</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default App;