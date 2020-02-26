import React, { Component } from 'react';
import {addCall} from './../api-calls/api-calls';
import {RenderOrNot} from './addlist-utils';

export default class AdsList extends Component{
  constructor(props){
    super(props);
      this.state = {
        responseState: null,
        importantInfo: null,
        childrenToRender: false,
    }
  }
  evaluator = () => {
    if(this.state.responseState.success === false){
      this.setState({importantInfo: "Ha ocurrido un error, te redirigimos al login para que puedas volver a iniciar sesión e intentarlo de nuevo."});
      setTimeout(function(){ window.location.pathname = 'login'; }, 3000);
    }
    else if(this.state.responseState.success === true){
      this.setState({childrenToRender: true});
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
        <RenderOrNot callDo={this.state.childrenToRender} data={this.state.responseState}/>
        <p>{this.state.importantInfo}</p>
      </>
    )
  }
}