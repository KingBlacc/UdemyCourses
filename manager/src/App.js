import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import * as firebase from 'firebase/app';
import LoginForm from './components/LoginForm';
import {Header} from './components/common';

class App extends Component{

    UNSAFE_componentWillMount(){
        if(!firebase.apps.length){
        firebase.initializeApp({
            apiKey: "AIzaSyDpX4l-hDgH5w1ovQQdcyoa1m9Jci0dT70",
            authDomain: "managerproject-4c0e5.firebaseapp.com",
            databaseURL: "https://managerproject-4c0e5.firebaseio.com",
            projectId: "managerproject-4c0e5",
            storageBucket: "managerproject-4c0e5.appspot.com",
            messagingSenderId: "459902222710",
            appId: "1:459902222710:web:5b9853da8cb1678a547a57",
            measurementId: "G-L4B2GW1ZY1"});
        }
    };

    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Header
                    title='Manager'/>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;