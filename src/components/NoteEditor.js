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
  border: 1px solid black;
`;

const NewNoteEditor = styled.textarea`
  border: none;
  box-shadow: 0px 1px 1px grey;
  margin: 0.5rem;
  padding: 0.5rem;
  outline:0;
`;

const Button = styled.button`
  border: none;
  box-shadow: 0px 1px 1px grey;
`;

const NoteEditor = ({ note, onChangeNote, onCloseNote }) => (
  <EditorContainer>
    Note Editor
    <NewNote>
      <NewNoteEditor
        cols={30}
        rows={10}
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
