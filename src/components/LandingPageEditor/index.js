import { Flex, Spinner } from '@chakra-ui/react';
import Editor, { loader } from '@monaco-editor/react';
import React, { useRef } from 'react';
import editorOptions from './editorOptions';

const LandingPageEditor = ({setCode}) => {
  const monacoRef = useRef(null);

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
    //monaco.editor.remeasureFonts();
  };

  // eslint-disable-next-line no-unused-vars
  const handleEditorDidMount = (editor, monaco) => {
    monacoRef.current = editor;
    monaco.editor.remeasureFonts();
  };

  const onEditorChange = (value) => {
    setCode(value);
  };

  //Render the editor once the user has been loaded
  const renderEditor = () => {
    return (
      <Editor
        onChange={onEditorChange}
        defaultLanguage={'python'}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        loading={<Spinner size={'lg'} color={'purple.400'}
        />}
        options={editorOptions}
        theme={'vs-light'}
        saveViewState={true}
      />
    );
  };

  return (
    <Flex h={'98%'} w={'100%'} alignSelf={'center'} justify={'center'}>
      {renderEditor()}
    </Flex>
  );
};

export default LandingPageEditor;