import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import NoteAppContainer from '../src/components/NoteAppContainer';
import { Provider } from './../src/components/Redux.js';
import { createStore, applyMiddleware } from './components/CreateStore';
import reducer from './components/Reducer';

injectGlobal`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    font-family: 'Helvetica', sans-serif;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
    font-family: inherit;
  }
`;

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    action({ dispatch, getState });
  }
  return next(action);
};

const loggingMiddleware = ({ getState }) => next => action => {
  console.info('before', getState());
  console.info('action', action);
  const result = next(action);
  console.info('after', getState());
  return result;
};
const store = createStore(
  reducer,
  applyMiddleware(loggingMiddleware, thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}><NoteAppContainer /></Provider>,
  document.getElementById('root')
);
