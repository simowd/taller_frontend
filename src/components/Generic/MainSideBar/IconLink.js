import { HStack, Icon, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { stringTranslate } from '../../../i18n';

const IconLink = ({ icon, name }) => {
  return (
    <Link as={RouterLink} variant={'link'} to='/e' aria-label={stringTranslate(`sidebar.${name}`)}>
      <HStack spacing={'24px'}>
        <Icon as={icon} w={8} h={8} color='#EBEBEC' />
        <Text color={'white'}> {stringTranslate(`sidebar.${name}`)} </Text>
      </HStack>
    </Link>
  );
};

export default IconLink;