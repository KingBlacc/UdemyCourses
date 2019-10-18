import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import axios from 'axios';

const BASE_URL = 'http://13205afc.ngrok.io/api';

class SignUpForm extends Component {
    state = {phone: '', error: ''};

    handleSubmit = async() => {
       try {
        await axios.post(`${BASE_URL}/user`, { phone: this.state.phone });
        await axios.post(`${BASE_URL}/otp`, {phone: this.state.phone});
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
                <Button 
                    title='Submit'
                    onPress={this.handleSubmit.bind(this)}/>
            </View>
        );
    }
}

export default SignUpForm;