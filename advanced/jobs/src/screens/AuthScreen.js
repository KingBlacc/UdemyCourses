import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import * as actions from '../actions';

class AuthScreen extends Component {
    componentDidMount(){
        this.props.facebookLogin();
        // this.onAuthComplete(this.props);
    }

    render(){
        return(
            <View>
                <Text>Auth Screen</Text>
            </View>
        );
    }
}

function mapStateToProps({authReducer}){
    return {token: authReducer.token}
}

export default connect(null, actions)(AuthScreen);