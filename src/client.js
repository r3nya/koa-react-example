import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './configureStore';

const store = configureStore(window.__INITIAL_STATE__);

window.initApp = function () {
  render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
