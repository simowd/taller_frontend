import api from '../utils/api';

const outputURL = '/api/v1/output';

const newOutput = async (data, fileId) => {
  console.log(data);
  const response = await api.post( `${outputURL}/${fileId}`,data);

  return response;
};

export default {newOutput};