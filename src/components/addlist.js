import React, { Component } from 'react';
import {addCall} from './../api-calls/api-calls';
import {RenderOrNot, createQueryString} from './addlist-utils';

export default class AdsList extends Component{
  constructor(props){
    super(props);
      this.state = {
        //Llamadas:
        responseState: null,
        importantInfo: null,
        childrenToRender: false,
        //Forms:
        formName: '',
        formSellOrBuy: '',
        formTags: '',
        formPriceMin: '',
        formPriceMax: '',
        queryString: '',
    }
  }
  //Llamadas
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
    this.setState({responseState: await addCall(createQueryString(this.state.formName, this.state.formSellOrBuy, this.state.formTags, this.state.formPriceMin, this.state.formPriceMax))});
    this.evaluator();
  }
  componentDidMount(){
    this.adCaller();
  }
  //Forms:
nameController = (event) => {
  this.setState({formName: event.target.value});
}
sellController = (event) => {
  this.setState({formSellOrBuy: event.target.value});
}
tagController = (event) => {
  this.setState({formTags: event.target.value});
}
priceMinController = (event) => {
  this.setState({formPriceMin: event.target.value});
}
priceMaxController = (event) => {
  this.setState({formPriceMax: event.target.value});
}
onSubmitController = (event) => {
  event.preventDefault();
  this.setState({childrenToRender: false});
  this.setState({responseState: null});
  this.adCaller();
}
  render(){
    const {formName, formTags, formPriceMin, formPriceMax} = this.state;
    return(
      <>
        <form onSubmit={this.onSubmitController}>
          <h1>Busqueda:</h1>
          <input type="text" id="name" placeholder="Nombre" value={formName} onChange={this.nameController}></input>
          <select id="compra-venta" onChange={this.sellController}>
            <option value = "buy">Compra</option>
            <option value = "sell">Venta</option>
            <option value = "">Ninguno</option>
            <option value = {formTags} selected>Compra o Venta</option>
          </select>
          <select id="tags" onChange={this.tagController}>
            <option value = "lifestyle">Lifestyle</option>
            <option value = "mobile">Mobile</option>
            <option value = "motor">Motor</option>
            <option value = "work">Work</option>
            <option value = "">Ninguno</option>
            <option value = {formTags} selected>Tag</option>
          </select>
          <fieldset>
            <p>Precio:</p>
            <input type="number" placeholder="Minimo" value={formPriceMin} onChange={this.priceMinController}></input> - <input type="number" placeholder="Maximo" value={formPriceMax} onChange={this.priceMaxController}></input>
          </fieldset>
          <input type="submit" value="Buscar"></input>
        </form>
        <h1>Listado de anuncios:</h1>
        <RenderOrNot callDo={this.state.childrenToRender} data={this.state.responseState}/>
        <p>{this.state.importantInfo}</p>
      </>
    )
  }
}