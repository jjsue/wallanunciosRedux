import React, { Component } from 'react';
import { createAd } from './../api-calls/api-calls';
import {adCreate} from './../actions/adCreate';
import {store} from './../index';
import { RenderOrNot, createQueryString } from './addlist-utils';
export default class CreateAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseState: null,
      importantInfo: null,
      formName: '',
      formSellOrBuy: 'sell',
      formTags: 'lifestyle',
      formPriceMin: '',
      formTextAreaDescription: '',
      formUrl: '',
    }
  }
  evaluator = () => {
    if (store.getState().adCreate.success === false) {
      this.setState({ importantInfo: "Ha ocurrido un error, vuelve a intentarlo en unos instantes" });
    }
    else if (store.getState().adCreate.success === true) {
      this.setState({ importantInfo: "Todo ha ido bien, pincha en el listado y podrás ver tu anuncio. Aqui tienes una pequeña muestra:" });
    }
  }
  adCreator = async () => {
    let arrayTag = [this.state.formTags];
    this.setState({ responseState: await createAd(this.state.formName, this.state.formPriceMin, this.state.formTextAreaDescription, arrayTag, this.state.formSellOrBuy, this.state.formUrl) });
    store.dispatch(adCreate(await createAd(this.state.formName, this.state.formPriceMin, this.state.formTextAreaDescription, arrayTag, this.state.formSellOrBuy, this.state.formUrl)));
    this.evaluator();
  }
  nameController = (event) => {
    this.setState({ formName: event.target.value });
  }
  sellController = (event) => {
    this.setState({ formSellOrBuy: event.target.value });
  }
  tagController = (event) => {
    this.setState({ formTags: event.target.value });
  }
  priceController = (event) => {
    this.setState({ formPriceMin: event.target.value });
  }
  urlController = (event) => {
    this.setState({ formUrl: event.target.value });
  }
  textAreaController = (event) => {
    this.setState({ formTextAreaDescription: event.target.value });
  }
  onSubmitController = (event) => {
    event.preventDefault();
    this.adCreator();
  }
  render() {
    const { formName, formTags, formSellOrBuy, formPriceMin, formTextAreaDescription, formUrl } = this.state;
    return (
      <div className="createadd bg-dark">
        <h1 className="text-white m-2">Crea tu anuncio:</h1>
        <form onSubmit={this.onSubmitController}>
          <div className="form-group m-2">
            <input className="form-control mt-2" required type="text" id="name" placeholder="Nombre" value={formName} onChange={this.nameController}></input>
            <select className="form-control mt-2" id="compra-venta" value={formSellOrBuy} onChange={this.sellController}>
              <option value="sell">Venta</option>
              <option value="buy">Compra</option>
            </select>
            <select className="form-control mt-2" id="tags" value={formTags} onChange={this.tagController}>
              <option value="lifestyle">Lifestyle</option>
              <option value="mobile">Mobile</option>
              <option value="motor">Motor</option>
              <option value="work">Work</option>
            </select>
            <input className="form-control mt-2" required type="number" placeholder="Precio" value={formPriceMin} onChange={this.priceController}></input>
            <input className="form-control mt-2" required type="url" value={formUrl} placeholder="Pega aquí la URL de la imagen" onChange={this.urlController}></input>
            <textarea className="form-control mt-2" required value={formTextAreaDescription} placeholder="Descripción" onChange={this.textAreaController}></textarea>
            <input className="btn btn-secondary form-control mt-2" type="submit" value="Subir!"></input>
          </div>
        </form>
        <h1 className="text-info m-2">{this.state.importantInfo}</h1>
      </div>
    );
  }
}