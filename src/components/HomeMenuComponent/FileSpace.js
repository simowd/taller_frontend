import { Flex, HStack, Icon, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { RiFileCodeLine } from 'react-icons/ri';
import { Link as RouteLink } from 'react-router-dom';

const FileSpace = ({ file }) => {
  return (
    <Flex background={useColorModeValue('#282C34','#FAF7F7')} height={'20%'} width={'77%'} borderRightRadius={'3xl'} mt={'1rem'}>
      <Link display={'flex'} alignItems={'center'} alignContent={'center'} pl={'0.5rem'} as={RouteLink} to={`/e/${file.folder_id_folder}`} state={{ id_file: file.id_file }} w='100%'>
        <HStack alignContent={'center'} alignItems={'center'}>
          <Icon color={useColorModeValue('white', 'black')} as={RiFileCodeLine} w={5} h={5}></Icon>
          <Text fontWeight={'light'} color={useColorModeValue('white', 'black')}> {file.file_name} </Text>
        </HStack>
      </Link>
    </Flex >
  );
};

export default FileSpace;