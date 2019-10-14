import React, {Component} from 'react';
import {Button, Card, CardSection, InputElement, Spinner} from './common';
import firebase from 'firebase';
import { Text } from 'react-native-elements';

class LoginForm extends Component{
    state = { email: '', password: '', error: '', loading: false};

    onButtonPress(){
        const { email, password} = this.state;
        
        this.setState({error: '', loading: true});
                
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail(){
        this.setState({error: 'Authentication Failed', loading: false});
    };

    onLoginSuccess(){
        this.setState({error: '', email: '', password: '', loading: false});
    };

    renderButton(){
        if(this.state.loading){
            return <Spinner size='small'/>
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
            </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <InputElement
                        isPassword = {false}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label='Email'
                        placeholder='user@domain.com'/> 
                </CardSection>

                <CardSection>
                    <InputElement
                            isPassword = {true}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            label='Password'
                            placeholder='******'/>
                </CardSection>

                <Text style={styles.errorStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;