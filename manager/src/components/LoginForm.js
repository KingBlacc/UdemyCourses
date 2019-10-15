import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, InputElement, Button, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={{fontSize: 20, color: 'red'}}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='large'/> 
        }
        return(<Button onPress={this.onButtonPress.bind(this)}>Login</Button>);
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <InputElement
                        label='Email'
                        placeholder='user@domain.com'
                        isPassword={false}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}/>
                </CardSection>

                <CardSection>
                    <InputElement
                        label='Password'
                        placeholder='******'
                        isPassword={true}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}/>
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;

    return{ email, password, error, loading };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);