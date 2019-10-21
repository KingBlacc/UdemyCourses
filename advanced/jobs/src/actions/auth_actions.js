import { AsyncStorage} from 'react-native'
import * as Facebook from 'expo-facebook'
import { FB_LOGIN_SUCCESS, FB_LOGIN_FAILED, FB_TOKEN } from './types';
import { navigate } from '../navigationRef';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem(FB_TOKEN);
    if(token){
        //Dispatch an action
        dispatch({type: FB_LOGIN_SUCCESS, payload: token});
    }else{
        loginWithFacebook(dispatch);
    }
};

const loginWithFacebook = async dispatch => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('2271485379645893', {
        permissions: ['public_profile']
    });

    if (type === 'cancel'){
        return dispatch({type: FB_LOGIN_FAILED});
    }

    await AsyncStorage.setItem(FB_TOKEN, token);
    dispatch({type: FB_LOGIN_SUCCESS, payload: token});
}