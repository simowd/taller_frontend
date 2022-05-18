import settingsService from '../services/settings';

export const loadSettings = () => {
  return async (dispatch) => {
    const response = await settingsService.getSettings();
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
    return null;
  }
  return state;
};

export default reducer;