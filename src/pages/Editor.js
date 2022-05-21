import React, { useEffect, useReducer, useState } from 'react';
import { Grid, GridItem, Icon, IconButton, Progress } from '@chakra-ui/react';
import EditorInstance from '../components/EditorInstance';
import { FaPlay } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ConsoleInstance from '../components/ConsoleInstance';
import FileSideBar from '../components/FileSideBar';
import editorService from '../services/editor';
import { useLocation, useParams } from 'react-router-dom';

const Editor = () => {
  const user = useSelector(state => state.user);
  const params = useParams();
  const location = useLocation();
  const [currentFile] = useState(location.state.id_file);
  
  const [projectData, setProjectData] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {project: null, editorData: null}
  );

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

            setProjectData({ project: response.data, editorData: filteredData});
          }
        }
      };
      getProject();
    }
  }, [user]);

  const builder = () => {
    if (projectData.project || projectData.editorData) {
      return (
        <Grid h='100vh' w='100%' templateColumns={'20rem 1fr 4rem 1fr'}>
          <GridItem display={'flex'} alignItems='flex-start' height={'100%'} overflowY={'auto'} overflowX='hidden'>
            <FileSideBar projectData={projectData} setProjectData={setProjectData}/>
          </GridItem>
          <GridItem display={'flex'}>
            <EditorInstance user={user} projectData={projectData} currentFile={currentFile} />
          </GridItem>
          <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
            <IconButton aria-label='' h='98%' w='80%' px={'2%'} py={'5%'} icon={<Icon as={FaPlay} />}></IconButton>
          </GridItem>
          <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
            <ConsoleInstance user={user} />
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