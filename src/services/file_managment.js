import api from '../utils/api';

const URL = '/api/v1/transfer';

const downloadProject = async (folder) => {
  const response = await api.get(`${URL}/download/project/${folder.id_folder}`, { responseType: 'blob'});
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${folder.folder_name}.zip`);
  document.body.appendChild(link);
  link.click();
};

export {downloadProject};