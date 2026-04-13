import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.jsx';

const rootElement = document.getElementById('root');

// Check if the root element contains content (from prerendering)
if (rootElement.hasChildNodes()) {
  // Production / Prerendered state
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Development / Fresh state
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
