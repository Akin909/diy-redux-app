import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import NoteAppContainer from '../src/components/NoteAppContainer';
import { Provider } from './../src/components/Redux.js';
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

// CREATE STORE
const validateAction = action => {
  if (!action || typeof action !== 'object' || Array.isArray(action)) {
    throw new Error('Action must be an object');
  }
  if (typeof action.type === 'undefined') {
    throw new Error('Action must have a type');
  }
};

const createStore = reducer => {
  let state = undefined;
  const subscribers = [];
  const store = {
    dispatch: action => {
      validateAction(action);
      state = reducer(state, action);
      subscribers.forEach(handler => handler());
    },
    getState: () => state,
    subscribe: handler => {
      subscribers.push(handler);
      return () => {
        const index = subscribers.indexOf(handler);
        if (index > 0) {
          subscribers.splice(index, 1);
        }
      };
    },
  };
  store.dispatch({ type: '@@redux/INIT' });
  return store;
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}><NoteAppContainer /></Provider>,
  document.getElementById('root')
);
