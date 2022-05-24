import React, { useEffect, useReducer, useState } from 'react';
import { Grid, GridItem, Icon, IconButton, Progress } from '@chakra-ui/react';
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

const Editor = () => {
  const user = useSelector(state => state.user);
  const params = useParams();
  const location = useLocation();
  const { runCode, output } = useSkulpt();
  const [socket, setSocket] = useState(null);
  const [playSound] = useAccesibleSound(focusActionble);

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

  const execute = async () => {
    if (projectData.editorData.find(file => currentFile === file.id_file)) {
      await runCode(currentCode);
    }
  };

  const builder = () => {
    if (projectData.project || projectData.editorData) {
      return (
        <Grid h='100vh' w='100%' templateColumns={'20rem 1fr 4rem 1fr'}>
          <GridItem display={'flex'} alignItems='center' height={'100%'} overflowY={'auto'} overflowX='hidden'>
            <FileSideBar projectData={projectData} setProjectData={setProjectData} setCurrentFile={setCurrentFile} currentCode={currentCode}/>
          </GridItem>
          <GridItem display={'flex'}>
            <EditorInstance user={user} projectData={projectData} currentFile={currentFile} setCurrentCode={setCurrentCode} setProjectData={setProjectData} socket={socket}/>
          </GridItem>
          <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
            <IconButton aria-label='' h='98%' w='80%' px={'2%'} py={'5%'} onFocus={() => playSound()} onClick={execute} icon={<Icon as={FaPlay} />}></IconButton>
          </GridItem>
          <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
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