import { FormControl, FormLabel, Switch, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { stringTranslate } from '../../i18n';
import { updateSettings } from '../../reducers/settings_reducer';

const SettingSwitch = ({ setting, name }) => {
  const [checked, setChecked] = useState(!!setting);
  const dispatch = useDispatch();
  const { toggleColorMode } = useColorMode();

  const onChange = async () => {
    setChecked(!checked);
    await dispatch(updateSettings({ [name]: +!checked}));
    if (name === 'dark_light') {
      toggleColorMode();
    }
  };

  return (
    <FormControl display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
      <FormLabel htmlFor={name} mb={'0'}>
        {stringTranslate(`settings.${name}`)}
      </FormLabel>
      <Switch onChange={onChange} id={name} size={'lg'} value={checked} defaultChecked={checked}/>
    </FormControl>
  );
};

export default SettingSwitch;