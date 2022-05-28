import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeMenuComponent from '../components/HomeMenuComponent';
import { loadProjects } from '../reducers/projects_reducer';

const HomeMenu = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = async () => {
      if(user){
        dispatch(loadProjects());
      }
    };
    
    data();
  }, [user]);

  return(
    <div>
      <HomeMenuComponent />
    </div>
  );
};

export default HomeMenu;