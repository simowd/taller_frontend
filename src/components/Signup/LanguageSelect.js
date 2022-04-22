import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate, translate } from '../../i18n';
import languages from '../../utils/data/languages';

const LanguageSelect = ({field, form}) => {
  return(
    <FormControl isRequired isInvalid={form.errors.language && form.touched.language}>
      <FormLabel htmlFor='languages'> { translate('auth.language')} </FormLabel>
      <Select {...field} id={'languages'} variant={'outline'} placeholder={stringTranslate('auth.select_country')} defaultValue='bo'>
        {
          languages.map((language) => {
            return (
              <option value={language.code} key={language.code}> { language.nativeName } </option>
            );
          })
        }
      </Select>
      <FormErrorMessage> {form.errors.language} </FormErrorMessage>
    </FormControl>
  );
};

export default LanguageSelect;