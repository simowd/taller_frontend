import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate, translate } from '../../i18n';
import languages from '../../utils/data/languages';

const LanguageSelect = ({field, form}) => {
  return(
    <FormControl isInvalid={form.errors.language && form.touched.language}>
      <FormLabel htmlFor='language'> { translate('auth.language')} </FormLabel>
      <Select {...field} id={'language'} variant={'outline'} placeholder={stringTranslate('auth.select_language')}>
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