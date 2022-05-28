import { Flex, Spinner } from '@chakra-ui/react';
import Editor, { loader } from '@monaco-editor/react';
import React, { useRef } from 'react';
import editorOptions from './editorOptions';

const EditorInstance = ({ projectData, currentFile, setCurrentCode }) => {
  const monacoRef = useRef(null);

  const file = projectData.editorData.find(file => file.id_file === currentFile);

  //Send the data to Backend with Socket.IO
  const onEditorChange = (value) => {
    setCurrentCode({ file: currentFile, code: value });
  };

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

  //Render the editor once the user has been loaded
  const renderEditor = () => {
    if (projectData.editorData && currentFile) {
      if (file !== undefined && editorOptions !== undefined) {
        return (
          <Editor
            options={editorOptions}
            onChange={onEditorChange}
            defaultLanguage={file.language}
            defaultValue={file.value}
            path={file.id_file.toString()}
            onMount={handleEditorDidMount}
            beforeMount={handleEditorWillMount}
            loading={<Spinner size={'lg'} color={'purple.400'}
            />}
            theme={'vs-light'}
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