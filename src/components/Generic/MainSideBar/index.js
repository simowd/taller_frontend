import { Box, Grid, GridItem } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { stringTranslate } from '../../../i18n';
import SideBarContainer from './SideBarContainer';

const MainSideBar = () => {

  return (<>
    <Grid h='100vh' w='100%' templateColumns='15rem 1fr'>
      <SkipNavLink> {stringTranslate('accesibility.skip_content')} </SkipNavLink>
      <GridItem>
        <SideBarContainer />
      </GridItem>
      <GridItem>
        <Box>
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  </>);
};

export default MainSideBar;