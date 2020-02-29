import React, { Component } from 'react';
import { detailCall, modifyAd } from './../api-calls/api-calls'
export default class DetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageId: null,
            responseState: null,
            whatWeRender: <DetailIsLoading />,
        }
    }
    evaluator = () => {
        console.log(this.state.responseState);
        if (this.state.responseState.success) {
            this.setState({ whatWeRender: <DetailIsOk data={this.state.responseState.result} /> });
        }
        else {
            this.setState({ whatWeRender: <DetailIsNotOk /> });
        }
    }

    adCaller = async (id) => {
        this.setState({ responseState: await detailCall(id) })
        this.setState({ pageId: id });
        console.log(this.state.pageId);
        this.evaluator();
    }
    componentDidMount() {
        let isolatedId = '';
        for (let i = 5; i < window.location.pathname.length; i++) {
            isolatedId += window.location.pathname[i];
        }
        this.adCaller(isolatedId);
    }
    render() {
        return (
            <div className="detail d-flex flex-column">
                {this.state.whatWeRender}
            </div>
        );
    }
}
class DetailIsOk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseState: null,
            whatWeRender: null,
        }
    }
    onSubmitController = (event) => {
        event.preventDefault();
        this.setState({ whatWeRender: <ModifyAd data={this.props.data} /> });
        console.log(this.props.propId);
    }
    render() {
        return (
            <>
                <h1 className="text-white m-auto">{this.props.data.name}</h1>
                <img className="text-white m-auto" src={this.props.data.photo} alt={this.props.data.name} />
                <h2 className="text-white m-2">Descripción y precio:</h2>
                <p className="text-white m-2">{this.props.data.description}</p>
                <p className="text-white m-2">{this.props.data.price} €</p>
                <h5 className="text-white m-2">¿Compra o venta?</h5>
                <p className="text-white m-2">{this.props.data.type}</p>
                <form className="m-2" onSubmit={this.onSubmitController}>
                    <input className="form-control bg-secondary text-white" type="submit" value="Modificar este anuncio"></input>
                </form>
                {this.state.whatWeRender}
            </>
        )
    }
}
class DetailIsNotOk extends Component {
    render() {
        return (
            <>
                <h1>No hemos encontrado nada, vuelve a la lista y pincha en el anuncio deseado</h1>
            </>
        )
    }
}
class DetailIsLoading extends Component {
    render() {
        return (
            <>
                <h1>Cargando tu resultado....</h1>
            </>
        )
    }
}

class ModifyAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseState: null,
            importantInfo: null,
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
        if (this.state.responseState.success === false) {
            this.setState({ importantInfo: "Ha ocurrido un error, vuelve a intentarlo en unos instantes" });
        }
        else if (this.state.responseState.success === true) {
            this.setState({ importantInfo: "Todo ha ido perfecto, te redirigimos al listado para que puedas ver tu anuncio modificado" });
            setTimeout(function () { window.location.pathname = 'ads'; }, 3000);
        }
    }
    adMod = async () => {
        let arrayTag = [this.state.formTags];
        this.setState({ responseState: await modifyAd(this.state.formName, this.state.formPriceMin, this.state.formTextAreaDescription, arrayTag, this.state.formSellOrBuy, this.state.formUrl, this.state.formIdMongo) });
        console.log(this.state.responseState);
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
        this.adMod();
    }
    render() {
        const { formName, formTags, formSellOrBuy, formPriceMin, formTextAreaDescription, formUrl } = this.state;
        return (
            <div className="modifyadd">
                <h1 className="text-white m-2">Modifica este anuncio:</h1>
                <form className="m-2" onSubmit={this.onSubmitController}>
                    <div className="flexwrap d-flex flex-wrap justify-content-between">
                        <div className="form-group m-2 flex-fill">
                            <input className="form-control mt-1" required type="text" id="name" placeholder="Nombre" value={formName} onChange={this.nameController}></input>
                            <select className="form-control mt-1" id="compra-venta" value={formSellOrBuy} onChange={this.sellController}>
                                <option value="sell">Venta</option>
                                <option value="buy">Compra</option>
                            </select>
                            <select className="form-control mt-1" id="tags" value={formTags} onChange={this.tagController}>
                                <option value="lifestyle" selected>Lifestyle</option>
                                <option value="mobile">Mobile</option>
                                <option value="motor">Motor</option>
                                <option value="work">Work</option>
                            </select>
                        </div>
                        <div className="form-group m-2 flex-fill">
                            <p className="mt-1 text-white">Precio en euros:</p>
                            <input className="form-control mt-1" required type="number" placeholder="Precio" value={formPriceMin} onChange={this.priceController}></input>
                        </div>
                        <div className="form-group m-2 flex-fill">
                            <p className="mt-1 text-white">Imagen:</p>
                            <input className="form-control mt-1" required type="url" value={formUrl} placeholder="Pega aquí la URL de la imagen" onChange={this.urlController}></input>
                        </div>
                        <div className="form-group m-2 flex-fill">
                            <p className="mt-1 text-white">Descripcion del anuncio:</p>
                            <textarea className="form-control mt-1" required value={formTextAreaDescription} placeholder="Descripción" onChange={this.textAreaController}></textarea>
                        </div>
                    </div>
                    <input className="btn btn-secondary form-control mt-2" type="submit" value="Modificar!"></input>
                </form>
                <h1 className="text-info">{this.state.importantInfo}</h1>
            </div>
        );
    }
}