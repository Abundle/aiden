const reducers = (state = {
    messages: {
        byId: {
            'message1': {
                id: 'message1',
                author: 'Dave Kellie',
                message: 'hwllaod',
            },
            'message2': {
                id: 'message2',
                author: 'Kellie Max',
                message: 'hahdl',
            },
            'message3': {
                id: 'message3',
                author: 'Dave Kellie',
                message: 'hiadll',
            },
        },
        allIds: ['message1', 'message2', 'message3']
    },
    users: {
        byId: {
            'user1': {
                id: 'user1',
                name: 'Dave Kellie',
                messages: ['message1', 'message3'],
            },
            'user2': {
                id: 'user2',
                name: 'Kellie Max',
                messages: ['message2'],
            },
        },
        allIds: ['user1', 'user2'],
        activeUser: [],
    }
}, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            // console.log(action.id);
            return {
                ...state,
                messages: {
                    ...state.messages,
                    byId: {
                        ...state.messages.byId,
                        [action.id]: {
                            id: action.id,
                            author: action.author,
                            message: action.message,
                        }
                    },
                    allIds: [...state.messages.allIds, action.id]
                },
                users: {
                    ...state.users,
                    byId: {
                        ...state.users.byId,
                        [action.activeUser.id]: {
                            ...state.users.byId[action.activeUser.id],
                            messages: [...state.users.byId[action.activeUser.id].messages, action.id]
                        }
                    },
                    activeUser: {
                        ...state.users.activeUser,
                        messages: [...state.users.activeUser.messages, action.id]
                    }
                }
            };
        case 'CHAT_SELECTED':
            // console.log(action.payload);
            return {
                ...state,
                users: {
                    ...state.users,
                    activeUser: action.payload,
                }
            };
        default:
            return state;
    }
};

export default reducers;

/*
import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
});

export default rootReducer;*/
