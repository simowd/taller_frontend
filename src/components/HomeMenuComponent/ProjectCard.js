import { Box, Flex, Heading, HStack, Icon, IconButton, Link, Text, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiEditLine, RiDownload2Line, RiDeleteBinLine, RiFolderWarningLine, RiShareBoxLine } from 'react-icons/ri';
import { stringTranslate } from '../../i18n';
import { downloadProject } from '../../services/file_managment';
import DeleteFileAlert from './DeleteFileAlert';
import { useToastHook } from '../../hooks/Toast';
import UpdateFileAlert from './UpdateFileAlert';
import FileSpace from './FileSpace';
import { Link as RouteLink } from 'react-router-dom';
import focusActionble from '../../sounds/focus_actionable.ogg';
import viewEntered from '../../sounds/view_entered.ogg';
import useAccesibleSound from '../../hooks/Sound';
import ShareModal from './ShareModal';

const ProjectCard = ({ project, projects }) => {
  const [loadingD, setLoadingD] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenU, onOpen: onOpenU, onClose: onCloseU } = useDisclosure();
  const [playSound] = useAccesibleSound(focusActionble);
  const [playSoundEntered] = useAccesibleSound(viewEntered);
  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();
  const { isOpen: isOpenS, onOpen: onOpenS, onClose: onCloseS } = useDisclosure();

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
    <Box background={useColorModeValue('white', '#282C34')} borderRadius={'xl'} width={'100%'} height={'18rem'} py={'1rem'} alignContent='space-between' boxShadow='md'>
      <DeleteFileAlert isOpen={isOpen} onClose={onClose} project={project} />
      <UpdateFileAlert isOpen={isOpenU} onClose={onCloseU} project={project} projects={projects} />
      <ShareModal isOpen={isOpenS} onClose={onCloseS} folder={project}/>
      <HStack height={'15%'} pl={'0.5rem'} w={'100%'}>
        <Link onFocus={() => playSound()} w='70%'as={RouteLink} to={`/e/${project.id_folder}`} onClick={() => playSoundEntered()}>
          <Heading as='h1' fontWeight={'light'} size='md' noOfLines={1}>{project.folder_name}</Heading>
        </Link>
        <Box justifyContent={'flex-end'}>
          <IconButton onFocus={() => playSound()} icon={<RiEditLine />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.edit')} onClick={onOpenU} />
          <IconButton onFocus={() => playSound()} icon={<RiDownload2Line />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.download')} onClick={onDownload} isLoading={loadingD} />
          <IconButton onFocus={() => playSound()} icon={<RiDeleteBinLine />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.delete')} onClick={onOpen} />
          {project.private ? null : <IconButton onFocus={() => playSound()} icon={<RiShareBoxLine />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.share')} onClick={onOpenS} />}
        </Box>
      </HStack>
      <VStack height={'85%'} spacing={'1.5rem'} pt={'0.5rem'} display='flex' alignItems={'flex-start'} alignContent={'flex-start'} justifyContent='flex-start'>
        {fileBuilder()}
      </VStack>
    </Box>
  );
};

export default ProjectCard;