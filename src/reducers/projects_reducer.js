import projectService from '../services/projects';

export const loadProjects = () => {
  return async (dispatch) => {
    const response = await projectService.getProjects();

    dispatch({
      type: 'SET_PROJECTS',
      data: response.data,
    });
  };
};

const reducer = (state = null, action) => {
  switch (action.type) {
  case ('SET_PROJECTS'):
    return action.data;
  case ('CLEAR_PROJECTS'):
    return null;
  case ('ADD_PROJECT'):
    return action.data;
  }
  return state;
};

export default reducer;