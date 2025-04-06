import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './LoginModal.css';

const LoginModal = ({ toggleModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:44358/api/auth/login', {
        username: username,
        password: password
      });

      const data = response.data;

      if (data.role === 'admin') {
        // Navigate to the dashboard on successful login
        navigate('/dashboard');
      } else {
        alert('Login successful but no admin role');
      }

      // Close the modal after successful login
      toggleModal();
    } catch (error) {
      setError("Invalid username or password");
      console.error('Login error:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-modal" onClick={toggleModal}>
          &times;
        </span>
        <h2>Login to chemAuction</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">Login</button>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
