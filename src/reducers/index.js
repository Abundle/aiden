import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';
// import activeUserReducer from './activeUserReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    // activeUser: activeUserReducer,
});

export default rootReducer;