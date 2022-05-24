import { Icon, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { stringTranslate } from '../../../i18n';
import focusActionble from '../../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../../hooks/Sound';

const IconLink = ({ icon, name }) => {
  const [playSound] = useAccesibleSound(focusActionble);
  return(
    <Link as={RouterLink} onFocus={() => playSound()} variant={'link'} to={ name.toString() === 'files' ? '#' : `/s/${name}`} aria-label={stringTranslate(`sidebar.${name}`)}>
      <Icon as={icon} w={8} h={8} color='#EBEBEC' />
    </Link>
  );
};

export default IconLink;