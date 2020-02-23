import React, { Component } from 'react';
import {addCall} from './../api-calls/api-calls';
class AddMount extends Component{
  render(){
    return(
      <>
      <p>AddMount</p>
      </>
    )
  }
}
export default class AdsList extends Component{
  constructor(props){
    super(props);
      this.state = {
        responseState: null,
        importantInfo: null,
    }
  }
  evaluator = () => {
    if(this.state.responseState.success === false){
      console.log("False");
    }
    else if(this.state.responseState.success === true){
      console.log("True");
    }
    else{
      this.setState({importantInfo: "Ha ocurrido un error, te redirigimos al login para que puedas volver a iniciar sesión e intentarlo de nuevo."});
      setTimeout(function(){ window.location.pathname = 'login'; }, 3000);
    }
  }
  adCaller = async () => {
    this.setState({responseState: await addCall()});
    this.evaluator();
  }
  componentDidMount(){
    this.adCaller();
  }
  render(){
    return(
      <>
        <h1>Listado de anuncios:</h1>
        <AddMount/>
        <p>{this.state.importantInfo}</p>
      </>
    )
  }
}