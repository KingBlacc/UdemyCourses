import React, {Component} from 'react';
import {View, AsyncStorage} from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';
import { FB_TOKEN } from '../actions/types';

const SLIDE_DATA = [
    {text: 'Welcome to JobApp', color: '#7B4B94'},
    {text: 'Set your location, then swipe away', color: '#A6D9F7'},
    {text: 'Step 1', color: '#91C7B1'},
    {text: 'Step 2', color: '#B33951'},
    {text: 'Lets Go', color: '#E3D081'}
]

class WelcomeScreen extends Component {
    state = {token: null}

    async UNSAFE_componentWillMount(){
        let token = await AsyncStorage.getItem(FB_TOKEN);

        if(token) {
            this.props.navigation.navigate('Map');
        }else{
            this.setState({token: false});
        }
    }

    onSlideComplete = () => {
        this.props.navigation.navigate('Auth');
    }

    render(){
        if(_.isNull(this.state.token)){
            return <AppLoading />;
        }

        return(
            <View style={{flex: 1}}> 
                <Slides 
                    data={SLIDE_DATA}
                    onComplete={this.onSlideComplete}/>
            </View>
        );
    }
}

export default WelcomeScreen;