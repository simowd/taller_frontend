import { Grid, GridItem, Icon, IconButton } from '@chakra-ui/react';
import { SkipNavContent } from '@chakra-ui/skip-nav';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import useKeypress from 'react-use-keypress';
import LandingPageConsole from '../components/LandingPageConsole';
import ShareFilePageEditor from '../components/ShareFilePageEditor';
import useSkulpt from '../hooks/Skulpt';
import fileService from '../services/editor';

const SharedFile = () => {
  const { fileId } = useParams();
  const { userlessCode, output } = useSkulpt();
  const [code, setCode] = useState();
  const navigate = useNavigate();

  useKeypress(['F4', ''], () => {
    if(event.key === 'F4') {
      document.getElementById('console').focus();
      execute();
    }
  });

  const execute = () => {
    userlessCode(code);
  };

  useEffect(() => {
    if(fileId) {
      const getData = async () => {
        try {
          const data = await fileService.getFile(fileId);
          setCode(data.data.content);
        }
        catch (e) {
          navigate('/');
        }
      };
      
      getData();
    }
    else {
      navigate('/');
    }
  }, []);

  return (
    <Grid w='100%' h={'100%'} templateColumns={'1fr 4rem 1fr'}>
      <GridItem display={'flex'} ml={'1rem'}>
        <SkipNavContent />
        <ShareFilePageEditor file={fileId} setCode={setCode} code={code}/>
      </GridItem>
      <GridItem display={'flex'} justifyContent='center' alignItems={'center'}>
        <IconButton aria-label='' h='98%' w='80%' px={'2%'} py={'5%'} onClick={execute} icon={<Icon as={FaPlay} />}></IconButton>
      </GridItem>
      <GridItem display={'flex'} justifyContent='center' alignItems={'center'} mr={'1rem'}>
        <LandingPageConsole output={output} />
      </GridItem>
    </Grid>
  );
};

export default SharedFile;