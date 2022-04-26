import { Box, Grid, GridItem, Icon } from '@chakra-ui/react';
import { SiPython } from 'react-icons/si';

import { RiLogoutBoxLine } from 'react-icons/ri';
import React from 'react';
import SideBarContent from './SideBarContent';
import IconLink from './IconLink';

const SideBarContainer = () => {
  //<Image src='/logo192.png' aria-hidden='true' boxSize='50px' objectFit={'cover'}/>
  return (
    <Grid w='100%' h='100vh' templateRows='4.5rem 1fr 4.5rem' background='#282C34' justifyContent='center'>
      <GridItem display='flex' justifyContent={'center'} alignItems={'center'}>
        <Box pt={'1rem'}>
          <Icon as={SiPython} w={10} h={10} color={'white'} />
        </Box>
      </GridItem>
      <GridItem display='flex' justifyContent={'center'}>
        <SideBarContent />
      </GridItem>
      <GridItem display='flex' justifyContent={'center'}>
        <Box>
          <IconLink icon={RiLogoutBoxLine} name={'logout'} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default SideBarContainer;