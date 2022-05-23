import { Flex, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate } from '../../i18n';
import SettingsForm from './SettingsForm';

const Settings = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'} width={'100%'} height={'100%'}>
      <Flex height={'80%'} background={useColorModeValue('white', '35343F')} width={'75%'} boxShadow='sm' borderRadius={'xl'} padding={'3rem'}>
        <VStack width={'100%'} height={'100%'}>
          <Flex justifyContent={'center'} width={'100%'}>
            <Heading as={'h1'} size={'xl'} color={useColorModeValue('black', 'white')}>{stringTranslate('settings.title')}</Heading>
          </Flex>
          <Flex justifyContent={'center'} height={'100%'} width={'100%'}>
            <SettingsForm />
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Settings;