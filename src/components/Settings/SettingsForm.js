import { Flex, HStack, StackDivider, VStack } from '@chakra-ui/react';
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import SettingFontSize from './SettingFontSize';
import SettingFontType from './SettingFontType';
import SettingSwitch from './SettingSwitch';

const SettingsForm = () => {
  const settings = useSelector(state => state.settings);

  const leftBuilder = () => {
    if (settings) {
      const buttonArr = new Array();
      _.forIn(settings, (value, key) => {
        if (key !== 'id_setting' && key !== 'font_type' && key !== 'font_size') {
          buttonArr.push(
            <SettingSwitch name={key} setting={value} key={key} />
          );
        }
      });
      return buttonArr;
    }
  };

  const rightBuilder = () => {
    const buttonArr = new Array();
    _.forIn(settings, (value, key) => {
      if (key === 'font_size') {
        buttonArr.push(
          <SettingFontSize name={key} setting={value} key={key}/>
        );
      }
      if(key === 'font_type'){
        buttonArr.push(
          <SettingFontType name={key} setting={value} key={key}/>
        );
      }
    });

    return buttonArr;
  };

  return (
    <HStack w={'100%'} h={'100%'} divider={<StackDivider borderColor='gray.200' />} spacing={10} justifyContent={'center'}>
      <Flex h='80%' w='40%' justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
        <VStack height={'50%'} justifyContent={'space-evenly'}>
          {leftBuilder()}
        </VStack>
      </Flex>
      <Flex h='80%' w='40%' justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
        <VStack height={'50%'} justifyContent={'space-evenly'}>
          {rightBuilder()}
        </VStack>
      </Flex>
    </HStack>
  );
};

export default SettingsForm;