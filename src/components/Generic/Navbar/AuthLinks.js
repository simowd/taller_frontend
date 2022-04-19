import { Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { stringTranslate } from '../../../i18n/message_handle';

const AuthLinks = () => {
  return (
    <Stack spacing='1rem' direction={'row'} justify={'flex-end'} flex={{ base: 2, md: 0 }}>
      <Button
        as={RouterLink}
        to='/signin'
        fontSize={'sm'}
        alignItems={'center'}
        fontWeight={400}
        variant={'link'}
        href={'#'}>
        { stringTranslate('navbar.login') }
      </Button>
      <Button
        as={RouterLink}
        to='/signup'
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'purple.400'}
        href={'#'}
        _hover={{
          bg: 'purple.300',
        }}>
        { stringTranslate('navbar.signup') }
      </Button>
    </Stack>
  );
};

export default AuthLinks;