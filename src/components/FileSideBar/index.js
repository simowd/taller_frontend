import { Box, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate } from '../../i18n';
import FileUploadButton from './FileUploadButton';

const FileSideBar = ({ projectData, setProjectData }) => {

  const fileBuilder = () => {
    const newArr = new Array();
    if (projectData !== undefined) {
      if (projectData.project !== undefined || projectData.project !== null) {
        if (projectData.project.files !== undefined) {
          for (const file of projectData.project.files) {
            console.log(file);
          }
        }
      }
    }
    return newArr;
  };

  return (
    <VStack width={'100%'} height={'100%'}>
      <HStack width={'100%'} p={'1rem'}>
        <Heading w={'75%'} as='h3' fontWeight={'light'} size='md'>{stringTranslate('editor.title')}</Heading>
        <Box>
          <FileUploadButton setProjectData={setProjectData} projectData={projectData} />
        </Box>
      </HStack>
      {fileBuilder()}
    </VStack>
  );
};

export default FileSideBar;