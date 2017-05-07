import React from 'react';
import styled from 'styled-components';

import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

const NoteAppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ABF0D1;
`;

const initialState = {
  nextNoteId: 1,
  notes: {},
};

const NoteApp = ({
  notes,
  openNoteId,
  onAddNote,
  onChangeNote,
  onOpenNote,
  onCloseNote,
}) => {
  return (
    <NoteAppContainer>
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
    </NoteAppContainer>
  );
};

export default NoteApp;
