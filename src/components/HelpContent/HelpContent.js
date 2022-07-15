import { Flex, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import HelpEditorContent from './HelpEditorContent';
import HelpHomeContent from './HelpHomeContent';


const HelpContent = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'} width={'100%'} height={'100%'} py={'5%'}>
      <Flex height={'80%'} background={useColorModeValue('white', '35343F')} width={'75%'} boxShadow='sm' borderRadius={'xl'} align={'flex-start'} padding={'3rem'}>
        <VStack align={'flex-start'}>
          <HelpHomeContent />
          <HelpEditorContent />
        </VStack>
      </Flex>
    </Flex>
  );
};

export default HelpContent;