import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormErrorMessage, FormLabel, Switch } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useToastHook } from '../../hooks/Toast';
import { stringTranslate, translate } from '../../i18n';
import InputField from './InputField';
import * as Yup from 'yup';
import fileService from '../../services/file';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';
import windowState from '../../sounds/window_state.ogg';

const CreateFileAlert = ({ isOpen, onClose, projectData, setProjectData }) => {
  const cancelRef = React.useRef();
  const [playSound] = useAccesibleSound(focusActionble);
  const [playSoundState] = useAccesibleSound(windowState);

  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  //Setting up yup schema
  const yup_update_folder = Yup.object({
    file_name: Yup.string().max(255, stringTranslate('forms.max_length', { length: 255 })).notOneOf(projectData.project.files.map((file) => file.file_name), stringTranslate('forms.existed')).required(stringTranslate('forms.required')),
    private: Yup.boolean().required(stringTranslate('forms.required')),
  });

  const onSubmit = async (values, actions) => {
    try {
      const data = {
        ...values,
        file_name: values.file_name + '.py'
      };
      const response = await fileService.createFile(data, projectData.project.id_folder);
      if (response.status === 200) {
        playSoundState();
        setProjectData({
          project: {...projectData.project ,files: projectData.project.files.concat({ ...response.data, content: '' })},
          editorData: projectData.editorData.concat({
            id_file: response.data.id_file,
            storage: response.data.storage,
            value: '',
            language: 'python'
          })
        });
      }
      onClose();
      //success message
      const success = {
        type: 'success',
        endpoint: 'create_file'
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
      >
        <AlertDialogOverlay>
          <Formik initialValues={{
            file_name: '',
            private: true
          }}
          validationSchema={yup_update_folder}
          onSubmit={onSubmit}
          >
            {(props) => (
              <AlertDialogContent>
                <Form>
                  <AlertDialogHeader ref={cancelRef} fontSize='lg' fontWeight='bold'>
                    {stringTranslate('editor.create_head')}
                  </AlertDialogHeader>
                  <AlertDialogBody>
                    <Field name={'file_name'}>
                      {({ field, form }) => (
                        <InputField name={'file_name'} field={field} form={form} />
                      )}
                    </Field>
                    <Field type="checkbox" name={'private'}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.private && form.touched.private}>
                          <FormLabel htmlFor='private' pt={'1rem'}>
                            {translate('home.private')}
                          </FormLabel>
                          <Switch onFocus={() => playSound()} {...field} id='private' size={'lg'} defaultChecked={true} />
                          <FormErrorMessage> {form.errors.private} </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button onFocus={() => playSound()} onClick={onClose}>
                      {stringTranslate('forms.cancel')}
                    </Button>
                    <Button onFocus={() => playSound()} colorScheme='linkedin'  isLoading={props.isSubmitting} type='submit' ml={3}>
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