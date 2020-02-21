import React, { Component } from 'react';
import {addCall} from './../api-calls/api-calls';
export default class AdsList extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
      console.log("Mount");
      addCall();
  }
  render(){
    return(
      <>
        <h1>Listado de anuncios:</h1>
      </>
    )
  }
}