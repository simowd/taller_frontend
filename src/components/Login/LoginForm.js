import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react';
import { stringTranslate, translate } from '../../i18n/message_handle';
import * as Yup from 'yup';
import { loginUser } from '../../reducers/user_reducer';
import { useDispatch } from 'react-redux';
import { useToastHook } from '../../hooks/Toast';
import { useNavigate } from 'react-router-dom';
import InputField from '../Generic/InputField';

const LoginForm = () => {

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    const loginValues = values;
    try {
      await dispatch(loginUser(loginValues));
      navigate('/s/menu');
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
          {stringTranslate('auth.login').toUpperCase()}
        </Heading>
      </Flex>
      <Flex px={'7rem'} pt={'4rem'} justify={'center'}>
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
                  <InputField name='username' field={field} form={form}/>
                )}
              </Field>
              <Box py={'1rem'}></Box>
              <Field name='password'>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor='password'>
                      {translate('auth.password')}
                    </FormLabel>
                    <Input {...field} id='password' autoComplete='off' type={'password'} />
                    <FormErrorMessage> {form.errors.password} </FormErrorMessage>
                  </FormControl>
                )
                }
              </Field>
              <Flex justifyContent={'center'} pt={'2rem'}>
                <Button colorScheme={'gray'} isLoading={props.isSubmitting} loadingText={stringTranslate('auth.loading')} type='submit' size={'md'}>
                  {translate('auth.login')}
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