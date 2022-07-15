import React, { useEffect, useReducer, useState } from 'react';
import { Grid, GridItem, Icon, IconButton, Progress, useDisclosure } from '@chakra-ui/react';
import EditorInstance from '../components/EditorInstance';
import { FaPlay } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ConsoleInstance from '../components/ConsoleInstance';
import FileSideBar from '../components/FileSideBar';
import editorService from '../services/editor';
import { useLocation, useParams } from 'react-router-dom';
import useSkulpt from '../hooks/Skulpt';
import { io } from 'socket.io-client';
import focusActionble from '../sounds/focus_actionable.ogg';
import useAccesibleSound from '../hooks/Sound';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import useKeypress from 'react-use-keypress';
import ShortcutModal from '../components/Generic/ShortcutModal';
import { stringTranslate } from '../i18n';

const Editor = () => {
  const user = useSelector(state => state.user);
  const params = useParams();
  const location = useLocation();
  const { runCode, output } = useSkulpt();
  const [socket, setSocket] = useState(null);
  const [playSound] = useAccesibleSound(focusActionble);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [projectData, setProjectData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { project: null, editorData: null }
  );

  const [currentFile, setCurrentFile] = useState();
  const [currentCode, setCurrentCode] = useState();

  //Get all projects
  useEffect(() => {
    if (user) {
      const getProject = async () => {
        const response = await editorService.getProjects(params.projectId);
        if (response.status === 200) {
          if (projectData.project === null || projectData.project === null) {
            const filteredData = response.data.files.map((file) => {
              return {
                id_file: file.id_file,
                storage: file.storage,
                value: file.content,
                language: 'python'
              };
            });

            setProjectData({ project: response.data, editorData: filteredData });
          }
        }
      };
      getProject();
    }
  }, [user]);

  //Setup the WebSocket connection to the backend
  useEffect(() => {
    if (user) {
      //Create the instance of the connection when user is gotten by browser
      const io_socket = io('/', {
        path: '/socket',
        extraHeaders: {
          'Authorization': user.token.token
        }
      });
      setSocket(io_socket);
      //Delete Socket when the component dies
      return () => io_socket.disconnect();
    }
  }, [user]);

  // Set current file
  useEffect(() => {
    if (projectData.project) {
      if (currentFile === null || currentFile === undefined) {
        if (location.state) {
          setCurrentFile(location.state.id_file);
        }
        else if (projectData.project.files.length !== 0) {
          setCurrentFile(projectData.project.files[0].id_file);
        }
      }
      else {
        if (!projectData.project.files.map(file => file.id_file).includes(currentFile)) {
          if (projectData.project.files.length !== 0) {
            setCurrentFile(projectData.project.files[0].id_file);
          }
          else {
            setCurrentFile(null);
          }
        }
      }
    }
  }, [projectData]);

  //Current code for editor
  useEffect(() => {
    if (currentFile) {
      setCurrentCode({ file: currentFile, code: projectData.editorData.find(file => currentFile === file.id_file).value });
    }
    if (currentCode) {
      const projectNewData = { ...projectData.project, files: projectData.project.files.map(file => file.id_file === currentCode.file ? { ...file, content: currentCode.code } : file) };

      const editorNewData = projectData.editorData.map(file => file.id_file === currentCode.file ? { ...file, value: currentCode.code } : file);
      setProjectData({
        project: projectNewData,
        editorData: editorNewData
      });
    }
  }, [currentFile]);

  useKeypress(['F4', 's', 'F1'], () => {
    if(event.key === 'F4') {
      execute();
    }
    if(event.ctrlKey){
      if (event.key === 's') {
        event.preventDefault();
        if (projectData.project.files) {
          const file = projectData.project.files.find(element => element.id_file === currentFile);
          if (file){
            const data = {
              value: currentCode.code,
              file_storage: file.storage,
              folder_storage: projectData.project.storage,
            };
            socket.emit('code:save', data);
          }
        }
      }
    }
    if(event.key === 'F1') {
      event.preventDefault();
      onOpen();
    }
  });

  const execute = async () => {
    if (projectData.editorData.find(file => currentFile === file.id_file)) {
      await runCode(currentCode);
    }
  };

  const builder = () => {
    if (projectData.project || projectData.editorData) {
      return (
        <Grid h='100vh' w='100%' templateColumns={'20rem 1fr 4rem 1fr'}>
          <ShortcutModal onClose={onClose} isOpen={isOpen}/>
          <GridItem display={'flex'} alignItems='center' height={'100%'} overflowY={'auto'} overflowX='hidden'>
            <FileSideBar projectData={projectData} setProjectData={setProjectData} setCurrentFile={setCurrentFile} currentCode={currentCode}/>
          </GridItem>
          <GridItem display={'flex'} aria-label='Editor'>
            <SkipNavContent id={'skip-editor'}/>
            <EditorInstance user={user} projectData={projectData} currentFile={currentFile} setCurrentCode={setCurrentCode} setProjectData={setProjectData} socket={socket}/>
          </GridItem>
          <GridItem display={'flex'} justifyContent='center' alignItems={'center'} className='editor_run_button'>
            <IconButton aria-label={stringTranslate('editor.run')} h='98%' w='80%' px={'2%'} py={'5%'} onFocus={() => playSound()} onClick={execute} icon={<Icon as={FaPlay} />} ></IconButton>
          </GridItem>
          <GridItem display={'flex'} justifyContent='center' alignItems={'center'} aria-label='Terminal'>
            <ConsoleInstance user={user} output={output} />
          </GridItem>
        </Grid>
      );
    }
    else {
      return (
        <Progress isIndeterminate w={'100%'} />
      );
    }
  };

  return (
    <>
      {builder()}
    </>
  );
};

export default Editor;