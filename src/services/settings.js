import api from '../utils/api';

const settingsURL = '/api/v1/settings';

const getSettings = async () => {
  const response = await api.get(settingsURL);
  return response;
};

export default { getSettings };