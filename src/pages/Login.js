import { Flex } from '@chakra-ui/react';
import React from 'react';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  return (
    <Flex justifyContent={'center'} align={'center'}>
      <LoginForm />
    </Flex>
  );
};

export default Login;