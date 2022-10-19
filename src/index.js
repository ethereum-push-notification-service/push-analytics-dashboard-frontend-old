import { Suspense } from 'react';
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';

ReactDOM.render(
  <Suspense fallback={<div />}>
    <ThemeProvider>
      <HelmetProvider>
        <DataProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </DataProvider>
      </HelmetProvider>
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
);

serviceWorker.unregister();

reportWebVitals();
