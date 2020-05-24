import React, { Component } from "react";
import { loginCall } from './../api-calls/api-calls'
//Importamos la store
import {store} from './../index';
import addUsername from './../actions/addUsername';
export default class Login extends Component {
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
        this.setState({ responseState: await loginCall(this.state.mailValue, this.state.passwordValue) });
        if (this.state.responseState.success === false) {
            this.setState({ responseMessage: this.state.responseState.error });
        }
        else if (this.state.responseState.success === true) {
            store.dispatch(addUsername(this.state.username));
            console.log(store.getState().username);
            this.setState({ responseMessage: "Bienvenido de nuevo" });
        }
        else {
            this.setState({ responseMessage: "Parece que algo ha ido mal, por favor, intenta de nuevo en unos segundos." });
        }
    }
    render() {
        const { mailValue, passwordValue } = this.state;
        return (
            <div className='register'>
                <h1 className="text-white m-2">Bienvenido a Wallanuncios</h1>
                <p className="text-white m-2">Nos encanta que vuelvas con nosotros, introduce usuario y contraseña:</p>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group m-2">
                        <input className="form-control mt-1" placeholder="Introduce tu correo electronico" type='email' value={mailValue} required onChange={this.changeHandlerMail}></input><br />
                        <input className="form-control mt-1" placeholder="Introduce tu contraseña" type='password' value={passwordValue} required onChange={this.changeHandlerPass}></input><br />
                        <input className="form-control mt-1 btn btn-secondary" type='submit' value='Entrar'></input><br />
                    </div>
                </form>
                <h2 className="text-info m-2">{this.state.responseMessage}</h2>
            </div>
        )
    }
}