import api from '../utils/api';

const filesURL = '/api/v1/editor';

const getProjects = async (projectId) => {
  const response = await api.get(`${filesURL}/project/${projectId}`);
  return response;
};

export default {getProjects};