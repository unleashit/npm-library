import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
