import React, { Component } from "react";
import { store } from './../index';
import addUsername from './../actions/addUsername';
export default class formLoginAndRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mailValue: '',
            passwordValue: '',
            responseState: null,
            responseMessage: '',
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
        this.setState({ responseState: await this.props.callType(this.state.mailValue, this.state.passwordValue) });
        if (this.state.responseState.success === false) {
            this.setState({ responseMessage: this.state.responseState.error });
        }
        else if (this.state.responseState.success === true) {
            store.dispatch(addUsername(this.state.mailValue));
            this.setState({ responseMessage: `${this.props.message} ${store.getState().username}` });
        }
        else {
            this.setState({ responseMessage: "Parece que algo ha ido mal, por favor, intenta de nuevo en unos segundos." });
        }
    }
    render() {
        const { mailValue, passwordValue } = this.state;
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group m-2">
                        <input className="form-control mt-1" placeholder="Introduce tu correo electronico" type='email' value={mailValue} required onChange={this.changeHandlerMail}></input><br />
                        <input className="form-control mt-1" placeholder="Introduce tu contraseña" type='password' value={passwordValue} required onChange={this.changeHandlerPass}></input><br />
                        <input className="form-control mt-1 btn btn-secondary" type='submit' value='Entrar'></input><br />
                    </div>
                    <h2 className="text-info m-2">{this.state.responseMessage}</h2>
                </form>
            </>
        )
    }
}