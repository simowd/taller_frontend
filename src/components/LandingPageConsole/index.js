import { Flex, Spinner } from '@chakra-ui/react';
import Editor, { loader } from '@monaco-editor/react';
import React, { useRef } from 'react';
import editorOptions from './editorOptions';

const LandingPageConsole = ({output}) => {
  const monacoRef = useRef(null);

  //Set editor language  
  loader.config({
    paths: {
      //vs: '/monaco-editor'
    },
    'vs/nls': {
      availableLanguages: {
        '*': 'es',
      }
    }
  });

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
    return (
      <Editor
        defaultLanguage='plaintext'
        value={output}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        loading={<Spinner size={'lg'} color={'purple.400'}
        />}
        theme={'vs-dark'}
        options={editorOptions}
      />
    );
  };

  return (
    <Flex h={'98%'} w={'100%'} alignSelf={'center'} justify={'center'} id={'console'}>
      {renderEditor()}
    </Flex>
  );
};

export default LandingPageConsole;