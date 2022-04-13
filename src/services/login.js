import axios from 'axios';

const loginURL = '/api/v1/login';

const login = async (content) => {
  const response = await axios.post(loginURL, content);
  return response;
};

export default { login };