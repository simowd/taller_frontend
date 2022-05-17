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

// export const updateProject = (data, projectId) => {
//   return async (dispatch) => {
//     await projectService.updateProject(data, projectId);
//     dispatch({
//       type: 'UPDATE_PROJECT',
//       data: {
//         data: data,
//         id_project: projectId
//       },
//     });
//   };
// };

const reducer = (state = null, action) => {
  switch (action.type) {
  case ('SET_SETTINGS'):
    return action.data;
  case('CLEAR_USER'):
    return null;
  }
  return state;
};

export default reducer;