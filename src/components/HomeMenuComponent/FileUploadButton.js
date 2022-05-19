import { Button } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { RiFileUploadLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useToastHook } from '../../hooks/Toast';
import { stringTranslate } from '../../i18n';
import { uploadProjectFile } from '../../reducers/projects_reducer';

const FileUploadButton = ({ projects, onClose }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  const changeHandler = async (event) => {
    const file = event.target.files[0];
    try {
      setLoading(true);
      const exists = projects.map((folder) => folder.folder_name).includes(file.name.replace(/\.[^/.]+$/, ''));
      if (exists){
        throw new Error(409);
      }
      await dispatch(uploadProjectFile(file));
      setLoading(false);
      onClose();
      //success message
      const success = {
        type: 'success',
        endpoint: 'create_folder'
      };
      newToast(success);
    }
    catch (error) {
      setLoading(false);
      //Setting up error data
      const error_data = {
        type: 'error',
        status: parseInt(error.message),
        endpoint: 'home'
      };
      onClose();
      newToast(error_data);
    }
  };

  const onClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input hidden type='file' id='file' name='file' onChange={changeHandler} ref={inputRef} accept={'text/x-python'} />
      <Button loading={loading} loadingText={stringTranslate('auth.loading')} position={'relative'} float='right' leftIcon={<RiFileUploadLine />} size={'sm'} onClick={onClick} aria-label={stringTranslate('editor.upload')}> {stringTranslate('home.upload_file')} </Button>
    </>
  );
};

export default FileUploadButton;