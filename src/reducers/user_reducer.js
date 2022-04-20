import loginService from '../services/login';
import { createToast } from './toast_reducer';

export const loginUser = (content) => {
  return async (dispatch) => {
    try {
      const response = await loginService.login(content);
      dispatch({
        type: 'SET_USER',
        data: response.data
      });
    }
    catch (error) {
      //Setting up error data
      const error_data = {
        data: error.response.data,
        status: error.response.status,
      };

      dispatch(createToast(error_data, 'error', 'login'));
    }
  };
};

export const clearUser = () => {
  window.localStorage.removeItem('user');
  return {
    clearUser: 'CLEAR_USER',
    data: ''
  };
};

export const loadUser = () => {
  const loggedUserJSON = window.localStorage.getItem('user');
  if (loggedUserJSON) {
    const userParsed = JSON.parse(loggedUserJSON);
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
    return null;
  case ('LOAD_USER'):
    return action.data;
  }
  return state;
};

export default reducer;