import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import addUsername from './actions/addUsername';
const initialState = {
    username: 'manolete',
    reduxAds: [],
};


let store = createStore(state => state, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<App />, document.getElementById('root'));

export {store};