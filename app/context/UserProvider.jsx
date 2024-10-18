import React, { useState } from 'react';
import { UserContext } from './UserContext'; // Import the context created in the previous step

export const UserProvider = ({ children }) => {
  // State to manage user information
  const [user, setUser] = useState({
    name: 'Pravin Nandankar',
    email: 'pravinnandankar03@gmail.com',
    isLoggedIn: true
  });

  // Login function to update the user state
  const login = (userData) => {
    setUser({
      ...userData,
      isLoggedIn: true
    });
  };

  // Logout function to reset the user state
  const logout = () => {
    setUser({
      name: '',
      email: '',
      isLoggedIn: false
    });
  };

  // Pass the user data and functions to the value prop
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
