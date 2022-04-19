import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react';
import { yup_login } from '../../utils/yup_schemas';
import { stringTranslate, translate } from '../../i18n/message_handle';

const LoginForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Flex bg={'white'} px={'5rem'} py={'5rem'} rounded={'lg'} m={'5rem'} flexDirection={'column'}>
      <Flex justifyContent={'center'}>
        <Heading >
          {stringTranslate('login.login').toUpperCase()}
        </Heading>
      </Flex>
      <Flex px={'3rem'} pt={'3rem'}>
        <Formik initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={yup_login}
        onSubmit={onSubmit}>
          {(props) => (
            <Form>
              <Field name='username'>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.username && form.touched.username}>
                    <FormLabel htmlFor='username'>
                      {translate('login.username')}
                    </FormLabel>
                    <Input {...field} id='username' autoComplete='off' />
                    <FormErrorMessage> {form.errors.username} </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='password'>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor='password'>
                      {translate('login.password')}
                    </FormLabel>
                    <Input {...field} id='password' autoComplete='off' type={'password'} />
                    <FormErrorMessage> {form.errors.password} </FormErrorMessage>
                  </FormControl>
                )
                }
              </Field>
              <Flex justifyContent={'center'} pt={'2rem'}>
                <Button colorScheme={'gray'} isLoading={props.isSubmitting} loadingText={stringTranslate('login.loading')} type='submit' size={'md'}>
                  {translate('login.login')}
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default LoginForm;