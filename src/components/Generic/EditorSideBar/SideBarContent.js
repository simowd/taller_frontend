import { VStack } from '@chakra-ui/react';
import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { RiHome6Line, RiFileList2Line, RiSettingsLine } from 'react-icons/ri';
import IconLink from './IconLink';

const SideBarContent = () => {
  return (
    <VStack spacing={10} align='stretch' pt='2rem'>
      <IconLink icon={RiHome6Line} name={'home'}/>
      <IconLink icon={RiFileList2Line} name={'files'}/>
      <IconLink icon={VscAccount} name={'account'}/>
      <IconLink icon={RiSettingsLine} name={'settings'}/>
    </VStack>
  );
};

export default SideBarContent;