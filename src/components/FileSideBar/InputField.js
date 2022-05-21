/* eslint-disable react/no-children-prop */
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import React from 'react';
import { translate } from '../../i18n';

const InputField = ({ form, field, name, required = false }) => {
  return (
    <FormControl isRequired={required} isInvalid={form.errors[name] && form.touched[name]}>
      <FormLabel htmlFor={name}>
        {translate(`editor.${name}`)}
      </FormLabel>
      <InputGroup>
        <Input {...field} id={name} autoComplete='off' />
        <InputRightAddon children='.py' />
      </InputGroup>
      <FormErrorMessage> {form.errors[name]} </FormErrorMessage>
    </FormControl>
  );
};

export default InputField;