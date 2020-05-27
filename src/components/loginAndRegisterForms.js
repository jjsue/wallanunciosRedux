import React, { useState } from 'react';
import { store } from './../index';
import addUsername from './../actions/addUsername';

export default function FormLoginAndRegister(props) {
    const [mailValue, setMailvalue] = useState('user@example.es');
    const [passwordValue, setPasswordValue] = useState('1234');
    const [responseMessage, setResponseMessage] = useState('');
    function changeHandlerMail(event) {
        setMailvalue(event.target.value);
    }

    function changeHandlerPass(event) {
        setPasswordValue(event.target.value);
    }

    async function submitHandler(event) {
        event.preventDefault();
        let response = await props.callType(mailValue, passwordValue);
        if (response.success === false) {
            setResponseMessage(response.error);
        }
        else if (response.success === true) {
            store.dispatch(addUsername(mailValue));
            setResponseMessage(`${props.message} ${store.getState().username}`);
        }
        else {
            setResponseMessage("Parece que algo ha ido mal, por favor, intenta de nuevo en unos segundos.");
        }
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group m-2">
                    <input className="form-control mt-1" placeholder="Introduce tu correo electronico" type='email' value={mailValue} required onChange={changeHandlerMail}></input><br />
                    <input className="form-control mt-1" placeholder="Introduce tu contraseña" type='password' value={passwordValue} required onChange={changeHandlerPass}></input><br />
                    <input className="form-control mt-1 btn btn-secondary" type='submit' value='Entrar'></input><br />
                </div>
                <h2 className="text-info m-2">{responseMessage}</h2>
            </form>
        </>
    )

}