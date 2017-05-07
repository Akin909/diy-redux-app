import NoteApp from './NoteApp';
import { connect } from './Redux.js';

import {
  CREATE_NOTE,
  UPDATE_NOTE,
  OPEN_NOTE,
  CLOSE_NOTE,
} from './../constants';

const createFakeApi = () => {
  let _id = 0;
  const createNote = () =>
    new Promise(resolve =>
      setTimeout(() => {
        _id++;
        resolve({
          id: `${_id}`,
        });
      }, 1000)
    );
  return {
    createNote,
  };
};

const api = createFakeApi();

const mapStateToProps = state => ({
  notes: state.notes,
  openNoteId: state.openNoteId,
});

//ACTION CREATOR
const createNote = () => {
  return ({ dispatch }) => {
    dispatch({
      type: CREATE_NOTE,
    });
    api.createNote().then(({ id }) => {
      dispatch({
        type: CREATE_NOTE,
        id,
      });
    });
  };
};

const mapDispatchToProps = dispatch => ({
  onAddNote: () => dispatch(createNote()),

  onChangeNote: (id, content) =>
    dispatch({
      type: UPDATE_NOTE,
      id,
      content,
    }),

  onOpenNote: id =>
    dispatch({
      type: OPEN_NOTE,
      id,
    }),

  onCloseNote: () =>
    dispatch({
      type: CLOSE_NOTE,
    }),
});

const NoteAppContainer = connect(mapStateToProps, mapDispatchToProps)(NoteApp);

export default NoteAppContainer;
