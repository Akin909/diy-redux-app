import React from 'react';
import NoteLink from './NoteLink';

const NoteList = ({ notes, onOpenNote }) => (
  <div>
    <ul>
      {Object.keys(notes).map(id => {
        return <NoteLink key={id} note={notes[id]} onOpenNote={onOpenNote} />;
      })}
    </ul>
  </div>
);

export default NoteList;
