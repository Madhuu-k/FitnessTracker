import React, { useState } from 'react';
import './SignUpModal.css';
import { callApi } from '../apis/api';

// Make sure your backend CORS allows both http://localhost:5173 and http://localhost:5174
const SIGNUP_API_URL = 'http://localhost:9090/users/signup';

const SignUpModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    callApi(
      'POST',
      SIGNUP_API_URL,
      form,
      (res, data, err) => {
        setLoading(false);
        if (err) {
          setMessage('Network error.');
        } else if (res && res.ok) {
          setMessage('Sign up successful!');
          setForm({ name: '', email: '', password: '' });
        } else {
          setMessage((data && data.message) || 'Sign up failed.');
        }
      }
    );
  };

  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
        </form>
        {message && <div className="signup-message">{message}</div>}
      </div>
    </div>
  );
};

export default SignUpModal;