const initialUsername = {
    username: 'Anon',
}
const userNameReducer = (state, action) => {
    let newState = state;
    if (state === undefined) {
        return initialUsername;
    }
    switch (action.type) {
        case 'READ_USERNAME_LOCALSTORAGE':
            if (localStorage.getItem('username') !== null) {
                return localStorage.getItem('username');
            } else {
                return 'Anonimous';
            }
        case 'ADD_USERNAME':
            newState = action.payload.username
            localStorage.setItem('username', newState);
            return newState
        default:
            return state;
    }
}
export { userNameReducer };