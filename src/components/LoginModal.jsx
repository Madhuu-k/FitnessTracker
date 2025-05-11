import React, { useState } from 'react';
import './SignUpModal.css'; // Reuse the same CSS for modal styling
import { callApi } from '../apis/api';

const LoginModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ email: '', password: '' });
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
      'http://localhost:9090/users/login',
      form,
      (res, data, err) => {
        setLoading(false);
        if (err) {
          setMessage('Network error.');
        } else if (res && res.ok) {
          setMessage(data || 'Login successful!');
        } else {
          setMessage((data && data.message) || data || 'Login failed.');
        }
      }
    );
  };

  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</button>
        </form>
        {message && <div className="signup-message">{message}</div>}
      </div>
    </div>
  );
};

export default LoginModal; 