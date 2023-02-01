import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import { RootCmp } from './root-cmp';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './assets/styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <RootCmp />
  </Router>

);

// serviceWorkerRegistration.register();