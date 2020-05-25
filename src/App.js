import React, { Component } from 'react';
import MyRouter from './components/router';
import {store} from './index';
import  {readFromLocalStorage} from './actions/readFromLocalStorage';
export default class App extends Component {
  componentDidMount() {
    store.dispatch(readFromLocalStorage);
  }
  render() {
    return (
      <>
        <MyRouter />
      </>
    )
  }
}