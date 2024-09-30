import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluentProvider theme={webLightTheme}>
      <BrowserRouter>
        <App />
    </BrowserRouter>
    </FluentProvider>
  </StrictMode>
);