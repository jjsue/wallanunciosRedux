import React, { Component } from "react";
import {loginCall} from './../api-calls/api-calls'
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
        mailValue: 'prueba@prueba.com',
        passwordValue: '1234',
        responseState: null,
        responseMessage: ''
    }
  }
    changeHandlerMail = (event) => {
    this.setState({ mailValue: event.target.value });
    }
    changeHandlerPass = (event) => {
        this.setState({ passwordValue: event.target.value });
        }
    submitHandler = async (event) => {
        event.preventDefault();
        this.setState({responseState: await loginCall(this.state.mailValue, this.state.passwordValue)});
        console.log(this.state.responseState);
        if (this.state.responseState.success === false){
            this.setState({responseMessage: this.state.responseState.error});
        }
        else if (this.state.responseState.success === true){
            this.setState({responseMessage: "Bienvenido de nuevo"});
        }
        else{
            this.setState({responseMessage: "Parece que algo ha ido mal, por favor, intenta de nuevo en unos segundos."});
        }
    }
    render(){
        const {mailValue, passwordValue} = this.state;
        return(
            <div className='register'>
                <h1>Bienvenido a Wallanuncios</h1>
                <p>Nos encanta que vuelvas con nosotros, introduce usuario y contraseña:</p>
                <form onSubmit={this.submitHandler}>
                    <input type='email' value={mailValue} required onChange={this.changeHandlerMail}></input><br/>
                    <input type='password' value={passwordValue} required onChange={this.changeHandlerPass}></input><br/>
                    <input type='submit' value='Entrar'></input><br/>
                </form>
                <h2>{this.state.responseMessage}</h2>
            </div>
        )
    }
}