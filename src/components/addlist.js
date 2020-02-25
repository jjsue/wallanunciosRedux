import React, { Component } from 'react';
import {addCall} from './../api-calls/api-calls';
class AddMount extends Component{
  render(){
    return(
      <>
      <div className="Anuncio">
        <h2>{this.props.data.name}</h2>
        <img src={this.props.data.photo} alt={this.props.data.name}/> 
        <p>Precio: {this.props.data.price}</p>
        <h3>Descripción:</h3>
        <p>{this.props.data.description}</p>
      </div>
      </>
    )
  }
}

class AddMount3 extends Component{
  render(){
    return null;
  }
}

function RenderOrNot(props) {
  const callDo = props.callDo;
  let toShow = [];
  if (callDo) {
    for (let i=0; i<props.data.count; i++){
      toShow.push(<AddMount key = {i} data = {props.data.results[i]}/>);
    }
    console.log(toShow);
    return(
    <div className="Anuncios">
      {toShow}
    </div>
    )
  }
  return <AddMount3 />;
}
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
      console.log("False");
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