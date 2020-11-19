import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, compose, applyMiddleware } from "redux";
import allReducer from "./Redux/Reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./SessionStorage";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState(); // SessionStorage

const myStore = createStore(
  allReducer,
  persistedState,
  composeEnhancer(applyMiddleware(thunk))
);

myStore.subscribe(() => {
  saveState(myStore.getState());
}); // SessionStorage

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
