const initialAdlist = {
    sendData: {
        name: null,
        sellOrBuy: 'sell',
        tags: 'lifestyle',
        price: null,
        description: null,
        photoUrl: null,
    },
    receivedData: {}
}
const adCreateReducer = (state, action) => {
    let newState = state;
    //Inicializacion del estado.
    if (state === undefined) {
        return initialAdlist;
    }
    switch (action.type) {
        case 'AD_CREATE':
            newState.receivedData = action.payload.adData
            return newState
        case 'AD_CREATE_FORM_NAME':
            newState.sendData.name = action.payload.adData;
            return newState;
        case 'AD_CREATE_FORM_SELL_OR_BUY':
            newState.sendData.sellOrBuy = action.payload.adData;
            return newState;
        case 'AD_CREATE_FORM_TAGS':
            newState.sendData.tags = action.payload.adData;
            return newState;
        case 'AD_CREATE_FORM_PRICE':
            newState.sendData.price = action.payload.adData;
            return newState;
        case 'AD_CREATE_FORM_DESCRIPTION':
            newState.sendData.description = action.payload.adData;
            return newState;
        case 'AD_CREATE_FORM_IMAGE_URL':
            newState.sendData.photoUrl = action.payload.adData;
            return newState;

        default:
            console.log("default");
            return state;
    }
}
export { adCreateReducer };