import { Link, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const NavLink = ({ children }) => {
  return (
    <Link as={RouterLink} px={4} py={2} rounded={'md'} to='/' _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}>
      {children}
    </Link>
  );
};

export default NavLink;