import api from '../utils/api';

const settingsURL = '/api/v1/settings';

const getSettings = async () => {
  const response = await api.get(settingsURL);
  return response;
};

const updateSettings = async (data) => {
  const response = await api.put(settingsURL, data);
  return response;
};

export default { getSettings, updateSettings };