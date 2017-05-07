import React from 'react';
import NoteLink from './NoteLink';

import styled from 'styled-components';

const Notes = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;
const NotesContainer = styled.div`
  width: 100%;
  height: 70%
  box-shadow: 0px 1px 1px grey;
  background-color: whitesmoke;
  margin: 0.5rem;
  padding: 0.5rem;
  outline:0;
`;
const NoteList = ({ notes, onOpenNote }) => (
  <div>
    <Notes>
      {Object.keys(notes).map(id => {
        return <NoteLink key={id} note={notes[id]} onOpenNote={onOpenNote} />;
      })}
    </Notes>
  </div>
);

export default NoteList;
