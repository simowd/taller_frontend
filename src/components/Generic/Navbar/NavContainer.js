import { Flex, Icon, Spacer, Stack, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { SiPython } from 'react-icons/si';
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
      <Stack spacing='1rem' direction={'row'} justify={'flex-end'} flex={{ base: 2, md: 0 }}>
        <Icon as={SiPython} w={10} h={10} color={'gray.800'} />
        <Heading color={'gray.800'} size={'lg'}  alignSelf={'center'}> Py.Dae </Heading>
      </Stack>
      <Spacer />
      <AuthLinks />
    </Flex>
  );
};

export default NavContainer;