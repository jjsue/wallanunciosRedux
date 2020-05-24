const initialUsername = {
    username: 'Anonimo',
}
const userNameReducer = (state, action) => {
    console.log("Reducer");
    console.log(state);
    let newState = state;
    //Inicializamos el estado
    if(state === undefined){
        return initialUsername;
    }
    switch (action.type) {
        case 'ADD_USERNAME':
            newState = action.payload.username
            return newState
        default:
            return state;
    }
}
export {userNameReducer};