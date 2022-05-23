import { Heading, HStack, IconButton, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate } from '../../i18n';
import FileUploadButton from './FileUploadButton';
import FileSpace from './FileSpace';
import { RiFileAddLine } from 'react-icons/ri';
import CreateFileAlert from './CreateFileAlert';

const FileSideBar = ({ projectData, setProjectData, setCurrentFile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fileBuilder = () => {
    const newArr = new Array();
    if (projectData !== undefined) {
      if (projectData.project !== undefined || projectData.project !== null) {
        if (projectData.project.files !== undefined) {
          for (const file of projectData.project.files) {
            newArr.push(<FileSpace setCurrentFile={setCurrentFile} key={file.id_file} file={file} projectData={projectData} setProjectData={setProjectData} />);
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
    <VStack boxShadow={'md'} background={useColorModeValue('white', '35343F')} mr={'0.5rem'} roundedRight={'lg'} width={'95%'} height={'98%'} overflowY={'scroll'} overflowX='hidden'>
      <CreateFileAlert isOpen={isOpen} onClose={onClose} projectData={projectData} setProjectData={setProjectData}/>
      <HStack width={'100%'} p={'1rem'}>
        <Heading w={'75%'} as='h3' fontWeight={'medium'} size='md'>{stringTranslate('editor.title')}</Heading>
        <HStack>
          <FileUploadButton setProjectData={setProjectData} projectData={projectData} />
          <IconButton icon={<RiFileAddLine />} fontSize={'20'} size={'sm'} onClick={onOpen} variant={'ghost'} aria-label={stringTranslate('editor.new_file')} />
        </HStack>
      </HStack>
      <VStack height={'100%'} width={'100%'} >
        {fileBuilder()}
      </VStack>
    </VStack>
  );
};

export default FileSideBar;