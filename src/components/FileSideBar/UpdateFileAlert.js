import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormErrorMessage, FormLabel, Switch } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useToastHook } from '../../hooks/Toast';
import { stringTranslate, translate } from '../../i18n';
import InputField from './InputField';
import * as Yup from 'yup';
import fileService from '../../services/file';

// eslint-disable-next-line no-unused-vars
const UpdateFileAlert = ({ isOpen, onClose, file, projectData, setProjectData }) => {
  const cancelRef = React.useRef();

  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  //Setting up yup schema
  const yup_update_folder = Yup.object({
    file_name: Yup.string().max(255, stringTranslate('forms.max_length', { length: 255 })).notOneOf([projectData.project.folder_name].concat(projectData.project.files.map((file) => file.file_name)), stringTranslate('forms.repeated')).required(stringTranslate('forms.required')),
    private: Yup.boolean().required(stringTranslate('forms.required')),
  });

  const onSubmit = async (values, actions) => {
    try {
      let data;
      if(values.file_name + '.py' === file.file_name){
        data = {
          private: +values.private
        };
      }
      else {
        data = {
          private: +values.private,
          file_name: values.file_name + '.py'
        };
      }
      
      await fileService.updateFile(data, file.id_file);
      setProjectData(
        {
          project: {...projectData.project, files: projectData.project.files.map((fil) => fil.id_file === file.id_file ? {...fil, ...data} : fil)},
          editorData: projectData.editorData.map((fil) => fil.id_file === file.id_file ? {...fil, ...data}: fil)
        }
      );
      onClose();
      //success message
      const success = {
        type: 'success',
        endpoint: 'file_update'
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
            file_name: file.file_name.replace(/\.[^/.]+$/, ''),
            private: !!file.private
          }}
          validationSchema={yup_update_folder}
          onSubmit={onSubmit}
          >
            {(props) => (
              <AlertDialogContent>
                <Form>
                  <AlertDialogHeader ref={cancelRef} fontSize='lg' fontWeight='bold'>
                    {stringTranslate('editor.update_head')}
                  </AlertDialogHeader>
                  <AlertDialogBody>
                    {stringTranslate('editor.update_message', { name: file.file_name })}

                    <Field name={'file_name'}>
                      {({ field, form }) => (
                        <InputField name={'file_name'} field={field} form={form} />
                      )}
                    </Field>
                    <Field type="checkbox" name={'private'}>
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.private && form.touched.private}>
                          <FormLabel htmlFor='private'>
                            {translate('home.private')}
                          </FormLabel>
                          <Switch {...field} defaultChecked={field.value} id='private' size={'lg'}/>
                          <FormErrorMessage> {form.errors.private} </FormErrorMessage>
                        </FormControl>
                      )}
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

export default UpdateFileAlert;