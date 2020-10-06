// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './routes'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './routes'
import store from './store'

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister();
