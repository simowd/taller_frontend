import { Flex } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import React from 'react';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  return (
    <Flex justifyContent={'center'} align={'center'}>
      <SkipNavContent />
      <LoginForm />
    </Flex>
  );
};

export default Login;