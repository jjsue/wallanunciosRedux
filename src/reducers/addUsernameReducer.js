const initialUsername = {
    username: 'Anon',
}
const userNameReducer = (state, action) => {
    let newState = state;
    //Inicializacion del estado.
    if (state === undefined) {
        return initialUsername;
    }
    switch (action.type) {
        case 'READ_USERNAME_LOCALSTORAGE':
            console.log(localStorage.getItem('username'));
            if (localStorage.getItem('username') !== null) { // Comprobar que efectivamente el campo existe.
                return localStorage.getItem('username');
            } else {
                return 'Anonimous';
            }
        case 'ADD_USERNAME':
            newState = action.payload.username
            //En el momento que adquirimos el nombre de usuario lo colocamos en el localstorage:
            localStorage.setItem('username', newState);
            return newState
        default:
            return state;
    }
}
export { userNameReducer };