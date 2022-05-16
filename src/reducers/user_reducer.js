import loginService from '../services/login';
import userService from '../services/user';
import api from '../utils/api';

export const loginUser = (content) => {
  return async (dispatch) => {
    const response = await loginService.login(content);

    window.localStorage.setItem('user', JSON.stringify(response.data));

    api.interceptors.request.use(function (config) {
      config.headers.Authorization = response.data.token.token;
      return config;
    });

    dispatch({
      type: 'SET_USER',
      data: response.data
    });
  };
};

export const createUser = (content) => {
  return async (dispatch) => {
    const response = await userService.createUser(content);

    dispatch({
      type: 'CREATE_USER',
      data: response.data
    });
  };
};

export const loadUser = () => {
  const loggedUserJSON = window.localStorage.getItem('user');
  if (loggedUserJSON) {
    const userParsed = JSON.parse(loggedUserJSON);
    api.interceptors.request.use(function (config) {
      config.headers.Authorization = userParsed.token.token;
      return config;
    });
    return {
      type: 'LOAD_USER',
      data: userParsed
    };
  }

  return {
    type: 'DO_NOTHING',
    data: null
  };
};

const reducer = (state = null, action) => {
  switch (action.type) {
  case ('SET_USER'):
    return action.data;
  case ('CLEAR_USER'):
    window.localStorage.removeItem('user');
    api.interceptors.request.handlers.forEach((inter, index) => api.interceptors.request.eject(index));
    return null;
  case ('LOAD_USER'):
    return action.data;
  case ('CREATE_USER'):
    return null;
  }
  return state;
};

export default reducer;