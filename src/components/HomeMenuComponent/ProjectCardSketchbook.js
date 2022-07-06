import { Box, Flex, Heading, HStack, Icon, IconButton, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiEditLine, RiDownload2Line, RiDeleteBinLine, RiFolderWarningLine } from 'react-icons/ri';
import { stringTranslate } from '../../i18n';
import { downloadProject } from '../../services/file_managment';
import { useToastHook } from '../../hooks/Toast';
import { Link as RouteLink } from 'react-router-dom';
import FileSpace from './FileSpace';
import focusActionble from '../../sounds/focus_actionable.ogg';
import viewEntered from '../../sounds/view_entered.ogg';
import useAccesibleSound from '../../hooks/Sound';

const ProjectCardSketchbook = ({ project }) => {
  const [loadingD, setLoadingD] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();
  const [playSound] = useAccesibleSound(focusActionble);
  const [playSoundEntered] = useAccesibleSound(viewEntered);

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
    <Box background={useColorModeValue('white', '#282C34')} borderRadius={'xl'} width={'100%'} height={'18rem'} py={'1rem'} alignContent='space-between' boxShadow='md' className='project_move'>
      <HStack height={'15%'} pl={'0.5rem'} w={'100%'}>
        <Link onFocus={() => playSound()} w='75%' as={RouteLink} onClick={() => playSoundEntered()} to={`/e/${project.id_folder}`}>
          <Heading w='75%' as='h1' fontWeight={'light'} size='md' noOfLines={1}>{project.folder_name}</Heading>
        </Link>
        <Box className='project_options'>
          <IconButton icon={<RiEditLine />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.edit')} isDisabled />
          <IconButton onFocus={() => playSound()} icon={<RiDownload2Line />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.download')} onClick={onDownload} isLoading={loadingD} />
          <IconButton icon={<RiDeleteBinLine />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.delete')} isDisabled />
        </Box>
      </HStack>
      <VStack height={'85%'} spacing={'1.5rem'} pt={'0.5rem'} display='flex' alignItems={'flex-start'} alignContent={'flex-start'} justifyContent='flex-start'>
        {fileBuilder()}
      </VStack>
    </Box>
  );
};

export default ProjectCardSketchbook;