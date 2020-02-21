import React, { Component } from 'react';
import MyRouter from './components/router';
import MyLogin from './components/login';
import MyRegister from './components/register';
export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <MyRegister/>
        <MyLogin/>
      </div>
    )
  }
}