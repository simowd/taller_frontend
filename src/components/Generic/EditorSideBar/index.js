import { Box, Grid, GridItem } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SideBarContainer from './SideBarContainer';
import { stringTranslate } from '../../../i18n';
import useKeypress from 'react-use-keypress';

const EditorSideBar = () => {
  const navigate = useNavigate();

  useKeypress(['H', 'S', 'C'], () => {
    if (event.shiftKey && event.ctrlKey){
      if (event.key === 'H') {
        navigate('/s/home');
      }
      if (event.key === 'S') {
        navigate('/s/settings');
      }
      if (event.key === 'C') {
        navigate('/s/account');
      }
    }
  });

  return (
    <Grid h='100vh' w='100%' templateColumns='72px 1fr'>
      <SkipNavLink> { stringTranslate('accesibility.skip_files') } </SkipNavLink>
      <SkipNavLink id={'skip-editor'}> { stringTranslate('accesibility.skip_editor') } </SkipNavLink>
      <GridItem>
        <SideBarContainer />
      </GridItem>
      <GridItem>
        <Box>
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default EditorSideBar;