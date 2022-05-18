import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate } from '../../i18n';

const SettingSwitch = ({ setting, name }) => {
  return (
    <FormControl display={'flex'} alignItems={'center'}>
      <FormLabel htmlFor={name} mb={'0'}>
        {stringTranslate(`setting.${name}`)}
      </FormLabel>
      <Switch id={setting} size={'lg'} defaultChecked={setting}/>
    </FormControl>
  );
};

export default SettingSwitch;