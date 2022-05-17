import { Flex, HStack, StackDivider } from '@chakra-ui/react';
import React from 'react';

const SettingsForm = () => {
  return (
    <HStack w={'100%'} h={'100%'} divider={<StackDivider borderColor='gray.200' />} spacing={10} justifyContent={'center'}>
      <Flex h='80%' w='40%' bg='yellow.200'>
        1
      </Flex>
      <Flex h='80%' w='40%' bg='tomato'>
        2
      </Flex>
    </HStack>
  );
};

export default SettingsForm;