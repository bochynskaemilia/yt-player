import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import initStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={initStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
