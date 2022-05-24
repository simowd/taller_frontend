/* eslint-disable no-undef */
import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { useIntl } from 'react-intl';
import { stringTranslate, translate } from '../../i18n';
import gender from '../../utils/data/gender';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';

const GenderSelect = ({ field, form }) => {
  const [playSound] = useAccesibleSound(focusActionble);

  const intl = useIntl();
  return (
    <FormControl isInvalid={form.errors.gender && form.touched.gender}>
      <FormLabel htmlFor='gender'> {translate('auth.gender')} </FormLabel>
      <Select onFocus={() => playSound()} id={'gender'} {...field} variant={'outline'}>
        <option selected hidden disabled value="">{stringTranslate('auth.select_gender')}</option>
        {gender.map((value) => {
          return (
            <option key={value.id} value={value.id}> {value[intl.locale]} </option>
          );
        })}
      </Select>
      <FormErrorMessage> {form.errors.gender} </FormErrorMessage>
    </FormControl>
  );
};

export default GenderSelect;