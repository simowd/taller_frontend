import { Box } from '@chakra-ui/react';
import React from 'react';
import Projects from './Projects';

const HomeMenuComponent = ({ projects }) => {
  return(
    <Box>
      <Projects projects={projects}/>
    </Box>
  );
};

export default HomeMenuComponent;