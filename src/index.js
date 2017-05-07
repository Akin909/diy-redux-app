import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import NoteAppContainer from '../src/components/NoteAppContainer';
import { Provider } from './../src/components/Redux.js';
import { createStore, applyMiddleware } from './components/CreateStore';

import { CREATE_NOTE, UPDATE_NOTE, OPEN_NOTE, CLOSE_NOTE } from './constants';

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

const initialState = {
  nextNoteId: 1,
  notes: {},
  openNoteId: null,
};

//REDUCER(S)
const handlers = {
  [CREATE_NOTE]: (state, action) => {
    const id = state.nextNoteId;
    const newNote = {
      id,
      content: '',
    };
    return {
      ...state,
      nextNoteId: id + 1,
      openNoteId: id,
      notes: {
        ...state.notes,
        [id]: newNote,
      },
    };
  },
  [OPEN_NOTE]: (state, action) => {
    return {
      ...state,
      openNoteId: action.id,
    };
  },
  [CLOSE_NOTE]: (state, action) => {
    return {
      ...state,
      openNoteId: null,
    };
  },
  [UPDATE_NOTE]: (state, action) => {
    const { id, content } = action;
    const editedNote = {
      ...state.notes[id],
      content,
    };
    return {
      ...state,
      notes: {
        ...state.notes,
        [id]: editedNote,
      },
    };
  },
};

const reducer = (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};

const delayMiddleware = () => next => action => {
  setTimeout(() => {
    next(action);
  }, 1000);
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
  applyMiddleware(loggingMiddleware, delayMiddleware)
);

ReactDOM.render(
  <Provider store={store}><NoteAppContainer /></Provider>,
  document.getElementById('root')
);
