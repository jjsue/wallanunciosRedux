import { combineReducers } from 'redux';
import {userNameReducer} from './addUsernameReducer';
import {adListReducer} from './adListReducer';
import {adCreateReducer} from './adCreateReducer';
import {detailReducer} from './detailAndModifyReducer';
export default combineReducers({
    username: userNameReducer,
    adList: adListReducer,
    adCreate: adCreateReducer,
    detail: detailReducer,
});