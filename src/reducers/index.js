import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
});

export default rootReducer;