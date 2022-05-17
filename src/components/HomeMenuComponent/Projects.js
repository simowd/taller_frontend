import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { stringTranslate } from '../../i18n';
import LoadingProjectCard from './LoadingProjectCard';
import ProjectCard from './ProjectCard';
import ProjectCardCreate from './ProjectCardCreate';
import ProjectCardSketchbook from './ProjectCardSketchbook';

const Projects = () => {
  const projects = useSelector((state) => state.projects);

  const projectBuilder = () => {
    if(projects){
      const data = projects.map((project) => {
        if (project.folder_name !== 'Sketchbook'){
          return <ProjectCard project={project} key={project.id_folder} projects={projects}/>;
        }
        else {
          return <ProjectCardSketchbook project={project} key={project.id_folder}/>;
        }
      });
      return (data);
    }
    else {
      return (<LoadingProjectCard />);
    }
  };

  return (
    <Flex alignItems={'center'} justifyContent={'center'} alignContent={'center'} flexDirection={'column'} paddingX={'3rem'} w={'100%'} h={'100%'}>
      <Heading as='h1' size={'2xl'} py={'2.5rem'}> {stringTranslate('home.my_projects')} </ Heading>
      <SimpleGrid columns={{md: 2, lg: 3}} height={'100%'} width={'100%'} spacing={20} justifyContent={'space-between'}>
        {projects ? <ProjectCardCreate projects={projects}/> : null}
        {projectBuilder()}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;