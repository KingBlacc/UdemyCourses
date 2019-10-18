import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import axios from 'axios';

const BASE_URL = 'http://localhost:6063/api';

class SignUpForm extends Component {
    state = {phone: ''};

    handleSubmit = () => {
        axios.post(`${BASE_URL}/user`, {
            phone: this.state.phone
        }).then(() => {
            axios.post(`${BASE_URL}/otp`, {
                phone: this.state.phone
            })
            .catch(console.log({error: 'FAiled to send OTP'}))
        }).catch(err => console.log({error: 'Failed to create user'}))
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
                <Button 
                    title='Submit'
                    onPress={this.handleSubmit.bind(this)}/>
            </View>
        );
    }
}

export default SignUpForm;