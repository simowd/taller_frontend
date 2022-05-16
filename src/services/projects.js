import api from '../utils/api'; 

const projectURL = '/api/v1/projects';

const getProjects = async () => {
  const folders = await api.get(projectURL);
  return folders;
};

export default { getProjects };