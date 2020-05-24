import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Redux
import { createStore } from 'redux';
//Este es el combineReducers
import reducer from './reducers/index';
const initialState = {
    username: 'Anonimo',
    reduxAds: [],
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<App />, document.getElementById('root'));


export { store };