import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {AsyncStorage} from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';

//Middleware: Redux Persist Config
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'likeReducer',
        'authReducer'
    ],
    blacklist: ['jobsReducer']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

let persistor = persistStore(store);

export {persistor, store};