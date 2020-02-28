import React, { Component } from 'react';
import {detailCall, modifyAd} from './../api-calls/api-calls'
export default class DetailComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            pageId: null,
            responseState: null,
            whatWeRender: <DetailIsLoading/>,
        }
    }
    evaluator = () => {
        console.log(this.state.responseState);
        if(this.state.responseState.success){
            this.setState({whatWeRender: <DetailIsOk data = {this.state.responseState.result}/>});
        }
        else{
            this.setState({whatWeRender: <DetailIsNotOk/>});
        }
    }
    
    adCaller = async (id) => {
        this.setState({responseState: await detailCall(id)})
        this.setState({pageId: id});
        console.log(this.state.pageId);
        this.evaluator();
      }
      componentDidMount(){
        let isolatedId = '';
        for (let i=5; i<window.location.pathname.length; i++){
            isolatedId += window.location.pathname[i];
        }
        this.adCaller(isolatedId);
      }
    render(){
        return(
            <div className="detail">
            {this.state.whatWeRender}
            </div>
        );
    }
}
class DetailIsOk extends Component{
    constructor(props){
        super(props);
        this.state = {
            responseState: null,
            whatWeRender: null,
        }
    }
    onSubmitController = (event) => {
        event.preventDefault();
        this.setState ({whatWeRender: <ModifyAd data = {this.props.data}/>});
        console.log(this.props.propId);
    }
    render(){
        return(
            <>
            <h1>{this.props.data.name}</h1>
            <img src={this.props.data.photo} alt={this.props.data.name}/>
            <h2>Descripción y precio:</h2>
            <p>{this.props.data.description}</p>
            <p>{this.props.data.price} €</p>
            <h5>¿Compra o venta?</h5>
            <p>{this.props.data.type}</p>
            <form onSubmit={this.onSubmitController}>
                <input type="submit" value="Modificar este anuncio"></input>
            </form>
            {this.state.whatWeRender}
            </>
        )
    }
}
class DetailIsNotOk extends Component{
    render(){
        return(
            <>
            <h1>No hemos encontrado nada, vuelve a la lista y pincha en el anuncio deseado</h1>
            </>
        )
    }
}
class DetailIsLoading extends Component{
    render(){
        return(
            <>
            <h1>Cargando tu resultado....</h1>
            </>
        )
    }
}

class ModifyAd extends Component {
    constructor(props){
        super(props);
          this.state = {
            //Llamadas:
            responseState: null,
            importantInfo: null,
            //Forms:
            formName: this.props.data.name,
            formSellOrBuy: this.props.data.type,
            formTags: this.props.data.tags[0],
            formPriceMin: this.props.data.price,
            formTextAreaDescription: this.props.data.description,
            formUrl: this.props.data.photo,
            formIdMongo: this.props.data._id,
        }
      }
      evaluator = () => {
        if(this.state.responseState.success === false){
          this.setState({importantInfo: "Ha ocurrido un error, vuelve a intentarlo en unos instantes"});
        }
        else if(this.state.responseState.success === true){
            this.setState({importantInfo: "Todo ha ido perfecto, te redirigimos al listado para que puedas ver tu anuncio modificado"});
          setTimeout(function(){ window.location.pathname = 'ads'; }, 3000);
        }
      }
      adMod = async () => {
        let arrayTag = [this.state.formTags];
        this.setState({responseState: await modifyAd(this.state.formName, this.state.formPriceMin, this.state.formTextAreaDescription, arrayTag, this.state.formSellOrBuy, this.state.formUrl, this.state.formIdMongo)});
        console.log(this.state.responseState);
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
        this.adMod();
      }
    render() {
        const {formName, formTags, formSellOrBuy, formPriceMin, formTextAreaDescription, formUrl} = this.state;
        return (
            <div className="Crea tu anuncio">
                <h1>Modifica este anuncio:</h1>
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
                    <input type="submit" value="Modificar!"></input>
                </form>
                <h1>{this.state.importantInfo}</h1>
            </div>
        );
    }
}