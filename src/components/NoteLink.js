import React from 'react';
import NoteTitle from './NoteTitle';
import styled from 'styled-components';

const Link = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 800;
  &:hover {
    text-decoration: underline;
  }
`;

const NoteLink = ({ note, onOpenNote }) => (
  <li>
    <Link href="#" onClick={() => onOpenNote(note.id)}>
      <NoteTitle note={note} />
    </Link>
  </li>
);

export default NoteLink;
