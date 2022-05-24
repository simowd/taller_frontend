import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import { getEmojiFlag } from 'countries-list';
import React from 'react';
import { useIntl } from 'react-intl';
import { stringTranslate, translate } from '../../i18n';
import countries from '../../utils/data/countries';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';

const CountrySelect = ({ field, form }) => {
  const intl = useIntl();
  const [playSound] = useAccesibleSound(focusActionble);

  return (
    <FormControl isInvalid={form.errors.country && form.touched.country}>
      <FormLabel htmlFor='country'> {translate('auth.country')} </FormLabel>
      <Select onFocus={() => playSound()} {...field} id={'country'} variant={'outline'}>
        <option selected hidden disabled value="">{stringTranslate('auth.select_country')} </option>
        {
          countries.map((country) => {
            return (
              <option value={country.alpha2} key={country.alpha2}> {getEmojiFlag(country.alpha2.toUpperCase())} {country[intl.locale]} </option>
            );
          })
        }
      </Select>
      <FormErrorMessage> {form.errors.country} </FormErrorMessage>
    </FormControl>
  );
};

export default CountrySelect;