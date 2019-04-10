import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from './store';
// import './styles/index.scss';
import App from './App';

let history = createBrowserHistory();
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));
