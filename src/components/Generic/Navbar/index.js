import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavContainer from './NavContainer';

const Navbar = () => {
  return (
    <Box bg={'#FAF7F7'}>
      <NavContainer />
      <Outlet />
    </Box>
  );
};

export { Navbar };