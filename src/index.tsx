import './styles/reset.css'
import 'codemirror/lib/codemirror.css'
import './styles/codemirror-theme.css'
import './styles/index.css' 

import React from 'react'
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { router } from './pages/routes';

const container = document.getElementById('player-root') as HTMLDivElement

const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);