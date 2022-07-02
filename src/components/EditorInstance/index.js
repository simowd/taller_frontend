import { Flex, Spinner } from '@chakra-ui/react';
import Editor, { loader } from '@monaco-editor/react';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useOptions from './editorOptions';
import { createIntl, createIntlCache } from 'react-intl';
import { LOCALES } from '../../i18n';
import language_messages from '../../i18n/messages';

const EditorInstance = ({ user, projectData, currentFile, socket, setCurrentCode }) => {
  const monacoRef = useRef(null);
  const options = useSelector(state => state.settings);
  const { editorOptions } = useOptions();

  const file = projectData.editorData.find(file => file.id_file === currentFile);

  let intl;
  const cache = createIntlCache();

  if (user) {
    intl = createIntl({
      locale: user.locale,
      messages: language_messages[user.locale]
    }, cache);
  }
  else {
    intl = createIntl({
      locale: LOCALES.SPANISH,
      messages: language_messages[LOCALES.SPANISH]
    }, cache);
  }

  //Send the data to Backend with Socket.IO
  const onEditorChange = (value) => {
    const data = {
      value: value,
      file_storage: file.storage,
      folder_storage: projectData.project.storage
    };

    socket.emit('code:sent', data);

    setCurrentCode({ file: currentFile, code: value });    
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
    //monaco.editor.remeasureFonts();
  };

  // eslint-disable-next-line no-unused-vars
  const handleEditorDidMount = (editor, monaco) => {
    monacoRef.current = editor;
    monaco.editor.remeasureFonts();
    editor.addAction({
      id: 'jump_acc',
      label: intl.formatMessage({ id: 'editor.fejump' }),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK
      ],
      precondition: null,
      keybindContext: null,
      run: (ed) => {
        const pos = ed.getPosition();
        const nextBlock = ed.getModel().findNextMatch('#B ', pos);
        const Npos = {column: 4, lineNumber: nextBlock.range.startLineNumber};
        ed.setPosition(Npos);
      }
    });
    editor.addAction({
      id: 'jump_acc_b',
      label: intl.formatMessage({ id: 'editor.bejump' }),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ
      ],
      precondition: null,
      keybindContext: null,
      run: (ed) => {
        const pos = ed.getPosition();
        const nextBlock = ed.getModel().findPreviousMatch('#B ', pos);
        const Npos = {column: 1, lineNumber: nextBlock.range.startLineNumber};
        ed.setPosition(Npos);
      }
    });
  };

  //Render the editor once the user has been loaded
  const renderEditor = () => {
    if (user && projectData.editorData && currentFile && editorOptions && options) {
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
            theme={options.high_contrast ? 'hc-black' : (options.dark_light ==='dark' ? 'vs-dark' : 'vs-light')}
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