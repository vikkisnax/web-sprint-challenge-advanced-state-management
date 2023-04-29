// 1.
import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from "./reducers";

import "./index.css";
import App from "./App";

const { worker } = require('./mocks/browser');
worker.start();


// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
// wrap around middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)

const rootElement = document.getElementById("root");

ReactDOM.render(
    // 3.
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.