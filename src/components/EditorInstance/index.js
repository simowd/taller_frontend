import { Flex, Spinner } from '@chakra-ui/react';
import Editor, { loader } from '@monaco-editor/react';
import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import editorOptions from './editorOptions';

const EditorInstance = ({ user, projectData }) => {
  const monacoRef = useRef(null);
  const [socket, setSocket] = useState(null);

  console.log(projectData);

  //Setup the WebSocket connection to the backend
  useEffect(() => {
    if (user) {
      //Create the instance of the connection when user is gotten by browser
      const io_socket = io(process.env.REACT_APP_BACKEND_URL,{
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
  const onEditorChange = (value, event) => {
    const data = {
      value,
      ...event,
    };
    socket.emit('code:sent', data);
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
    if (user) {
      return (
        <Editor
          onChange={onEditorChange}
          defaultLanguage='python'
          defaultValue=''
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          loading={<Spinner size={'lg'} color={'purple.400'}
          />}
          options={editorOptions}
        />
      );
    }
    else {
      return (
        <Spinner size={'lg'} color={'purple.400'} />
      );
    }
  };

  return (
    <Flex h={'95%'} w={'100%'} alignSelf={'center'} justify={'center'}>
      {renderEditor()}
    </Flex>
  );
};

export default EditorInstance;