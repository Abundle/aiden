import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';
import activeUserReducer from './activeUserReducer';
// import visibilityFilterReducer from './visibilityFilterReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    activeUser: activeUserReducer,
    // visibilityFilter: visibilityFilterReducer,
});

export default rootReducer;

/*import * as types from '../actions/ActionTypes';

const reducers = (state = {}, action) => {
    switch (action.type) {
        case types.SEND_MESSAGE:
            break;
        case types.SELECT_CHAT:
            return action.payload;
        case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id,
                }
            ]);
        case types.ADD_USER:
            return state.concat([{ name: action.name, id: action.id }]);
        case types.USERS_LIST:
            return action.users;
        default:
            return state;
    }
};

export default reducers;*/
