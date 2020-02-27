import React, { Component } from 'react';
import {detailCall} from './../api-calls/api-calls'
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
        this.evaluator();
      }
      componentDidMount(){
        let isolatedId = '';
        for (let i=5; i<window.location.pathname.length; i++){
            isolatedId += window.location.pathname[i]; //Obtenemos el ID actual
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