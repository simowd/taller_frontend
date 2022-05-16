import { Button, Flex, Icon, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { RiFolderAddLine } from 'react-icons/ri';
import CreateFileAlert from './CreateFileAlert';

const ProjectCardCreate = ({projects}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex background={'white'} borderRadius={'xl'} width={'100%'} height={'18rem'} alignContent='center' justifyContent={'center'} alignItems={'center'} boxShadow='md' onClick={onOpen} as={Button}>
      <CreateFileAlert projects={projects} isOpen={isOpen} onClose={onClose}/>
      <Icon as={ RiFolderAddLine } w={32} h={32}/>
    </Flex>
  );
};

export default ProjectCardCreate;