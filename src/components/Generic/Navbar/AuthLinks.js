import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { stringTranslate } from '../../../i18n/message_handle';
import { useSelector } from 'react-redux';

const AuthLinks = () => {
  const user = useSelector(state => state.user);

  const authBuilder = () => {
    if (user) {
      return null;
    }
    else {
      return (
        <Stack spacing='1rem' direction={'row'} justify={'flex-end'} flex={{ base: 2, md: 0 }}>
          <Button
            as={RouterLink}
            to='/signin'
            fontSize={'sm'}
            alignItems={'center'}
            fontWeight={400}
            variant={'outline'}
            bg={'white'}
            color={'black'}
            href={'#'}>
            {stringTranslate('navbar.login')}
          </Button>
          <Button
            as={RouterLink}
            to='/signup'
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#35343F'}
            href={'#'}
            _hover={{
              bg: 'gray.800',
            }}>
            {stringTranslate('navbar.signup')}
          </Button>
        </Stack>
      );
    }
  };

  return (
    <>
      {authBuilder()}
    </>
  );

};

export default AuthLinks;