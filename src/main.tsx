import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.js'
import 'modern-normalize'
import { Toaster } from 'react-hot-toast'
import {ThemeProvider} from './components/Providers/ThemeProvider/ThemeProvider.jsx'
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <Toaster/>
  </StrictMode>,
)