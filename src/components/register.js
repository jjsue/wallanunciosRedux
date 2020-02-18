import React, { Component } from "react";
import {registerCall} from './../api-calls/api-calls'
export default class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
        mailValue: 'prueba@prueba.com',
        passwordValue: '1234'
    }
  }
    changeHandlerMail = (event) => {
    this.setState({ mailValue: event.target.value });
    }
    changeHandlerPass = (event) => {
        this.setState({ passwordValue: event.target.value });
        }
    submitHandler = (event) => {
        event.preventDefault();
        registerCall(this.state.mailValue, this.state.passwordValue);
    }
    render(){
        const {mailValue, passwordValue} = this.state;
        return(
            <div className='register'>
                <h1>Bienvenido a Wallanuncios</h1>
                <p>Para empezar a publicar necesitamos que te registres:</p>
                <form onSubmit={this.submitHandler}>
                    <input type='email' value={mailValue} required onChange={this.changeHandlerMail}></input><br/>
                    <input type='password' value={passwordValue} required onChange={this.changeHandlerPass}></input><br/>
                    <input type='submit' value='Registro'></input><br/>
                </form>
            </div>
        )
    }
}