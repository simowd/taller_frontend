import { Flex } from '@chakra-ui/react';
import React from 'react';
import SignUpForm from '../components/Signup/SignUpForm';

const SignUp = () => {
  return (
    <Flex justifyContent={'center'} align={'center'}>
      <SignUpForm />
    </Flex>
  );
};

export default SignUp;