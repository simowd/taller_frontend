/* eslint-disable no-dupe-keys */

import { Box, Grid, GridItem, Icon, VStack } from '@chakra-ui/react';
import { SiPython } from 'react-icons/si';

import { RiLogoutBoxLine } from 'react-icons/ri';
import React from 'react';
import SideBarContent from './SideBarContent';
import IconLink from './IconLink';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import { stringTranslate } from '../../../i18n';

const SideBarContainer = () => {
  //<Image src='/logo192.png' aria-hidden='true' boxSize='50px' objectFit={'cover'}/>
  return (
    <Grid borderRightRadius={'md'} w='100%' h='100vh' templateRows='4.5rem 1fr 4.5rem' background='#282C34' justifyContent='left' paddingLeft={'2rem'} sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }} className='side_bar'>
      <GridItem display='flex' alignItems={'center'}>
        <SkipNavLink> {stringTranslate('accesibility.skip_content')} </SkipNavLink>
        <Box pt={'1rem'} display={'flex'} alignItems={'flex-start'} aria-hidden={'true'} >
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