import React from 'react';
import { createRoot } from 'react-dom/client';
import '@cloudscape-design/global-styles/index.css';
import { applyMode, Mode } from '@cloudscape-design/global-styles';
import App from './App.jsx';

// Follow the viewer's light/dark preference
const media = window.matchMedia('(prefers-color-scheme: dark)');
const sync = () => applyMode(media.matches ? Mode.Dark : Mode.Light);
sync();
media.addEventListener('change', sync);

createRoot(document.getElementById('root')).render(<App />);
