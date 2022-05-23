import { Button, Flex, Icon, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { RiFolderAddLine } from 'react-icons/ri';
import { stringTranslate } from '../../i18n';
import CreateFileAlert from './CreateFileAlert';

const ProjectCardCreate = ({projects}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex background={useColorModeValue('white', '#282C34')} borderRadius={'xl'} width={'100%'} height={'18rem'} alignContent='center' justifyContent={'center'} alignItems={'center'} boxShadow='md' onClick={onOpen} as={Button} aria-label={stringTranslate('home.create_folder')}>
      <CreateFileAlert projects={projects} isOpen={isOpen} onClose={onClose}/>
      <Icon as={ RiFolderAddLine } w={32} h={32}/>
    </Flex>
  );
};

export default ProjectCardCreate;