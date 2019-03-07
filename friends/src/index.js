import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { friendReducer } from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    friendReducer,
    applyMiddleware(thunk, logger)
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);