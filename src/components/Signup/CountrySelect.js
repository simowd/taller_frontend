import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import { getEmojiFlag } from 'countries-list';
import React from 'react';
import { useIntl } from 'react-intl';
import { stringTranslate, translate } from '../../i18n';
import countries from '../../utils/data/countries';

const CountrySelect = ({field, form}) => {
  const intl = useIntl();
  return(
    <FormControl isRequired isInvalid={form.errors.country && form.touched.country}>
      <FormLabel htmlFor='countries'> { translate('auth.country')} </FormLabel>
      <Select {...field} id={'countries'} variant={'outline'} placeholder={stringTranslate('auth.select_country')} defaultValue='bo'>
        {
          countries.map((country) => {
            return (
              <option value={country.alpha2} key={country.alpha2}> {getEmojiFlag(country.alpha2.toUpperCase())} { country[intl.locale] } </option>
            );
          })
        }
      </Select>
      <FormErrorMessage> {form.errors.language} </FormErrorMessage>
    </FormControl>
  );
};

export default CountrySelect;