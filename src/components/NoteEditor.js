import React from 'react';
import styled from 'styled-components';

const EditorContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewNote = styled(EditorContainer)`
  width: 100%;
`;

const Title = styled.h1`
  font-family: 
`;

const NewNoteEditor = styled.textarea`
  border: none;
  box-shadow: 0px 1px 1px grey;
  margin: 0.5rem;
  padding: 0.5rem;
  outline:0;
  font-size: 1.3rem;
`;

const Button = styled.button`
  border: none;
  box-shadow: 0px 1px 1px grey;
`;

const NoteEditor = ({ note, onChangeNote, onCloseNote }) => (
  <EditorContainer>
    <Title>Note Editor</Title>
    <NewNote>
      <NewNoteEditor
        cols={50}
        rows={20}
        autoFocus
        value={note.content}
        onChange={event => onChangeNote(note.id, event.target.value)}
      />
      <Button onClick={onCloseNote}>
        Close
      </Button>
    </NewNote>
  </EditorContainer>
);

export default NoteEditor;
