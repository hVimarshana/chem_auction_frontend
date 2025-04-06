import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Modal, Typography, InputAdornment } from '@mui/material';
import { Delete, Edit, Search } from '@mui/icons-material';
import axios from 'axios';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editUser, setEditUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://localhost:44358/api/user'); 
      setUsers(response.data); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (user) => {
    setEditUser(user);
    setFormData({ name: user.name, email: user.email, company: user.company });
    setModalOpen(true);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://localhost:44358/api/user/${userId}`);
      fetchUsers(); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editUser) {
      try {
        await axios.put(`https://localhost:44358/api/user/${editUser.id}`, formData);
        fetchUsers();
        handleCloseModal();
      } catch (error) {
        console.error('Error updating user:', error);
      }
    } else {
      try {
        await axios.post('https://localhost:44358/api/user', formData);
        fetchUsers();
        handleCloseModal();
      } catch (error) {
        console.error('Error adding user:', error);
      }
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditUser(null);
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <Box>
      <TextField
        placeholder="Search by Username"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search style={{ color: '#666' }} />
            </InputAdornment>
          ),
          classes: { root: 'search-bar' }
        }}
        sx={{ marginBottom: '20px' }}
      />

      <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
        Add User
      </Button>

      <Table sx={{ marginTop: '20px' }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map(user => (
            <TableRow key={user.id} hover>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.company}</TableCell>
              <TableCell>
                <IconButton 
                  onClick={() => handleEdit(user)} 
                  sx={{ color: '#1976d2' }}>
                  <Edit />
                </IconButton>
                <IconButton 
                  onClick={() => handleDelete(user.id)} 
                  sx={{ color: '#d32f2f' }}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box className="modal-container">
          <Typography variant="h6">{editUser ? 'Edit User' : 'Add User'}</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Company"
              margin="normal"
              name="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                {editUser ? 'Update User' : 'Add User'}
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserManagement;
