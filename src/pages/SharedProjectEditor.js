import React, { useEffect, useReducer, useState } from 'react';
import { Grid, GridItem, Icon, IconButton, Progress, useDisclosure } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import editorService from '../services/editor';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useSkulpt from '../hooks/Skulpt';
import focusActionble from '../sounds/focus_actionable.ogg';
import useAccesibleSound from '../hooks/Sound';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import useKeypress from 'react-use-keypress';
import ShortcutModal from '../components/Generic/ShortcutModal';
import LandingPageConsole from '../components/LandingPageConsole';
import SharedEditorInstace from '../components/SharedEditorInstance';
import SharedFileSideBar from '../components/SharedFileSideBar';
import { stringTranslate } from '../i18n';

const SharedProjectEditor = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { userlessCode, output } = useSkulpt();
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
      else {
        navigate('/');
      }
    };
    getProject();
  }, []);

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
    if (event.key === 'F4') {
      execute();
    }
    if (event.key === 'F1') {
      event.preventDefault();
      onOpen();
    }
  });

  const execute = async () => {
    if (projectData.editorData.find(file => currentFile === file.id_file)) {
      await userlessCode(currentCode.code);
    }
  };

  const builder = () => {
    if (projectData.project || projectData.editorData) {
      return (
        <Grid h='100%' w='100%' templateColumns={'20rem 1fr 4rem 1fr'}>
          <ShortcutModal onClose={onClose} isOpen={isOpen} />
          <GridItem display={'flex'} alignItems='center' height={'100%'} overflowY={'auto'} overflowX='hidden'>
            <SharedFileSideBar projectData={projectData} setProjectData={setProjectData} setCurrentFile={setCurrentFile} currentCode={currentCode} />
          </GridItem>
          <GridItem display={'flex'}>
            <SkipNavContent id={'skip-editor'} />
            <SharedEditorInstace projectData={projectData} currentFile={currentFile} setCurrentCode={setCurrentCode} setProjectData={setProjectData} />
          </GridItem>
          <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
            <IconButton aria-label={stringTranslate('editor.run')} h='98%' w='80%' px={'2%'} py={'5%'} onFocus={() => playSound()} onClick={execute} icon={<Icon as={FaPlay} />}></IconButton>
          </GridItem>
          <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
            <LandingPageConsole output={output} />
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

export default SharedProjectEditor;