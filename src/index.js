import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
const initialState = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App {...initialState} />
  </Provider>,
  document.getElementById('root')
);
