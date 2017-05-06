import React from 'react';

import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

const initialState = {
  nextNoteId: 1,
  notes: {},
};

window.state = initialState;

const NoteApp = ({
  notes,
  openNoteId,
  onAddNote,
  onChangeNote,
  onOpenNote,
  onCloseNote,
}) => {
  return (
    <div>
      {openNoteId
        ? <NoteEditor
            note={notes[openNoteId]}
            onChangeNote={onChangeNote}
            onCloseNote={onCloseNote}
          />
        : <div>
            <NoteList notes={notes} onOpenNote={onOpenNote} />
            <button onClick={onAddNote}>New Note</button>
          </div>}
    </div>
  );
};

export default NoteApp;
