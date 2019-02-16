/**
 * Application entrypoint
 */

import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';

const mountPoint = document.getElementById('main');

if (mountPoint) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    mountPoint,
  );
} else {
  console.error('Mount point not found!');
}
