import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToastHook } from '../../hooks/Toast';
import { stringTranslate } from '../../i18n';
import { deleteProject } from '../../reducers/projects_reducer';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';

const DeleteFileAlert = ({ isOpen, onClose, project }) => {
  const [loading, setLoading] = useState(false);
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const options = useSelector(state => state.settings);
  const [playSound] = useAccesibleSound(focusActionble);

  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  const onDeleteProject = async () => {
    try {
      setLoading(true);
      await dispatch(deleteProject(project.id_folder));
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
              {stringTranslate('home.delete_head')}
            </AlertDialogHeader>

            <AlertDialogBody>
              {stringTranslate('home.delete_message', { name: project.folder_name })}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onFocus={() => playSound()} ref={cancelRef} onClick={onClose}>
                {stringTranslate('forms.cancel')}
              </Button>
              <Button onFocus={() => playSound()} colorScheme='red' isLoading={loading} onClick={onDeleteProject} ml={3}>
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