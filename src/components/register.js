import React, { Component } from "react";
import { registerCall } from './../api-calls/api-calls';
import formLoginAndRegister from './loginAndRegisterForms';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: formLoginAndRegister
        }
    }
    render() {
        return (
            <div className='register'>
                <h1 className="m-2 text-white">¡Bienvenido a Wallanuncios!</h1>
                <p className="m-2 text-white">Para empezar a publicar necesitamos que te registres:</p>
                <this.state.form callType={registerCall} message={'Gracias por registrate, ahora pulsa en "Iniciar sesión". Nos encanta que estés con nosotros'} />
            </div>
        )
    }
}