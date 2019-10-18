import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends Component{

    UNSAFE_componentWillMount(){
      if(!firebase.apps.length){
        firebase.initializeApp({
          apiKey: "AIzaSyBRrWD1WXlvYkCSDDHF5UWtyToOawPCJbw",
          authDomain: "one-time-password-1d11b.firebaseapp.com",
          databaseURL: "https://one-time-password-1d11b.firebaseio.com",
          projectId: "one-time-password-1d11b",
          storageBucket: "one-time-password-1d11b.appspot.com",
          messagingSenderId: "798613158215",
          appId: "1:798613158215:web:8786028ec7e71d1a773462",
          measurementId: "G-XH1TTREYFY"
        });
      }
    }

    render(){
      return (
      <View style={styles.container}>
        <SignUpForm/>
        <View style={{margin: 30}}/>
        <SignInForm/>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;