import { IconButton } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { RiFileUploadLine } from 'react-icons/ri';
import { stringTranslate } from '../../i18n';
import { uploadFile } from '../../services/file_managment';

const FileUploadButton = ({ setProjectData, projectData }) => {
  const inputRef = useRef(null);

  const changeHandler = async (event) => {
    const response = await uploadFile(event.target.files[0], projectData.project.id_folder);

    if (response.status === 200) {
      setProjectData({
        project: { ...projectData.project, files: projectData.project.files.concat(response.data) },
        editorData: projectData.editorData.concat({
          file_id: response.data.id_file,
          file_storage: response.data.storage,
          value: response.data.fileString,
          language: 'python'
        })
      });
    }
  };

  const onClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input hidden type='file' id='file' name='file' onChange={changeHandler} ref={inputRef} accept={'text/x-python'} />
      <IconButton icon={<RiFileUploadLine />} fontSize={'20'} size={'sm'} onClick={onClick} variant={'ghost'} aria-label={stringTranslate('editor.upload')} />
    </>
  );
};

export default FileUploadButton;