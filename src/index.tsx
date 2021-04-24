import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import currentReducer from './components/admin/reducers/current';
import { ICurrent } from "./types";

let composeEnhancers;

if (
  process.env.NODE_ENV !== "production" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}
const store = createStore<ICurrent, any, any, any>(
  currentReducer,
  undefined,
  composeEnhancers(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
