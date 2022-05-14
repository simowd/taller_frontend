import { Box, Grid, GridItem, Icon, VStack } from '@chakra-ui/react';
import { SiPython } from 'react-icons/si';

import { RiLogoutBoxLine } from 'react-icons/ri';
import React from 'react';
import SideBarContent from './SideBarContent';
import IconLink from './IconLink';

const SideBarContainer = () => {
  //<Image src='/logo192.png' aria-hidden='true' boxSize='50px' objectFit={'cover'}/>
  return (
    <Grid borderRightRadius={'md'} w='100%' h='100vh' templateRows='4.5rem 1fr 4.5rem' background='#282C34' justifyContent='left' paddingLeft={'2rem'}>
      <GridItem display='flex' alignItems={'center'}>
        <Box pt={'1rem'}>
          <Icon as={SiPython} w={10} h={10} color={'white'} />
        </Box>
      </GridItem>
      <GridItem display='flex' justifyContent={'center'}>
        <SideBarContent />
      </GridItem>
      <GridItem display='flex' pb='0.5rem'>
        <VStack spacing={10} align='stretch'>
          <IconLink icon={RiLogoutBoxLine} name={'logout'} />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default SideBarContainer;