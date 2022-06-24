import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

import App from './App';

import { NewsProvider } from './services/store';

import './index.css';

render(
  () => (
    <NewsProvider>
      <Router>
        <App />
      </Router>
    </NewsProvider>
  ),
  document.getElementById('root') as HTMLElement
);
