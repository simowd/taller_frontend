import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const user = window.localStorage.getItem('user');

  if(!user){
    return <Navigate to='/' />;
  }
  
  return children;
};

export default RequireAuth;