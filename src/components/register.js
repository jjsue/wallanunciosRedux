import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { registerCall } from './../api-calls/api-calls';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mailValue: '',
            passwordValue: '',
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
        this.setState({ responseState: await registerCall(this.state.mailValue, this.state.passwordValue) });
        if (this.state.responseState.success === false) {
            this.setState({ responseMessage: this.state.responseState.error });
        }
        else if (this.state.responseState.success === true) {
            this.setState({ responseMessage: <Link to={`/login/`}><p className="btn btn-info">Todo ha ido bien, pulsa para ir al login</p></Link> });
        }
        else {
            this.setState({ responseMessage: "Parece que algo ha ido mal, por favor, intenta de nuevo en unos segundos." });
        }
    }
    render() {
        const { mailValue, passwordValue } = this.state;
        return (
            <div className='register'>
                <h1 className="m-2 text-white">¡Bienvenido a Wallanuncios!</h1>
                <p className="m-2 text-white">Para empezar a publicar necesitamos que te registres:</p>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group m-2">
                        <input className="form-control mt-1" placeholder="Introduce tu correo electronico" type='email' value={mailValue} required onChange={this.changeHandlerMail}></input><br />
                        <input className="form-control mt-1" placeholder="Introduce tu contraseña" type='password' value={passwordValue} required onChange={this.changeHandlerPass}></input><br />
                        <input className="form-control mt-1 btn btn-secondary" type='submit' value='Registro'></input><br />
                    </div>
                </form>
                <h2 className="text-info m-2">{this.state.responseMessage}</h2>
            </div>
        )
    }
}