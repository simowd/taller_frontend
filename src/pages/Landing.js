import React, { useState } from 'react';
import { Grid, GridItem, Icon, IconButton } from '@chakra-ui/react';
import LandingPageEditor from '../components/LandingPageEditor';
import { FaPlay } from 'react-icons/fa';
import LandingPageConsole from '../components/LandingPageConsole';
import useSkulpt from '../hooks/Skulpt';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import useKeypress from 'react-use-keypress';
import { stringTranslate } from '../i18n';


const Landing = () => {
  const { userlessCode, output } = useSkulpt();
  const [code, setCode] = useState();
  useKeypress(['F4', ''], () => {
    if(event.key === 'F4') {
      document.getElementById('console').focus();
      execute();
    }
  });

  const execute = () => {
    userlessCode(code);
  };

  return (
    <Grid w='100%' h={'100%'} templateColumns={'1fr 4rem 1fr'}>
      <GridItem display={'flex'} ml={'1rem'} aria-label='Editor'>
        <SkipNavContent />
        <LandingPageEditor setCode={setCode} />
      </GridItem>
      <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
        <IconButton aria-label={stringTranslate('editor.run')} h='98%' w='80%' px={'2%'} py={'5%'} onClick={execute} icon={<Icon as={FaPlay} />}></IconButton>
      </GridItem>
      <GridItem display={'flex'} justifyContent='center' alignItems={'center'} mr={'1rem'} aria-label='Terminal'>
        <LandingPageConsole output={output} />
      </GridItem>
    </Grid>
  );
};

export default Landing;