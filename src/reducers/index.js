import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user_reducer from './user_reducer';
import toast_reducer from './toast_reducer';


const reducer = combineReducers({
  user: user_reducer,
  toast: toast_reducer,
});

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;