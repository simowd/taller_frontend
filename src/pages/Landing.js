import React, { useState } from 'react';
import { Grid, GridItem, Icon, IconButton } from '@chakra-ui/react';
import LandingPageEditor from '../components/LandingPageEditor';
import { FaPlay } from 'react-icons/fa';
import LandingPageConsole from '../components/LandingPageConsole';
import useSkulpt from '../hooks/Skulpt';

const Landing = () => {
  const { userlessCode, output } = useSkulpt();
  const [code, setCode] = useState();

  const execute = () => {
    userlessCode(code);
  };

  return (
    <Grid w='100%' h={'100%'} templateColumns={'1fr 4rem 1fr'}>
      <GridItem display={'flex'} ml={'1rem'}>
        <LandingPageEditor setCode={setCode}/>
      </GridItem>
      <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
        <IconButton aria-label='' h='98%' w='80%' px={'2%'} py={'5%'} onClick={execute} icon={<Icon as={FaPlay} />}></IconButton>
      </GridItem>
      <GridItem display={'flex'} justifyContent='center' alignItems={'center'} mr={'1rem'}>
        <LandingPageConsole output={output}/>
      </GridItem>
    </Grid>
  );
};

export default Landing;