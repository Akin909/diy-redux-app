import React from 'react';

const NoteEditor = ({ note, onChangeNote, onCloseNote }) => (
  <div>
    Note Editor
    <div>
      <textarea
        cols={30}
        rows={10}
        autoFocus
        value={note.content}
        onChange={event => onChangeNote(note.id, event.target.value)}
      />
      <button onClick={onCloseNote}>
      Close
      </button>
    </div>
  </div>
);

export default NoteEditor;
