import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user_reducer from './user_reducer';
import project_reducer from './projects_reducer';


const reducer = combineReducers({
  user: user_reducer,
  projects: project_reducer
});

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;