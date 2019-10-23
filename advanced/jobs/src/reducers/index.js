import {combineReducers} from 'redux';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import likeReducer from './likesReducer'

export default combineReducers({
    authReducer,
    jobsReducer,
    likeReducer
});