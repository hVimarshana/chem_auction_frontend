import React, { createContext, useState, useContext } from 'react';

// Create context for authentication
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login function
  const login = () => setIsAuthenticated(true);

  // Logout function
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using authentication context
export const useAuth = () => useContext(AuthContext);