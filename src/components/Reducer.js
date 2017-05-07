import {
  CREATE_NOTE,
  UPDATE_NOTE,
  OPEN_NOTE,
  CLOSE_NOTE,
} from './../constants';

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

export default reducer;
