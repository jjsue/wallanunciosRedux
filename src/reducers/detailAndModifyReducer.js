const initialDetail = {}
const detailReducer = (state, action) => {
    let newState = state;
    //Inicializacion del estado.
    if (state === undefined) {
        return initialDetail;
    }
    switch (action.type) {
        case 'DETAIL_GET':
            newState = action.payload.adData
            return newState
        default:
            console.log("default");
            return state;
    }
}
export { detailReducer };