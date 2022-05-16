import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { stringTranslate } from '../../i18n';
import { deleteProject } from '../../reducers/projects_reducer';

const DeleteFileModal = ({ isOpen, onClose, project }) => {
  const [loading , setLoading] = useState(false);
  const cancelRef = React.useRef();
  const dispatch = useDispatch();

  const onDeleteProject = async () => {
    setLoading(true);
    await dispatch(deleteProject(project.id_folder));
    setLoading(false);
    onClose();
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {stringTranslate('home.delete_head')}
            </AlertDialogHeader>

            <AlertDialogBody>
              {stringTranslate('home.delete_message', {name: project.folder_name})}
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

export default DeleteFileModal;