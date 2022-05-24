import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate, translate } from '../../i18n';
import languages from '../../utils/data/languages';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';

const LanguageSelect = ({ field, form }) => {
  const [playSound] = useAccesibleSound(focusActionble);

  return (
    <FormControl isInvalid={form.errors.language && form.touched.language}>
      <FormLabel htmlFor='language'> {translate('auth.language')} </FormLabel>
      <Select onFocus={() => playSound()} {...field} id={'language'} variant={'outline'}>
        <option selected hidden disabled value="">{stringTranslate('auth.select_language')}</option>
        {
          languages.map((language) => {
            return (
              <option value={language.code} key={language.code}> {language.nativeName} </option>
            );
          })
        }
      </Select>
      <FormErrorMessage> {form.errors.language} </FormErrorMessage>
    </FormControl>
  );
};

export default LanguageSelect;