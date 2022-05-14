import { HStack, Icon, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import React from 'react';
import { stringTranslate } from '../../../i18n';

const IconLink = ({ icon, name }) => {
  const location = useLocation();
  console.log(location);

  return (
    <Link as={RouterLink} variant={'link'} to={`/s/${name}`} aria-label={stringTranslate(`sidebar.${name}`)}>
      <HStack spacing={'24px'}>
        <Icon as={icon} w={8} h={8} color='#EBEBEC' />
        <Text fontWeight={location.pathname.includes(name) ? 'bold' : 'light'} color={location.pathname.includes(name)? 'white' : '#EBEBEC'}> {stringTranslate(`sidebar.${name}`)} </Text>
      </HStack>
    </Link>
  );
};

export default IconLink;