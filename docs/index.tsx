/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App title="Wizard Icons" />,
  document.getElementById('app')
);

module.hot && module.hot.accept();