import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user_reducer from './user_reducer';
import project_reducer from './projects_reducer';
import settings_reducer from './settings_reducer';

const composeEnhancers = composeWithDevTools({ trace: true });

const reducer = combineReducers({
  user: user_reducer,
  projects: project_reducer,
  settings: settings_reducer,
});

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;