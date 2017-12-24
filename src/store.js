import { createStore, combineReducers } from 'redux';
import flashcard from './reducers/flashcard';
import auth from './reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  combineReducers({ flashcard, auth }),
  composeWithDevTools()
);
