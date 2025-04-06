import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import UserManagement from '../../Components/UserManagement'; // Import the User Management component
import './Dashboard.css'; // Custom styles

const tabs = [
  { name: 'Dashboard', key: 'dashboard', label: 'Admin Dashboard' },
  { name: 'User Management', key: 'userManagement', label: 'User Management' },
  { name: 'Item Management', key: 'ItemManagement', label: 'Item Management' },
  { name: 'System Activities', key: 'systemActivities', label: 'System Activities' }
];

const Dashboard = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null); // For avatar menu
  const [selectedTab, setSelectedTab] = useState('dashboard'); // Default to 'dashboard'

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (onLogout) onLogout(); // Call the onLogout function passed as a prop
    // Logic to redirect to home or perform other actions on logout
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'userManagement':
        return <UserManagement />;
      case 'ItemManagement':
        return <Typography variant="h4" className="content-box">Item Management Page</Typography>;
      case 'systemActivities':
        return <Typography variant="h4" className="content-box">System Activities Page</Typography>;
      default:
        return <Typography variant="h4" className="content-box">Welcome to the Admin Dashboard</Typography>;
    }
  };

  return (
    <Box className="dashboard-container">
      <Box className="sidebar">
        <Typography variant="h6" className="sidebar-title">
          Admin Dashboard
        </Typography>
        {tabs.map((tab) => (
          <Typography
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`sidebar-link ${selectedTab === tab.key ? 'active' : ''}`}
          >
            {tab.name}
          </Typography>
        ))}
      </Box>

      <Box className="content-area">
        <AppBar position="sticky" className="appbar">
          <Toolbar className="appbar-toolbar">
            <Avatar onClick={handleAvatarClick} className="appbar-avatar">A</Avatar>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Box className="content-box">
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
