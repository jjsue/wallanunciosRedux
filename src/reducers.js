import { combineReducers } from 'redux';
export const addUsernameReducer = (state = state.username, action) => {
    switch (action.type) {
        case 'addUsername':
            const name = action.payload.username;

            return name;
        default:
            return state;
    }
}