import { Flex, Spinner } from '@chakra-ui/react';
import Editor, { loader } from '@monaco-editor/react';
import React, { useRef } from 'react';
import editorOptions from './editorOptions';

const ConsoleInstance = ({ user, data='' }) => {
  const monacoRef = useRef(null);

  //Send the data to Backend with Socket.IO
  const onEditorChange = (value, event) => {
    const data = {
      value,
      ...event,
    };
    console.log(data);
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
          defaultLanguage='plaintext'
          defaultValue={data}
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
    <Flex h={'98%'} w={'100%'} alignSelf={'center'} justify={'center'}>
      {renderEditor()}
    </Flex>
  );
};

export default ConsoleInstance;