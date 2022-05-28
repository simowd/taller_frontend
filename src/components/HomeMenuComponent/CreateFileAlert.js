import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormErrorMessage, FormLabel, Switch } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToastHook } from '../../hooks/Toast';
import { stringTranslate, translate } from '../../i18n';
import { createProject } from '../../reducers/projects_reducer';
import InputField from './InputField';
import * as Yup from 'yup';
import FileUploadButton from './FileUploadButton';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';
import windowState from '../../sounds/window_state.ogg';

const CreateFileAlert = ({ isOpen, onClose, projects }) => {
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const options = useSelector(state => state.settings);
  const [playSound] = useAccesibleSound(focusActionble);
  const [playSoundState] = useAccesibleSound(windowState);

  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  //Setting up yup schema
  const yup_update_folder = Yup.object({
    folder_name: Yup.string().max(255, stringTranslate('forms.max_length', { length: 255 })).notOneOf(projects.map((folder) => folder.folder_name), stringTranslate('forms.existed')).required(stringTranslate('forms.required')),
    private: Yup.boolean().required(stringTranslate('forms.required')),
  });

  const onSubmit = async (values, actions) => {
    try {
      await dispatch(createProject(values));
      playSoundState();
      onClose();
      //success message
      const success = {
        type: 'success',
        endpoint: 'create_folder'
      };
      newToast(success);
    }
    catch (error) {
      //Setting up error data
      const error_data = {
        type: 'error',
        status: error.response.status,
        endpoint: 'home'
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
        motionPreset={options ? (options.animations ? 'slideInBottom' : 'none') : 'slideInBottom'}
      >
        <AlertDialogOverlay>
          <Formik initialValues={{
            folder_name: '',
            private: true
          }}
          validationSchema={yup_update_folder}
          onSubmit={onSubmit}
          >
            {(props) => (
              <AlertDialogContent>
                <Form>
                  <AlertDialogHeader ref={cancelRef} fontSize='lg' fontWeight='bold'>
                    {stringTranslate('home.create_head')}
                    <FileUploadButton projects={projects} onClose={onClose}/>
                  </AlertDialogHeader>
                  <AlertDialogBody>
                    <Field name={'folder_name'}>
                      {({ field, form }) => (
                        <InputField name={'folder_name'} field={field} form={form} />
                      )}
                    </Field>
                    <Field type="checkbox" name={'private'}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.private && form.touched.private}>
                          <FormLabel htmlFor='private'>
                            {translate('home.private')}
                          </FormLabel>
                          <Switch onFocus={() => playSound()} {...field} id='private' size={'lg'} defaultChecked={true}/>
                          <FormErrorMessage> {form.errors.private} </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button onFocus={() => playSound()} onClick={onClose}>
                      {stringTranslate('forms.cancel')}
                    </Button>
                    <Button onFocus={() => playSound()} colorScheme='linkedin' isLoading={props.isSubmitting} type='submit' ml={3}>
                      {stringTranslate('forms.create')}
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

export default CreateFileAlert;