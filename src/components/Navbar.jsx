import React, { useState } from 'react';
import './Navbar.css';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">RODYN</div>
        <ul className="navbar-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Credits</li>
        </ul>
        <div className="navbar-actions">
          <button className="signup-btn" onClick={() => setShowSignUp(true)}>Sign up</button>
          <button className="login-btn" onClick={() => setShowLogin(true)}>Log in</button>
        </div>
      </nav>
      <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar; 