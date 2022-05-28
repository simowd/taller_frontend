import { Flex, Heading, HStack, Icon, IconButton, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDownload2Line, RiFileCodeLine } from 'react-icons/ri';
import { useToastHook } from '../../hooks/Toast';
import { stringTranslate } from '../../i18n';
import { buildFileDownload } from '../../services/file_managment';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';

const FileSpace = ({ file, projectData, setCurrentFile, currentCode }) => {

  const [loadingD, setLoadingD] = useState(false);
  const [playSound] = useAccesibleSound(focusActionble);
  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  const onDownload = async () => {
    try {
      setLoadingD(true);
      await buildFileDownload(projectData, file, currentCode);
      setLoadingD(false);
    }
    catch (error) {
      console.log(error);
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

  const setFile = () => {
    setCurrentFile(file.id_file);
  };

  return (
    <Flex background={useColorModeValue('#282C34', '#FAF7F7')} height={'3rem'} width={'100%'} borderRightRadius={'3xl'} mt={'1rem'}>
      <HStack pl={'0.5rem'} w={'100%'} >
        <Flex maxWidth={'65%'} width={'65%'} as={'button'} onFocus={() => playSound()} onClick={setFile} noOfLines={1}>
          <HStack spacing={1}>
            <Icon color={useColorModeValue('white', 'black')} as={RiFileCodeLine} w={5} h={5}></Icon>
            <Heading fontWeight={'light'} fontSize={'14'} size={'sm'} color={useColorModeValue('white', 'black')} noOfLines={1}> {file.file_name} </Heading>
          </HStack>
        </Flex>
        <HStack align={'center'} spacing={0}>
          <IconButton onFocus={() => playSound()} color={useColorModeValue('white', 'black')} icon={<RiDownload2Line />} size={'md'} variant={'link'} aria-label={stringTranslate('home.download')} onClick={onDownload} isLoading={loadingD} />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default FileSpace;