const initialAdlist = {}
const adCreateReducer = (state, action) => {
    let newState = state;
    //Inicializacion del estado.
    if (state === undefined) {
        return initialAdlist;
    }
    switch (action.type) {
        case 'AD_CREATE':
            newState = action.payload.adData
            return newState
        default:
            console.log("default");
            return state;
    }
}
export { adCreateReducer };