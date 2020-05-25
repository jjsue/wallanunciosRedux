const initialAdlist = {}
const adListReducer = (state, action) => {
    let newState = state;
    //Inicializacion del estado.
    if (state === undefined) {
        return initialAdlist;
    }
    switch (action.type) {
        case 'AD_STORAGE':
            newState = action.payload.adData
            return newState
        default:
            console.log("default");
            return state;
    }
}
export { adListReducer };