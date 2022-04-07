import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';


const reducer = combineReducers({
  user: userReducer,
});

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;