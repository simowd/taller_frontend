import { Flex, Spacer, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import AuthLinks from './AuthLinks';

const NavContainer = () => {
  return (
    <Flex bg={useColorModeValue('#FAF7F7', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.300', 'gray.900')}
      align={'center'}>
      <Spacer />
      <AuthLinks />
    </Flex>
  );
};

export default NavContainer;