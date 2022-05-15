import React from 'react';
import Projects from './Projects';

const HomeMenuComponent = ({ projects }) => {
  return (
    <Projects projects={projects} />
  );
};

export default HomeMenuComponent;