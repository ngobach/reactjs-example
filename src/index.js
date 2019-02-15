/**
 * Application entrypoint
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './pages/Hello';

const mountPoint = document.getElementById('main');

if (mountPoint) {
  ReactDOM.render(<Hello />, mountPoint);
} else {
  console.error('Mount point not found!');
}
