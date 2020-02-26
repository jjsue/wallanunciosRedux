import React, { Component } from 'react';
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
          <p>{this.props.data.type}</p>
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

export {RenderOrNot};