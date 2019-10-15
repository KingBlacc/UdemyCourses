import firebase from 'firebase';
import { UPDATE_EMPLOYEE, CREATE_EMPLOYEE, EMPLOYEES_FETCH_SUCCESS } from "./types";
import { Actions } from 'react-native-router-flux';

 export const employeeUpdate = ({prop, value}) => {
    return {
        type: UPDATE_EMPLOYEE,
        payload: {prop, value}
    };
 };

 export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, shift})
        .then(() => {
            dispatch({type: CREATE_EMPLOYEE});
            Actions.employeeList({type: 'reset'});
            });
    }
 };

 export const employeesFetch = () => {
     const {currentUser} = firebase.auth();
     return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
        });
     };
 };