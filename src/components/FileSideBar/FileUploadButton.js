import { IconButton } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { RiFileUploadLine } from 'react-icons/ri';
import { stringTranslate } from '../../i18n';
import { uploadFile } from '../../services/file_managment';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';
import windowState from '../../sounds/window_state.ogg';

const FileUploadButton = ({ setProjectData, projectData }) => {
  const inputRef = useRef(null);
  const [playSound] = useAccesibleSound(focusActionble);
  const [playSoundState] = useAccesibleSound(windowState);

  const changeHandler = async (event) => {
    const response = await uploadFile(event.target.files[0], projectData.project.id_folder);

    if (response.status === 200) {
      playSoundState();
      setProjectData({
        project: { ...projectData.project, files: projectData.project.files.concat(response.data) },
        editorData: projectData.editorData.concat({
          id_file: response.data.id_file,
          storage: response.data.storage,
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
      <input hidden type='file' id='file' name='file' onChange={changeHandler} ref={inputRef} accept={'text/x-python, .txt'} />
      <IconButton onFocus={() => playSound()} icon={<RiFileUploadLine />} fontSize={'20'} size={'sm'} onClick={onClick} variant={'ghost'} aria-label={stringTranslate('editor.upload')} />
    </>
  );
};

export default FileUploadButton;