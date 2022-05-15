import { SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return(
    <SimpleGrid columns={[2, null, 3]} spacing={'10rem'} justifyContent={'space-between'}>
      { projects ? <ProjectCard project={projects[0]}/> : <Spinner />}
    </SimpleGrid>
  );
};

export default Projects;