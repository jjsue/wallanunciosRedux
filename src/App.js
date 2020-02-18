import React, { Component } from 'react';
import Register from './components/register'
export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Register/>
      </div>
    )
  }
}