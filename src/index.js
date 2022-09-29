import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import NoteMain from './components/NoteMain';

const root = createRoot(document.getElementById('root'));
root.render(<NoteMain />);