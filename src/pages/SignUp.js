import { Flex } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import React from 'react';
import SignUpForm from '../components/Signup/SignUpForm';

const SignUp = () => {
  return (
    <Flex justifyContent={'center'} align={'center'}>
      <SkipNavContent />
      <SignUpForm />
    </Flex>
  );
};

export default SignUp;