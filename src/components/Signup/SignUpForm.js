import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react';
import { stringTranslate, translate } from '../../i18n/message_handle';
import * as Yup from 'yup';
import { createUser } from '../../reducers/user_reducer';
import { useDispatch } from 'react-redux';
import { useToastHook } from '../../hooks/Toast';
import { useNavigate } from 'react-router-dom';
import CountrySelect from './CountrySelect';
import LanguageSelect from './LanguageSelect';
import GenderSelect from './GenderSelect';
import InputField from '../Generic/InputField';

const SignUpForm = () => {

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    const signUpValues = values;
    try {
      await dispatch(createUser(signUpValues));

      //success message
      const success = {
        type: 'success',
        endpoint: 'signup'
      };
      newToast(success);
      navigate('/signin');
    }
    catch (error) {
      //Setting up error data
      const error_data = {
        type: 'error',
        status: error.response.status,
        endpoint: 'signup'
      };
      newToast(error_data);

    }
    //Reset Form
    actions.resetForm();
    actions.setSubmitting(false);
  };

  //Setting up yup schema
  const yup_sign_up = Yup.object({
    name: Yup.string().max(50, stringTranslate('forms.max_length', { length: 50 })),
    last_name: Yup.string().max(50, stringTranslate('forms.max_length', { length: 50 })),
    username: Yup.string().max(50, stringTranslate('forms.max_length', { length: 50 })).required(stringTranslate('forms.required')),
    email: Yup.string().email(stringTranslate('forms.email')).max(100, stringTranslate('forms.max_length', { length: 100 })).required(stringTranslate('forms.required')),
    password: Yup.string().max(255, stringTranslate('forms.max_length', { length: 255 })).required(stringTranslate('forms.required')),
    gender: Yup.mixed().required(stringTranslate('forms.required')),
    country: Yup.mixed().required(stringTranslate('forms.required')),
    language: Yup.mixed().required(stringTranslate('forms.required')),
    repeat_password: Yup.string().oneOf([Yup.ref('password'), null], stringTranslate('forms.repeat_password'))
  });

  return (
    <Flex bg={'white'} px={'5rem'} pb={'8rem'} pt={'5rem'} rounded={'lg'} m={'5rem'} flexDirection={'column'}>
      <Flex justifyContent={'center'}>
        <Heading >
          {stringTranslate('auth.signup').toUpperCase()}
        </Heading>
      </Flex>
      <Flex px={'7rem'} pt={'4rem'} justify={'center'}>
        <Formik initialValues={{
          name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
          repeat_password: '',
          country: 'bo',
          language: 'es'
        }}
        validationSchema={yup_sign_up}
        onSubmit={onSubmit}
        >
          {(props) => {
            return (
              <Form>
                <Field name='username'>
                  {({ field, form }) => (
                    <InputField field={field} form={form} name={'username'} required={true} />
                  )}
                </Field>
                <Box py={'0.2rem'}></Box>
                <Field name='name'>
                  {({ field, form }) => (
                    <InputField field={field} form={form} name={'name'} />
                  )}
                </Field>
                <Box py={'0.2rem'}></Box>
                <Field name='last_name'>
                  {({ field, form }) => (
                    <InputField field={field} form={form} name={'last_name'} />
                  )}
                </Field>
                <Box py={'0.2rem'}></Box>
                <Field name='email'>
                  {({ field, form }) => (
                    <InputField field={field} form={form} name={'email'} required={true} />
                  )}
                </Field>
                <Box py={'0.2rem'}></Box>
                <Field name='country' >
                  {({ field, form }) => (
                    <CountrySelect field={field} form={form} />
                  )}
                </Field>
                <Box py={'0.2rem'}></Box>
                <Field name='language'>
                  {({ field, form }) => (
                    <LanguageSelect field={field} form={form} />
                  )}
                </Field>
                <Box py={'0.2rem'}></Box>
                <Field name='gender'>
                  {({ field, form }) => (
                    <GenderSelect field={field} form={form} />
                  )}
                </Field>
                <Box py={'0.2rem'}></Box>
                <Field name='password'>
                  {({ field, form }) => (
                    <FormControl isRequired isInvalid={form.errors.password && form.touched.password}>
                      <FormLabel htmlFor='password'>
                        {translate('auth.password')}
                      </FormLabel>
                      <Input {...field} id='password' autoComplete='off' type={'password'} />
                      <FormErrorMessage> {form.errors.password} </FormErrorMessage>
                    </FormControl>
                  )
                  }
                </Field>
                <Box py={'0.2rem'}></Box>
                <Field name='repeat_password'>
                  {({ field, form }) => (
                    <FormControl isRequired isInvalid={form.errors.repeat_password && form.touched.repeat_password}>
                      <FormLabel htmlFor='repeat_password'>
                        {translate('auth.repeat_password')}
                      </FormLabel>
                      <Input {...field} id='repeat_password' autoComplete='off' type={'password'} />
                      <FormErrorMessage> {form.errors.repeat_password} </FormErrorMessage>
                    </FormControl>
                  )
                  }
                </Field>
                <Flex justifyContent={'center'} pt={'2rem'}>
                  <Button colorScheme={'gray'} isLoading={props.isSubmitting} loadingText={stringTranslate('auth.loading')} type='submit' size={'md'}>
                    {translate('auth.create_account')}
                  </Button>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default SignUpForm;