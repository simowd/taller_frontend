import api from '../utils/api';

const loginURL = '/api/v1/login';

const login = async (content) => {
  const response = await api.post(loginURL, content);
  return response;
};

export default { login };