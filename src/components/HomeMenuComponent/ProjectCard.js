import { Box, Flex, Heading, HStack, Icon, IconButton, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiEditLine, RiDownload2Line, RiDeleteBinLine, RiFileCodeLine } from 'react-icons/ri';
import { stringTranslate } from '../../i18n';
import { downloadProject } from '../../services/file_managment';

const ProjectCard = ({ project }) => {
  const [loadingD, setLoadingD] = useState(false);

  const onDownload = async () => {
    setLoadingD(true);
    await downloadProject(project);
    setLoadingD(false);
  };

  return (
    <Box background={'white'} borderRadius={'xl'} width={'18rem'} height={'18rem'} py={'1rem'}>
      <HStack>
        <Heading as='h1' fontWeight={'light'} size='md' noOfLines={1}>{project.folder_name}</Heading>
        <IconButton icon={<RiEditLine />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.edit')} />
        <IconButton icon={<RiDownload2Line />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.download')} onClick={onDownload} isLoading={loadingD}/>
        <IconButton icon={<RiDeleteBinLine />} size={'sm'} variant={'ghost'} aria-label={stringTranslate('home.delete')} />
      </HStack>

      <VStack height={'100%'} spacing={'1.5rem'} pt={'0.5rem'} display='flex' alignItems={'start'}>
        <Flex background={'#282C34'} height={'20%'} width={'77%'} borderRightRadius={'3xl'}>
          <HStack>
            <Icon color={'white'} as={RiFileCodeLine} w={5} h={5}></Icon>
            <Text color={'white'}> Hola </Text>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ProjectCard;