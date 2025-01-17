import { FB_LOGIN_SUCCESS, FB_LOGIN_FAILED } from "../actions/types";
import { navigate } from "../navigationRef";

export default function (state = {}, action) {
    switch(action.type){
        case FB_LOGIN_SUCCESS:
            navigate('Map');
            return {token: action.payload};
        case FB_LOGIN_FAILED:
            return {token: null};
        default: 
            return state;
    }
}