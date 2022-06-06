import { Suspense } from 'react';
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Suspense fallback={<div />}>
    <HelmetProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </HelmetProvider>
  </Suspense>,
  document.getElementById('root')
);

serviceWorker.unregister();

reportWebVitals();
