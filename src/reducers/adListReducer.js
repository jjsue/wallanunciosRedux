const initialAdlist = {}
const adListReducer = (state, action) => {
    let newState = state;
    if (state === undefined) {
        return initialAdlist;
    }
    switch (action.type) {
        case 'AD_STORAGE':
            newState = action.payload.adData
            return newState
        default:
            return state;
    }
}
export { adListReducer };