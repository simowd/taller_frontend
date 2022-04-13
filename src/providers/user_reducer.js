import loginService from '../services/login';

export const loginUser = (content) => {
  return async (dispatch) => {
    const response = await loginService.login(content);
    console.log(response);
    dispatch({
      type: 'SET_USER',
      data: content
    });
  };
};

const reducer = (state = null, action) => {
  switch (action.type) {
  case ('SET_USER'):
    return action.data;
  }
  return state;
};

export default reducer;