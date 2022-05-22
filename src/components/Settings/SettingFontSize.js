import { FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { stringTranslate } from '../../i18n';
import { updateSettings } from '../../reducers/settings_reducer';

const SettingFontSize = ({ setting, name }) => {
  const dispatch = useDispatch();

  const onChange = async (event) => {
    await dispatch(updateSettings({ [name]: event}));
  };

  return (
    <FormControl display={'flex'} alignItems={'center'}>
      <FormLabel htmlFor={name} mb={'0'}>
        {stringTranslate(`settings.${name}`)}
      </FormLabel>
      <NumberInput onChange={onChange} id={setting} defaultValue={setting} min={8} max={32}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export default SettingFontSize;