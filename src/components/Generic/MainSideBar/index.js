import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBarContainer from './SideBarContainer';

const MainSideBar = () => {

  return (<>
    <Grid h='100vh' w='100%' templateColumns='15rem 1fr' >
      <GridItem>
        <SideBarContainer />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  </>);
};

export default MainSideBar;