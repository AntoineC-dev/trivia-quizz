import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ColorModeScript } from '@chakra-ui/react';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);
