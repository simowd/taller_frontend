import { Grid, GridItem, Icon, IconButton } from '@chakra-ui/react';
import React from 'react';
import EditorInstance from '../components/EditorInstance';
import { FaPlay } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ConsoleInstance from '../components/ConsoleInstance';

const Editor = () => {
  const user = useSelector(state => state.user);

  return (
    <Grid h='100vh' w='100%' templateColumns={'15rem 1fr 4rem 1fr'}>
      <GridItem background={'green'}>

      </GridItem>
      <GridItem display={'flex'}>
        <EditorInstance user={user} />
      </GridItem>
      <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
        <IconButton aria-label='' h='98%' w='80%' px={'2%'} py={'5%'} icon={<Icon as={FaPlay} />}></IconButton>
      </GridItem>
      <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
        <ConsoleInstance user={user} />
      </GridItem>
    </Grid>
  );
};

export default Editor;