import api from '../utils/api';

const folderURL = '/api/v1/projects';
const fileURL = '/api/v1/files';

const createFile = async (data, projectId) => {
  const response = await api.post(`${folderURL}/${projectId}/files`, data);

  return response;
};

const deleteFile = async (fileId) => {
  const response = await api.delete(`${fileURL}/${fileId}`);

  return response;
};

const updateFile = async (data, fileId) => {
  const response = await api.put(`${fileURL}/${fileId}`, data);

  return response;
};

export default { createFile, deleteFile, updateFile };