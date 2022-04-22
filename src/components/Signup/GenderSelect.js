/* eslint-disable no-undef */
import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { useIntl } from 'react-intl';
import { stringTranslate, translate } from '../../i18n';
import gender from '../../utils/data/gender';

const GenderSelect = ({ field, form }) => {
  const intl = useIntl();
  return (
    <FormControl isRequired isInvalid={form.errors.gender && form.touched.gender}>
      <FormLabel htmlFor='gender'> {translate('auth.gender')} </FormLabel>
      <Select id={'gender'} {...field} variant={'outline'} placeholder={stringTranslate('auth.select_gender')}>
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