import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, Input, Text} from 'react-native-elements';
import axios from 'axios';

const BASE_URL = 'http://13205afc.ngrok.io/api';

class SignInForm extends Component{
    state = {phone: '', error: '', code: ''};

    verifyOTP = async () => {
        try {
            let {data} = await axios.post(`${BASE_URL}/verify`, 
                {code: this.state.code, phone: this.state.phone});
            firebase.auth().signInWithCustomToken(data.token);
        } catch (error) {
            this.setState({error});
        }
    }

    render(){
        return(
            <View>
                <View style={{marginBottom: 10}}>
                    <Text>Enter PhoneNumber</Text>
                    <Input 
                        value={this.state.phone}
                        onChangeText={phone => this.setState({phone})}/>
                </View>
                <View style={{marginBottom: 10}}>
                    <Text>Enter Code</Text>
                    <Input 
                        value={this.state.code}
                        onChangeText={code => this.setState({code})}/>
                </View>
                <Button 
                    title='Verify'
                    onPress={this.verifyOTP.bind(this)}/>
            </View>
        );
    }
}

export default SignInForm;