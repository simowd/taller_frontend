import api from '../utils/api';
import FormData from 'form-data';

const userURL = '/api/v1/users';

const createUser = async (content) => {
  //Use the type of form to send
  var data = new FormData();
  //Set up the data
  data.append('name', content.name);
  data.append('last_name', content.last_name);
  data.append('username', content.username);
  data.append('email', content.email);
  data.append('id_country', content.country.toUpperCase());
  data.append('id_gender', content.gender);
  data.append('id_language', content.language);
  data.append('password', content.password);

  const response = await api.post(userURL, data);

  return response;
};

const getUserInfo = async (userId) => {
  const response = await api.get(`${userURL}/${userId}`);
  return response;
};

const updateUserInfo = async (data) => {
  const response = await api.put(userURL, data);
  return response;
};

const updatePassword = async (data) => {
  const response = await api.put(`${userURL}/password`, data);
  return response;
};

export default { createUser, getUserInfo, updateUserInfo, updatePassword };