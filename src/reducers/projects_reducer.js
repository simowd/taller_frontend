import projectService from '../services/projects';
import { uploadProject } from '../services/file_managment';


export const loadProjects = () => {
  return async (dispatch) => {
    const response = await projectService.getProjects();
    dispatch({
      type: 'SET_PROJECTS',
      data: response.data,
    });
  };
};

export const createProject = (data) => {
  return async (dispatch) => {
    const response = await projectService.createProject(data);
    dispatch({
      type: 'ADD_PROJECT',
      data: {...response.data, files: []},
    });
  };
};

export const uploadProjectFile = (file) => {
  return async (dispatch) => {
    const response = await uploadProject(file);
    dispatch({
      type: 'ADD_PROJECT',
      data: {...response.data},
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

export const updateProject = (data, projectId) => {
  return async (dispatch) => {
    await projectService.updateProject(data, projectId);
    dispatch({
      type: 'UPDATE_PROJECT',
      data: {
        data: data,
        id_project: projectId
      },
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
    return state.concat(action.data);
  case ('DELETE_PROJECT'):
    return state.filter(folder => folder.id_folder !== action.data);
  case ('UPDATE_PROJECT'):
    return state.map(folder => folder.id_folder === action.data.id_project ? {...folder, ...action.data.data} : folder);
  case('CLEAR_USER'):
    return null;
  }
  return state;
};

export default reducer;