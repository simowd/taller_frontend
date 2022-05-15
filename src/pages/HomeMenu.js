import { SkipNavContent } from '@chakra-ui/skip-nav';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HomeMenuComponent from '../components/HomeMenuComponent';
import { getProjects } from '../services/projects';

const HomeMenu = () => {
  const user = useSelector(state => state.user);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const data = async () => {
      if(user){
        console.log('Ingresa');
        const data = await getProjects();
        setProjects(data.data);
      }
    };
    
    data();
  }, [user]);

  return(
    <div>
      <SkipNavContent />
      <HomeMenuComponent projects={projects}/>
    </div>
  );
};

export default HomeMenu;