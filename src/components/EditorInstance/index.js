/* eslint-disable no-unused-vars */
import { Flex, Spinner } from '@chakra-ui/react';
import Editor, { loader, useMonaco } from '@monaco-editor/react';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import useOptions from './editorOptions';

const EditorInstance = ({ user, projectData, currentFile, setProjectData, setCurrentCode }) => {
  const monacoRef = useRef(null);
  const monaco = useMonaco();
  const [socket, setSocket] = useState(null);
  const options = useSelector(state => state.settings);
  const { editorOptions } = useOptions();

  const file = projectData.editorData.find(file => file.id_file === currentFile);

  //Setup the WebSocket connection to the backend
  useEffect(() => {
    if (user) {
      //Create the instance of the connection when user is gotten by browser
      const io_socket = io(process.env.REACT_APP_BACKEND_URL, {
        extraHeaders: {
          'Authorization': user.token.token
        }
      });
      setSocket(io_socket);
      //Delete Socket when the component dies
      return () => io_socket.disconnect();
    }
  }, [user]);


  //Send the data to Backend with Socket.IO
  const onEditorChange = () => {
    const currentModel = monaco.editor.getModels().find(model => model.uri.path === `/${file.id_file}`);

    const newValue = currentModel.getValue().toString();

    const data = {
      value: newValue,
      file_storage: file.storage,
      folder_storage: projectData.project.storage
    };

    socket.emit('code:sent', data);

    setCurrentCode({ file: currentFile, code: newValue });

    
  };

  //Set editor language  
  if (user) {
    if (user.locale && user.locale !== 'en') {
      loader.config({
        paths: {
          //vs: '/monaco-editor'
        },
        'vs/nls': {
          availableLanguages: {
            '*': user.locale,
          }
        }
      });
    }
  }

  // eslint-disable-next-line no-unused-vars
  const handleEditorWillMount = (monaco) => {
    //Enable Accesability support default
    //monaco.editor.EditorOptions.accessibilitySupport = 2;
  };

  // eslint-disable-next-line no-unused-vars
  const handleEditorDidMount = (editor, monaco) => {
    monacoRef.current = editor;

  };

  //Render the editor once the user has been loaded
  const renderEditor = () => {
    if (user && projectData.editorData && currentFile) {
      if (file !== undefined) {
        return (
          <Editor
            onChange={onEditorChange}
            defaultLanguage={file.language}
            defaultValue={file.value}
            path={file.id_file.toString()}
            onMount={handleEditorDidMount}
            beforeMount={handleEditorWillMount}
            loading={<Spinner size={'lg'} color={'purple.400'}
            />}
            options={editorOptions}
            theme={options.high_contrast ? 'hc-black' : 'vs-dark'}
            saveViewState={true}
          />
        );
      }
      else {
        return null;
      }
    }
    else {
      if (currentFile === null || currentFile === undefined) {
        return null;
      }
      else {
        return (
          <Spinner size={'lg'} color={'purple.400'} />
        );
      }
    }
  };

  return (
    <Flex h={'98%'} w={'100%'} alignSelf={'center'} justify={'center'}>
      {renderEditor()}
    </Flex>
  );
};

export default EditorInstance;