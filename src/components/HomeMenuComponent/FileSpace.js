import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { RiFileCodeLine } from 'react-icons/ri';

const FileSpace = ({file}) => {
  return (
    <Flex background={'#282C34'} height={'20%'} width={'77%'} borderRightRadius={'3xl'} mt={'1rem'}>
      <HStack pl={'0.5rem'}>
        <Icon color={'white'} as={RiFileCodeLine} w={5} h={5}></Icon>
        <Text fontWeight={'light'} color={'white'}> {file.file_name} </Text>
      </HStack>
    </Flex>
  );
};

export default FileSpace;