import { Flex } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import React from 'react';
import HelpContent from '../components/HelpContent/HelpContent';

const Help = () => {
  return (
    <Flex justifyContent={'center'} align={'center'}>
      <SkipNavContent />
      <HelpContent />
    </Flex>
  );
};

export default Help;