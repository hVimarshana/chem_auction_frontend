import React, { useState } from 'react';
import { Modal, Box, Tab, Tabs, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Ensure this path is correct

const RegistrationForm = ({ toggleModal }) => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setFormData({ ...formData, password: '', confirmPassword: '' });
    setPasswordError(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    const role = tabIndex === 0 ? 'Buyer' : 'Seller';

    try {
      const response = await axios.post('https://localhost:44358/api/registration/register', {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        password: formData.password,
        role: role,
      });
      setSuccessMessage(response.data.message);
      setShowSuccess(true);
      setTimeout(() => {
        toggleModal(); // Close modal after success
        navigate('/'); 
      }, 3000);
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  return (
    <Modal open={true} onClose={toggleModal}>
      <Box className="modal-container">
        <span className="close-modal" onClick={toggleModal}>&times;</span>
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Buyer" />
          <Tab label="Seller" />
        </Tabs>
        <Box sx={{ padding: '20px', marginTop: '10px' }}>
          {showSuccess && <div className="success-message">{successMessage}</div>}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={tabIndex === 0 ? 'Buyer Name' : 'Seller Name'}
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label={tabIndex === 0 ? 'Buyer Email' : 'Seller Email'}
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Company"
              margin="normal"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              margin="normal"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {passwordError && <div className="error-message">Passwords do not match!</div>}
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: '20px' }}
              type="submit"
            >
              {tabIndex === 0 ? 'Register Buyer' : 'Register Seller'}
            </Button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default RegistrationForm;
