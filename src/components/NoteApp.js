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
  justify-content: flex-start;
  background-color: #ABF0D1;
`;
const NoteListContainer = styled(NoteAppContainer)`
  width: 50%;
  height: 50%;
  background-color: whitesmoke;
`;
const Button = styled.button`
  border: none;
  box-shadow: 0px 1px 1px grey;
`;

const Title = styled.h1`
  font-family: 'Helvetica', sans-serif;
  color: whitesmoke;
  text-shadow: 0px 1px 1px black;
  text-decoration: underline;
`;

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
      <Title>DIY Redux Notes</Title>
      {openNoteId
        ? <NoteEditor
            note={notes[openNoteId]}
            onChangeNote={onChangeNote}
            onCloseNote={onCloseNote}
          />
        : <NoteListContainer>
            <NoteList notes={notes} onOpenNote={onOpenNote} />
            <Button onClick={onAddNote}>New Note</Button>
          </NoteListContainer>}
    </NoteAppContainer>
  );
};

export default NoteApp;
