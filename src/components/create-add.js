import React, { Component } from 'react';
import {createAd} from './../api-calls/api-calls';
export default class CreateAd extends Component {
    constructor(props){
        super(props);
          this.state = {
            //Llamadas:
            responseState: null,
            importantInfo: null,
            //Forms:
            formName: '',
            formSellOrBuy: 'sell',
            formTags: 'lifestyle',
            formPriceMin: '',
            formTextAreaDescription: '',
            formUrl: '',
        }
      }
      evaluator = () => {
        if(this.state.responseState.success === false){
          this.setState({importantInfo: "Ha ocurrido un error, vuelve a intentarlo en unos instantes"});
        }
        else if(this.state.responseState.success === true){
            this.setState({importantInfo: "Todo ha ido perfecto, te redirigimos al listado para que puedas ver tu anuncio"});
          setTimeout(function(){ window.location.pathname = 'ads'; }, 3000);
        }

      }
      adCreator = async () => {
        let arrayTag = [this.state.formTags];
        this.setState({responseState: await createAd(this.state.formName, this.state.formPriceMin, this.state.formTextAreaDescription, arrayTag, this.state.formSellOrBuy, this.state.formUrl)});
        this.evaluator();
      }
    nameController = (event) => {
        this.setState({formName: event.target.value});
      }
      sellController = (event) => {
        this.setState({formSellOrBuy: event.target.value});
      }
      tagController = (event) => {
        this.setState({formTags: event.target.value});
      }
      priceController = (event) => {
        this.setState({formPriceMin: event.target.value});
      }
      urlController = (event) => {
        this.setState({formUrl: event.target.value});
      }
      textAreaController = (event) => {
        this.setState({formTextAreaDescription: event.target.value});
        }
      onSubmitController = (event) => {
        event.preventDefault();
        this.adCreator();
      }
    render() {
        const {formName, formTags, formSellOrBuy, formPriceMin, formTextAreaDescription, formUrl} = this.state;
        return (
            <div className="Crea tu anuncio">
                <h1>Crea tu anuncio:</h1>
                <form onSubmit={this.onSubmitController}>
                    <input required type="text" id="name" placeholder="Nombre" value={formName} onChange={this.nameController}></input>
                    <select id="compra-venta" value={formSellOrBuy} onChange={this.sellController}>
                        <option value="sell">Venta</option>
                        <option value="buy">Compra</option>
                    </select>
                    <select id="tags" value={formTags} onChange={this.tagController}>
                        <option value="lifestyle" selected>Lifestyle</option>
                        <option value="mobile">Mobile</option>
                        <option value="motor">Motor</option>
                        <option value="work">Work</option>
                    </select>
                    <p>Precio en euros:</p>
                    <input required type="number" placeholder="Precio" value={formPriceMin} onChange={this.priceController}></input>
                    <p>Imagen:</p>
                    <input required type="url" value={formUrl} placeholder="Pega aquí la URL de la imagen" onChange={this.urlController}></input>
                    <br/>
                    <p>Descripcion del anuncio:</p>
                    <textarea required value={formTextAreaDescription} placeholder="Descripción" onChange={this.textAreaController}></textarea>
                    <br/>
                    <input type="submit" value="Subir!"></input>
                </form>
                <h1>{this.state.importantInfo}</h1>
            </div>
        );
    }
}