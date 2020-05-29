import React, { Component } from 'react';
import { createAd } from './../api-calls/api-calls';
import { adCreate, formNameCreateAd, formSellOrBuyCreateAd, formTagsCreateAd, formPriceCreateAd, formTextAreaDescriptionCreateAd, formUrlCreateAd } from './../actions/adCreate';
import { store } from './../index';
import { BrowserRouter as Router, Link } from "react-router-dom";
export default class CreateAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      importantInfo: null,
      linkTo: null,
    }
  }
  evaluator = () => {
    if (store.getState().adCreate.receivedData.success === false) {
      this.setState({ importantInfo: "Ha ocurrido un error, vuelve a intentarlo en unos instantes" });
    }
    else if (store.getState().adCreate.receivedData.success === true) {
      this.setState({ importantInfo: "Todo ha ido bien, pincha en el listado y podrás ver tu anuncio. Pulsando el boton puedes ir a la pagina del anuncio:" });
      this.setState({linkTo: <Link to={`/ads/${store.getState().adCreate.receivedData.result._id}`}><p className="btn btn-info">Al anuncio</p></Link>});
      console.log(store.getState().adCreate.receivedData._id);
    }
  }
  adCreator = async () => {
    let arrayTag = [store.getState().adCreate.sendData.tags];
    store.dispatch(adCreate(await createAd(store.getState().adCreate.sendData.name, store.getState().adCreate.sendData.price, store.getState().adCreate.sendData.description, arrayTag, store.getState().adCreate.sendData.sellOrBuy, store.getState().adCreate.sendData.photoUrl)));
    this.evaluator();
  }
  nameController = (event) => {
    store.dispatch(formNameCreateAd(event.target.value));
  }

  sellController = (event) => {
    store.dispatch(formSellOrBuyCreateAd(event.target.value));
  }

  tagController = (event) => {
    store.dispatch(formTagsCreateAd(event.target.value));
  }

  priceController = (event) => {
    store.dispatch(formPriceCreateAd(parseInt(event.target.value)));
  }

  urlController = (event) => {
    store.dispatch(formUrlCreateAd(event.target.value));
  }

  textAreaController = (event) => {
    store.dispatch(formTextAreaDescriptionCreateAd(event.target.value));
  }

  onSubmitController = (event) => {
    event.preventDefault();
    this.adCreator();
  }
  render() {
    let name = store.getState().adCreate.sendData.name
    const sellOrBuy = store.getState().adCreate.sendData.sellOrBuy
    const tags = store.getState().adCreate.sendData.tags
    const price = store.getState().adCreate.sendData.price
    const description = store.getState().adCreate.sendData.description
    const photoUrl = store.getState().adCreate.sendData.photoUrl
    return (
      <div className="createadd bg-dark">
        <h1 className="text-white m-2">Crea tu anuncio:</h1>
        <form onSubmit={this.onSubmitController}>
          <div className="form-group m-2">
            <input className="form-control mt-2" required type="text" id="name" placeholder="Nombre" value={name} onChange={this.nameController}></input>
            <select className="form-control mt-2" id="compra-venta" value={sellOrBuy} onChange={this.sellController}>
              <option value="sell">Venta</option>
              <option value="buy">Compra</option>
            </select>
            <select className="form-control mt-2" id="tags" value={tags} onChange={this.tagController}>
              <option value="lifestyle">Lifestyle</option>
              <option value="mobile">Mobile</option>
              <option value="motor">Motor</option>
              <option value="work">Work</option>
            </select>
            <input className="form-control mt-2" required type="number" placeholder="Precio" value={price} onChange={this.priceController}></input>
            <input className="form-control mt-2" required type="url" value={photoUrl} placeholder="Pega aquí la URL de la imagen" onChange={this.urlController}></input>
            <textarea className="form-control mt-2" required value={description} placeholder="Descripción" onChange={this.textAreaController}></textarea>
            <input className="btn btn-secondary form-control mt-2" type="submit" value="Subir!"></input>
          </div>
        </form>
        <h1 className="text-info m-2">{this.state.importantInfo}</h1>
        <h1 className="text-info m-2">{this.state.linkTo}</h1>
      </div>
    );
  }
}