import { Grid, GridItem } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { stringTranslate } from '../../../i18n';
import NavContainer from './NavContainer';

const Navbar = () => {
  return (
    <Grid bg={'#FAF7F7'} h={'100vh'} templateRows={'5rem 1fr'}>
      <SkipNavLink> {stringTranslate('accesibility.skip_editor')} </SkipNavLink>
      <GridItem>
        <NavContainer />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Navbar;