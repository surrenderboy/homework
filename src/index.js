import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';
import Root from './containers/Root';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
// eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
