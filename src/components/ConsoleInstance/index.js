import { Flex, Spinner } from '@chakra-ui/react';
import Editor, { loader } from '@monaco-editor/react';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import editorOptions from './editorOptions';

const ConsoleInstance = ({ user, output }) => {
  const monacoRef = useRef(null);
  const options = useSelector(state => state.settings);

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
    monaco.editor.remeasureFonts();
  };

  //Render the editor once the user has been loaded
  const renderEditor = () => {
    if (user && options) {
      return (
        <Editor
          defaultLanguage='plaintext'
          value={output}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          loading={<Spinner size={'lg'} color={'purple.400'}
          />}
          theme={options.high_contrast ? 'hc-black' : 'vs-dark'}
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