import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp from './NoteApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoteApp />, div);
});

