import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { stringTranslate } from '../../i18n';
import { updateSettings } from '../../reducers/settings_reducer';
import font_family from '../../utils/data/font_family';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';

const SettingFontType = ({ setting, name }) => {
  const dispatch = useDispatch();
  const [playSound] = useAccesibleSound(focusActionble);

  const onChange = async (event) => {
    await dispatch(updateSettings({ [name]: event.target.value }));
  };

  const optionBuilder = () => {
    const data = font_family.map((font) => {
      return (
        <option key={font} value={font}>{font}</option>
      );
    });
    return data;
  };

  return (
    <FormControl display={'flex'} alignItems={'center'}>
      <FormLabel htmlFor={name} mb={'0'}>
        {stringTranslate(`settings.${name}`)}
      </FormLabel>
      <Select onFocus={() => playSound()} onChange={onChange} id={name} defaultValue={setting} >
        {optionBuilder()}
      </Select>
    </FormControl>
  );
};

export default SettingFontType;