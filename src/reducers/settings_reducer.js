import settingsService from '../services/settings';

export const loadSettings = () => {
  return async (dispatch) => {
    const response = await settingsService.getSettings();
    window.localStorage.setItem('chakra-ui-color-mode', response.data.dark_light === 1 ? 'dark' : 'light');
    dispatch({
      type: 'SET_SETTINGS',
      data: response.data,
    });
  };
};

export const updateSettings = (data) => {
  return async (dispatch) => {
    await settingsService.updateSettings(data);
    dispatch({
      type: 'UPDATE_SETTING',
      data: data
    });
  };
};

const reducer = (state = null, action) => {
  switch (action.type) {
  case ('SET_SETTINGS'):
    return action.data;
  case ('UPDATE_SETTING'):
    return {...state, ...action.data};
  case('CLEAR_USER'):
    window.localStorage.setItem('chakra-ui-color-mode', 'light');
    return null;
  }
  return state;
};

export default reducer;