import { combineReducers } from 'redux';
import {userNameReducer} from './addUsernameReducer';
import {adListReducer} from './adListReducer';
export default combineReducers({
    username: userNameReducer,
    adList: adListReducer,
});