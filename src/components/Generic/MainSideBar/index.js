import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useKeypress from 'react-use-keypress';
import SideBarContainer from './SideBarContainer';

const MainSideBar = () => {

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