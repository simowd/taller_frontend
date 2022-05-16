import api from '../utils/api'; 

const projectURL = '/api/v1/projects';

const getProjects = async () => {
  const folders = await api.get(projectURL);
  return folders;
};

const deleteProject = async (projectId) => {
  const response = await api.delete(`${projectURL}/${projectId}`);
  return response;
};

const updateProject = async (data, projectId) => {
  const response = await api.put(`${projectURL}/${projectId}`, data);
  return response;
};

export default { getProjects, deleteProject, updateProject };