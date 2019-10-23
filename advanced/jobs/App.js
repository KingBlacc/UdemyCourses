import { Notifications } from 'expo';
import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {Alert} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './src/store';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import SettingScreen from './src/screens/SettingsScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import { setNavigator } from './src/navigationRef';
import registerForNotifications from './src/services/push_notifications';

class Main extends Component {
    componentDidMount(){
        registerForNotifications();
        Notifications.addListener((notif) => {
            const {data: {text}, origin} = notif;
            if(origin === 'received' && text){
                Alert.alert(
                    'New Notification',
                    text,
                    [{text: 'Ok'}]
                );
            }
        });
    }
    
    render(){
        const reviewFlow = createStackNavigator({
            Review: ReviewScreen,
            Setting: SettingScreen
        });
        
        const mapFlow = createMaterialTopTabNavigator({
            Map: MapScreen,
            Deck: DeckScreen,
            reviewFlow
        });
        
        const MainNavigator = createSwitchNavigator({
              Welcome: WelcomeScreen,
              Auth: AuthScreen,
              mapFlow
            });

        const App = createAppContainer(MainNavigator);
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App
                    ref={(navigator) => {
                        setNavigator(navigator)
                }}/>
            </PersistGate>
        </Provider>)
    }
}

export default Main;