import { Box, HStack, Skeleton, VStack } from '@chakra-ui/react';
import React from 'react';

const LoadingProjectCard = () => {

  return (
    <Box background={'white'} borderRadius={'xl'} width={'100%'} height={'18rem'} py={'1rem'} alignContent='space-between'>
      <HStack height={'15%'} pl={'0.5rem'} w={'100%'}>
        <Skeleton w='100%' />
      </HStack>

      <VStack height={'85%'} spacing={'1.5rem'} pt={'0.5rem'} display='flex' alignItems={'start'} justifyContent='space-between'>
        <Skeleton  height={'20%'} width={'77%'} />
        <Skeleton  height={'20%'} width={'77%'} />
        <Skeleton  height={'20%'} width={'77%'} />
      </VStack>
    </Box>
  );
};

export default LoadingProjectCard;