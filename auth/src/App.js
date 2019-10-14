import React, {Component} from 'react';
import {View} from 'react-native';
import * as firebase from "firebase/app";

import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null}
    UNSAFE_componentWillMount() {
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyBh5zD9d9Aa3UPQLAOMvErMkIjnfcYLI0g",
                authDomain: "authproject-ec72d.firebaseapp.com",
                databaseURL: "https://authproject-ec72d.firebaseio.com",
                projectId: "authproject-ec72d",
                storageBucket: "authproject-ec72d.appspot.com",
                messagingSenderId: "32511152366",
                appId: "1:32511152366:web:05ef4b01591e2289fca3ff",
                measurementId: "G-PW983GBY6N"
              });
        }
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true})
            }else{
                this.setState({loggedIn: false})
            }
        });
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return (
                    <View style={{marginTop: 30}}>
                        <Button onPress={this.logOut.bind(this)}> Log Out</Button>
                    </View>
                );
            case false:
                return <LoginForm/>;
            default:
                return <View style={{marginTop: 30}}>
                    <Spinner size='large'/>
                </View>;
        }
    }

    render(){
        return(
            <View>
                <Header
                    title='Authentication Project'/>
                {this.renderContent()}
            </View>
        )
    }

    logOut(){
        firebase.auth().signOut();
    }
}

export default App;