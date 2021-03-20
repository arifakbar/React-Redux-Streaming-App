import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer/index';
import App from "./components/App";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducer,composeEnhancer(applyMiddleware(reduxThunk)));

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, document.getElementById("root"));
