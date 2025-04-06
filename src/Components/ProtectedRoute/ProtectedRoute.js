import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if token exists in localStorage (this indicates the user is authenticated)
  const isAuthenticated = !!localStorage.getItem('authToken');

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the children (protected components)
  return children;
};

export default ProtectedRoute;
