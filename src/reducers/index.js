import { combineReducers } from 'redux';
import {userNameReducer} from './addUsernameReducer';

export default combineReducers({
    username: userNameReducer,
});