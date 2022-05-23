import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useToastHook } from '../../hooks/Toast';
import { stringTranslate } from '../../i18n';
import fileService from '../../services/file';

const DeleteFileAlert = ({ isOpen, onClose, file, projectData, setProjectData }) => {
  const [loading, setLoading] = useState(false);
  const cancelRef = React.useRef();
  const options = useSelector(state => state.settings);

  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  const onDeleteProject = async () => {
    try {
      setLoading(true);
      await fileService.deleteFile(file.id_file);
      setProjectData({
        project: {
          ...projectData.project,
          files: projectData.project.files.filter((fil) => {
            return fil.id_file !== file.id_file;
          })
        },
        editorData: projectData.editorData.filter((fil) => fil.id_file !== file.id_file)
      });
      setLoading(false);
      onClose();
    }
    catch (error) {
      setLoading(false);
      //Setting up error data
      const error_data = {
        type: 'error',
        status: error.response.status,
        endpoint: 'home'
      };
      onClose();
      newToast(error_data);
    }
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
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {stringTranslate('editor.delete_head')}
            </AlertDialogHeader>

            <AlertDialogBody>
              {stringTranslate('editor.delete_message', { name: file.file_name })}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {stringTranslate('forms.cancel')}
              </Button>
              <Button colorScheme='red' isLoading={loading} onClick={onDeleteProject} ml={3}>
                {stringTranslate('forms.delete')}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteFileAlert;