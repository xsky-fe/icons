import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

const title = 'Wizard Icons';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot && module.hot.accept();