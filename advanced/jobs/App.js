import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
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

export default () => {return (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <App
                ref={(navigator) => {
                    setNavigator(navigator)
            }}/>
        </PersistGate>
    </Provider>)}