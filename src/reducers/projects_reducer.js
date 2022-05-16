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

export const deleteProject = (projectId) => {
  return async (dispatch) => {
    await projectService.deleteProject(projectId);
    dispatch({
      type: 'DELETE_PROJECT',
      data: projectId,
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
  case ('DELETE_PROJECT'):
    return state.filter(folder => folder.id_folder !== action.data);
  case('CLEAR_USER'):
    return null;
  }
  return state;
};

export default reducer;