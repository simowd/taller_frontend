import api from '../utils/api';

const URL = '/api/v1/transfer';

const downloadProject = async (folder) => {
  const response = await api.get(`${URL}/download/project/${folder.id_folder}`, { responseType: 'blob' });
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${folder.folder_name}.zip`);
  document.body.appendChild(link);
  link.click();
};

const downloadFile = async (file) => {
  const response = await api.get(`${URL}/download/file/${file.id_file}`, { responseType: 'blob' });
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${file.file_name}`);
  document.body.appendChild(link);
  link.click();
};

const buildFileDownload = async (projectData, file, currentCode) => {
  const link = document.createElement('a');
  const currentFile = projectData.editorData.find(element => element.id_file === file.id_file);
  console.log(currentCode);
  let fileBlob = '';
  if (currentCode.file === file.id_file) {
    fileBlob = new Blob([currentCode.code], {
      type: 'text/x-python'
    });
  }
  else {
    fileBlob = new Blob([currentFile.value], {
      type: 'text/x-python'
    });
  }

  const currentFileName = projectData.project.files.find(element => element.id_file === file.id_file);

  link.href = window.URL.createObjectURL(fileBlob);
  link.download = currentFileName.file_name;
  document.body.appendChild(link);
  link.click();
};

const uploadFile = async (file, projectId) => {
  var data = new FormData();
  data.append('file', file);
  const response = await api.post(`${URL}/upload/file/${projectId}`, data);

  return response;
};

const uploadProject = async (file) => {
  var data = new FormData();
  data.append('file', file);
  const response = await api.post(`${URL}/upload/project`, data);

  return response;
};

export { downloadProject, uploadFile, uploadProject, downloadFile, buildFileDownload };