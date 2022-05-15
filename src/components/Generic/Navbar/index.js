import { Box } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { stringTranslate } from '../../../i18n';
import NavContainer from './NavContainer';

const Navbar = () => {
  return (
    <Box bg={'#FAF7F7'}>
      <SkipNavLink> { stringTranslate('accesibility.skip_content') } </SkipNavLink>
      <NavContainer />
      <Outlet />
    </Box>
  );
};

export default Navbar ;