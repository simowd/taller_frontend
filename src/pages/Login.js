import { Flex } from '@chakra-ui/react';
import React from 'react';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  return (
    <Flex justifyContent={'center'} alignContent='center'>
      <LoginForm />
    </Flex>
  );
};

export default Login;