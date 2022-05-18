import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useToastHook } from '../../hooks/Toast';
import { stringTranslate, translate } from '../../i18n';
import * as Yup from 'yup';
import userService from '../../services/user';

const UpdatePassword = ({ isOpen, onClose }) => {
  const cancelRef = React.useRef();

  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  //Setting up yup schema
  const yup_update_folder = Yup.object({
    old_password: Yup.string().max(255, stringTranslate('forms.max_length', { length: 255 })).required(stringTranslate('forms.required')),
    new_password: Yup.string().max(255, stringTranslate('forms.max_length', { length: 255 })).required(stringTranslate('forms.required')),
    new_password_repeat: Yup.string().oneOf([Yup.ref('new_password'), null], stringTranslate('forms.repeat_password')).required(stringTranslate('forms.required')),
  });

  const onSubmit = async (values, actions) => {
    try {
      await userService.updatePassword(values);
      onClose();
      //success message
      const success = {
        type: 'success',
        endpoint: 'update_password'
      };
      newToast(success);
    }
    catch (error) {
      //Setting up error data
      const error_data = {
        type: 'error',
        status: error.response.status,
        endpoint: 'change_password'
      };
      onClose();
      newToast(error_data);
    }
    //Reset Form
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <Formik initialValues={{
            old_password: '',
            new_password: '',
            new_password_repeat: '',
          }}
          validationSchema={yup_update_folder}
          onSubmit={onSubmit}
          >
            {(props) => (
              <AlertDialogContent>
                <Form>
                  <AlertDialogHeader ref={cancelRef} fontSize='lg' fontWeight='bold'>
                    {stringTranslate('account.update_password')}
                  </AlertDialogHeader>
                  <AlertDialogBody>
                    <Field name='old_password'>
                      {({ field, form }) => (
                        <FormControl isRequired isInvalid={form.errors.old_password && form.touched.old_password}>
                          <FormLabel htmlFor='old_password'>
                            {translate('account.old_password')}
                          </FormLabel>
                          <Input {...field} id='old_password' autoComplete='off' type={'password'} />
                          <FormErrorMessage> {form.errors.old_password} </FormErrorMessage>
                        </FormControl>
                      )
                      }
                    </Field>
                    <Box py={'0.2rem'}></Box>
                    <Field name='new_password'>
                      {({ field, form }) => (
                        <FormControl isRequired isInvalid={form.errors.new_password && form.touched.new_password}>
                          <FormLabel htmlFor='new_password'>
                            {translate('account.new_password')}
                          </FormLabel>
                          <Input {...field} id='new_password' autoComplete='off' type={'password'} />
                          <FormErrorMessage> {form.errors.new_password} </FormErrorMessage>
                        </FormControl>
                      )
                      }
                    </Field>
                    <Box py={'0.2rem'}></Box>
                    <Field name='new_password_repeat'>
                      {({ field, form }) => (
                        <FormControl isRequired isInvalid={form.errors.new_password_repeat && form.touched.new_password_repeat}>
                          <FormLabel htmlFor='new_password_repeat'>
                            {translate('account.new_password_repeat')}
                          </FormLabel>
                          <Input {...field} id='new_password_repeat' autoComplete='off' type={'password'} />
                          <FormErrorMessage> {form.errors.new_password_repeat} </FormErrorMessage>
                        </FormControl>
                      )
                      }
                    </Field>

                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button onClick={onClose}>
                      {stringTranslate('forms.cancel')}
                    </Button>
                    <Button colorScheme='purple' isLoading={props.isSubmitting} type='submit' ml={3}>
                      {stringTranslate('forms.update')}
                    </Button>
                  </AlertDialogFooter>
                </Form>
              </AlertDialogContent>
            )}
          </Formik>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default UpdatePassword;