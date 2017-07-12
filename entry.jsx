import React from 'react';
import ReactDOM from 'react-dom';
import Root from './lib/root';
import Calculator from './lib/calculator';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Calculator/>, root);
});
