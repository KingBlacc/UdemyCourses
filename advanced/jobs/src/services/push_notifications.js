import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import { PUSH_TOKEN } from '../actions/types';
import axios from 'axios';

const PUSH_ENDPOINT = 'https://exp.host/--/api/v2/push/send';

export default async() => {
    let saved_token = await AsyncStorage.getItem(PUSH_TOKEN);
    console.log(saved_token);
    if(saved_token){
        return;
    }else{
        let {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        
        if(status !== 'granted'){
            return;
        }

        let token = await Notifications.getExpoPushTokenAsync();

        await axios.post(PUSH_ENDPOINT, {token: {token}});
        AsyncStorage.setItem(PUSH_TOKEN, token);
    }
};