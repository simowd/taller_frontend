import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { translate } from '../../i18n';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';

const InputField = ({ form, field, name, required = false, isDisabled=false }) => {
  const [playSound] = useAccesibleSound(focusActionble);

  return (
    <FormControl isDisabled={isDisabled} isRequired={required} isInvalid={form.errors[name] && form.touched[name]}>
      <FormLabel htmlFor={name}>
        {translate(`auth.${name}`)}
      </FormLabel>
      <Input onFocus={() => playSound()} {...field} id={name} autoComplete='off' />
      <FormErrorMessage> {form.errors[name]} </FormErrorMessage>
    </FormControl>
  );
};

export default InputField;