import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LogoutContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CLEAR_USER',
      data: null
    });
  }, []);
  
  return(<Navigate to='/'/>);
};

export default LogoutContainer;