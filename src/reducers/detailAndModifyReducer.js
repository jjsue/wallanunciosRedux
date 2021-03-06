const initialDetail = {}
const detailReducer = (state, action) => {
    let newState = state;
    if (state === undefined) {
        return initialDetail;
    }
    switch (action.type) {
        case 'DETAIL_GET':
            newState = action.payload.adData
            return newState
        default:
            return state;
    }
}
export { detailReducer };