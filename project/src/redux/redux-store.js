import {createStore , combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import friendsReducer from './friends-reducer';
import musicReducer from './music-reducer';
import settingsReducer from './settings-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsPage: friendsReducer,
    musicPage: musicReducer,
    settingsPage: settingsReducer, 
    usersPage: usersReducer,
    auth: authReducer
})


let store = createStore(reducers);
window.store = store;

export default store;