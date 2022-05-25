import React from 'react';
import { Navigate } from 'react-router-dom';

const NoRequireAuth = ({ children }) => {
  const user = window.localStorage.getItem('user');

  if(user){
    return <Navigate to='/s' />;
  }
  
  return children;
};

export default NoRequireAuth;