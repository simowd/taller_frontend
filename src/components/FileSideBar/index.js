import { Box, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate } from '../../i18n';
import FileUploadButton from './FileUploadButton';
import FileSpace from './FileSpace';

const FileSideBar = ({ projectData, setProjectData }) => {

  const fileBuilder = () => {
    const newArr = new Array();
    if (projectData !== undefined) {
      if (projectData.project !== undefined || projectData.project !== null) {
        if (projectData.project.files !== undefined) {
          for (const file of projectData.project.files) {
            newArr.push(<FileSpace key={file.id_file} file={file} projectData={projectData} setProjectData={setProjectData} />);
          }
        }
      }
    }
    if (newArr.length > 0) {
      return newArr;
    }
    else {
      return null;
    }

  };

  return (
    <VStack boxShadow={'md'} background={'white'} mr={'0.5rem'} roundedRight={'lg'} width={'95%'} height={'98%'}>
      <HStack width={'100%'} p={'1rem'}>
        <Heading w={'75%'} as='h3' fontWeight={'medium'} size='md'>{stringTranslate('editor.title')}</Heading>
        <Box>
          <FileUploadButton setProjectData={setProjectData} projectData={projectData} />
        </Box>
      </HStack>
      <VStack height={'100%'} width={'100%'} overflowY={'scroll'} overflowX='hidden'>
        {fileBuilder()}
      </VStack>
    </VStack>
  );
};

export default FileSideBar;