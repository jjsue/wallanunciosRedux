import React, { Component } from "react";
import FormLoginAndRegister from './loginAndRegisterForms';
import { loginCall } from './../api-calls/api-calls'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: FormLoginAndRegister
        }
    }
    render() {
        return (
            <div className='register'>
                <h1 className="text-white m-2">Bienvenido a Wallanuncios</h1>
                <p className="text-white m-2">Nos encanta que vuelvas con nosotros, introduce usuario y contraseña:</p>
                <this.state.form callType={loginCall} message="Bienvenido de nuevo" />
            </div>
        )
    }
}