import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 引入 react-redux  负责将store和组件连接起来
import { Provider } from "react-redux";
import store from "./store";
// 引入redux-persist实现redux数据持久化
import { persistor } from './store'
import { PersistGate } from 'redux-persist/lib/integration/react';

import "lib-flexible"

ReactDOM.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
