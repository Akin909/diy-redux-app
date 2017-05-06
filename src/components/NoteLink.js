import React from 'react';
import NoteTitle from './NoteTitle';

const NoteLink = ({ note, onOpenNote }) => (
  <li>
  <a href="#" onClick={ () => onOpenNote(note.id) }><NoteTitle note={note}></NoteTitle></a></li>

);

export default NoteLink;
