import {combineReducers} from 'redux';
import authReducer from './authReducer';
import employeeFormReducer from './employeeFormReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm: employeeFormReducer
});