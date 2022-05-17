import { Box, Flex, Heading, HStack, Icon, IconButton, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiEditLine, RiDownload2Line, RiDeleteBinLine, RiFolderWarningLine } from 'react-icons/ri';
import { stringTranslate } from '../../i18n';
import { downloadProject } from '../../services/file_managment';
import DeleteFileAlert from './DeleteFileAlert';
import { useToastHook } from '../../hooks/Toast';
import UpdateFileAlert from './UpdateFileAlert';
import FileSpace from './FileSpace';

const ProjectCard = ({ project, projects }) => {
  const [loadingD, setLoadingD] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenU, onOpen: onOpenU, onClose: onCloseU } = useDisclosure();
  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  const onDownload = async () => {
    try {
      setLoadingD(true);
      await downloadProject(project);
      setLoadingD(false);
    }
    catch (error) {
      setLoadingD(false);
      //Setting up error data
      const error_data = {
        type: 'error',
        status: error.response.status,
        endpoint: 'home'
      };

      newToast(error_data);
    }
  };

  const fileBuilder = () => {
    if (project) {
      if (project.files.length === 0) {
        return (
          <Flex justifyContent={'center'} alignContent={'center'} height={'100%'} width={'100%'}>
            <VStack>
              <Icon alignSelf={'center'} as={RiFolderWarningLine} w={32} h={32} />
              <Text justifyContent={'center'}>
                {stringTranslate('home.folder_not_found')}
              </Text>
            </VStack>
          </Flex>
        );
      }
      const files = project.files.map((file, index) => {
        if (index <= 2) {
          return (<FileSpace file={file} key={file.id_file} />);
        }
        else {
          return null;
        }
      });
      return files;
    }
  };

  return (
    <Box background={'white'} borderRadius={'xl'} width={'100%'} height={'18rem'} py={'1rem'} alignContent='space-between' boxShadow='md'>
      <DeleteFileAlert isOpen={isOpen} onClose={onClose} project={project} />
      <UpdateFileAlert isOpen={isOpenU} onClose={onCloseU} project={project} projects={projects} />
      <HStack height={'15%'} pl={'0.5rem'} w={'100%'}>
        <Heading w='75%' as='h1' fontWeight={'light'} size='md' noOfLines={1}>{project.folder_name}</Heading>
        <Box>
          <IconButton icon={<RiEditLine />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.edit')} onClick={onOpenU} />
          <IconButton icon={<RiDownload2Line />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.download')} onClick={onDownload} isLoading={loadingD} />
          <IconButton icon={<RiDeleteBinLine />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.delete')} onClick={onOpen} />
        </Box>
      </HStack>
      <VStack height={'85%'} spacing={'1.5rem'} pt={'0.5rem'} display='flex' alignItems={'flex-start'} alignContent={'flex-start'} justifyContent='flex-start'>
        {fileBuilder()}
      </VStack>
    </Box>
  );
};

export default ProjectCard;