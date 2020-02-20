import React, { Component } from 'react';
import MyRouter from './components/router';
export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <MyRouter/>
      </div>
    )
  }
}