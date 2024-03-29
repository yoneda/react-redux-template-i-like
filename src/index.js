import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from "./components/App";
import reducer from "./modules";
import { createStore } from "redux";
import { Provider } from 'react-redux'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)
