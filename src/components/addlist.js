import React, { Component } from 'react';
import { addCall } from './../api-calls/api-calls';
import { RenderOrNot, createQueryString } from './addlist-utils';
import { store } from './../index';
import { adStorage } from './../actions/adStorage';
export default class AdsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseState: null,
      importantInfo: null,
      childrenToRender: false,
      formName: '',
      formSellOrBuy: '',
      formTags: '',
      formPriceMin: '',
      formPriceMax: '',
      queryString: '',
    }
  }
  evaluator = () => {
    if (this.state.responseState.success === false) {
      this.setState({ importantInfo: "Ha ocurrido un error, te redirigimos al login para que puedas volver a iniciar sesión e intentarlo de nuevo." });
      setTimeout(function () { window.location.pathname = 'login'; }, 3000);
    }
    else if (this.state.responseState.success === true) {
      this.setState({ childrenToRender: true });
    }
    else {
      this.setState({ importantInfo: "Ha ocurrido un error, te redirigimos al login para que puedas volver a iniciar sesión e intentarlo de nuevo." });
      setTimeout(function () { window.location.pathname = 'login'; }, 3000);
    }
  }
  adCaller = async () => {
    this.setState({ responseState: await addCall(createQueryString(this.state.formName, this.state.formSellOrBuy, this.state.formTags, this.state.formPriceMin, this.state.formPriceMax)) });
    //Aqui vamos a meter la action cuyo payload sea el createQueryString
    store.dispatch(adStorage(await addCall(createQueryString(this.state.formName, this.state.formSellOrBuy, this.state.formTags, this.state.formPriceMin, this.state.formPriceMax))));
    this.evaluator();
  }
  componentDidMount() {
    this.adCaller();
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
  priceMinController = (event) => {
    this.setState({ formPriceMin: event.target.value });
  }
  priceMaxController = (event) => {
    this.setState({ formPriceMax: event.target.value });
  }
  onSubmitController = (event) => {
    event.preventDefault();
    this.setState({ childrenToRender: false });
    this.setState({ responseState: null });
    this.adCaller();
  }
  render() {
    const { formName, formTags, formPriceMin, formPriceMax, formSellOrBuy } = this.state;
    return (
      <>
        <form className="bg-dark" onSubmit={this.onSubmitController}>
          <h2 className="m-2 text-white">Filtros:</h2>
          <div className="form-group d-flex">
            <input className="form-control m-2" type="text" id="name" placeholder="Nombre" value={formName} onChange={this.nameController}></input>
            <select className="form-control m-2" id="compra-venta" value={formSellOrBuy} onChange={this.sellController}>
              <option value="buy">Compra</option>
              <option value="sell">Venta</option>
              <option value="">Compra y venta</option>
            </select>
            <select className="form-control m-2" id="tags" value={formTags} onChange={this.tagController}>
              <option value="lifestyle">Lifestyle</option>
              <option value="mobile">Mobile</option>
              <option value="motor">Motor</option>
              <option value="work">Work</option>
              <option value="">Ninguno</option>
            </select>
          </div>
          <h2 className="m-2 text-white">Precio:</h2>
          <div className="form-group d-flex">
            <input className="form-control m-2" type="number" placeholder="Minimo" value={formPriceMin} onChange={this.priceMinController}></input>
            <input className="form-control m-2" type="number" placeholder="Maximo" value={formPriceMax} onChange={this.priceMaxController}></input>
          </div>
          <input className="btn btn-secondary form-control" type="submit" value="Buscar"></input>
        </form>
        <RenderOrNot callDo={this.state.childrenToRender} data={this.state.responseState} />
        <p>{this.state.importantInfo}</p>
      </>
    )
  }
}