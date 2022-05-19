import { Icon, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { stringTranslate } from '../../../i18n';

const IconLink = ({ icon, name }) => {
  return(
    <Link as={RouterLink} variant={'link'} to={ name.toString() === 'files' ? '#' : `/s/${name}`} aria-label={stringTranslate(`sidebar.${name}`)}>
      <Icon as={icon} w={8} h={8} color='#EBEBEC' />
    </Link>
  );
};

export default IconLink;