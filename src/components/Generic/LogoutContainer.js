import { useColorMode } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LogoutContainer = () => {
  const dispatch = useDispatch();
  const {toggleColorMode} = useColorMode();

  useEffect(() => {
    if( window.localStorage.getItem('chakra-ui-color-mode') === 'dark'){
      toggleColorMode();
    }
    dispatch({
      type: 'CLEAR_USER',
      data: null
    });

    
  }, []);
  
  return(<Navigate to='/'/>);
};

export default LogoutContainer;