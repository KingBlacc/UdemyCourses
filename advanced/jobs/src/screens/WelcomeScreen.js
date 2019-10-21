import React, {Component} from 'react';
import {View} from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    {text: 'Welcome to JobApp', color: '#7B4B94'},
    {text: 'Set your location, then swipe away', color: '#A6D9F7'},
    {text: 'Step 1', color: '#91C7B1'},
    {text: 'Step 2', color: '#B33951'},
    {text: 'Lets Go', color: '#E3D081'}
]

class WelcomeScreen extends Component {
    onSlideComplete = () => {
        this.props.navigation.navigate('Auth');
    }

    render(){
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