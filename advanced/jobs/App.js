import React, {Component} from 'react';
import { View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

class App extends Component {
  render(){
    
    
    
    return (
      <View style={{flex: 1}}>
      </View>
    );
  }
}
const MainNavigator = createMaterialTopTabNavigator({
      welcome: {screen: WelcomeScreen},
      auth: {screen: AuthScreen}
    });

export default createAppContainer(MainNavigator);