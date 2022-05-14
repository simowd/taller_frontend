import { VStack } from '@chakra-ui/react';
import React from 'react';
import { RiAccountCircleLine, RiHome6Line, RiSettingsLine } from 'react-icons/ri';
import IconLink from './IconLink';

const SideBarContent = () => {
  return (
    <VStack spacing={10} align='stretch' pt='2rem'>
      <IconLink icon={RiHome6Line} name={'home'}/>
      <IconLink icon={RiAccountCircleLine} name={'account'}/>
      <IconLink icon={RiSettingsLine} name={'settings'}/>
    </VStack>
  );
};

export default SideBarContent;