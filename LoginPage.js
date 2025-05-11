import React from 'react';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form>
          <input type="text" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <p className="login-footer">Don't have an account? <a href="#">Register</a></p>
      </div>
    </div>
  );
}
