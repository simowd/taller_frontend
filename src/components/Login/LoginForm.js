import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react';
import { stringTranslate, translate } from '../../i18n/message_handle';
import * as Yup from 'yup';
import { loginUser } from '../../reducers/user_reducer';
import { useDispatch } from 'react-redux';
import { useToastHook } from '../../hooks/Toast';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    const loginValues = values;
    try {
      await dispatch(loginUser(loginValues));
      navigate('/s/');
    }
    catch (error) {
      //Setting up error data
      const error_data = {
        type: 'error',
        status: error.response.status,
        endpoint: 'login'
      };

      newToast(error_data);
      
    }
    //Reset Form
    actions.resetForm();
    actions.setSubmitting(false);
  };

  //Setting up yup schema
  const yup_login = Yup.object({
    username: Yup.string().max(50, stringTranslate('forms.max_length', { length: 50 })).required(stringTranslate('forms.required')),
    password: Yup.string().required(stringTranslate('forms.required')),
  });

  return (
    <Flex bg={'white'} px={'5rem'} pb={'8rem'} pt={'5rem'} rounded={'lg'} m={'5rem'} flexDirection={'column'}>
      <Flex justifyContent={'center'}>
        <Heading >
          {stringTranslate('login.login').toUpperCase()}
        </Heading>
      </Flex>
      <Flex px={'7rem'} pt={'4rem'}>
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
              <Box py={'1rem'}></Box>
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