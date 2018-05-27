const reducers = (state = {
    messages: {
        byId: {
            'message0': {
                id: 'message0',
                author: 'Aidan Bundel',
                message: "First message I've sent to Dave Kellie",
                receiver: 'Dave Kellie',
            },
            'message1': {
                id: 'message1',
                author: 'Dave Kellie',
                message: 'hwllaod',
                receiver: 'Aidan Bundel',
            },
            'message2': {
                id: 'message2',
                author: 'Kellie Max',
                message: 'hahdl',
                receiver: 'Aidan Bundel',
            },
            'message3': {
                id: 'message3',
                author: 'Dave Kellie',
                message: 'hiadll',
                receiver: 'Aidan Bundel',
            },
            'message4': {
                id: 'message4',
                author: 'Aidan Bundel',
                message: "Second message I've sent to Dave",
                receiver: 'Dave Kellie',
            },
        },
        allIds: ['message0', 'message1', 'message2', 'message3', 'message4'],
        messageSelected: [],
    },
    users: {
        byId: {
            'user0': {
                id: 'user0',
                name: 'Aidan Bundel',
                messages: ['message0', 'message4'],
            },
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
        allIds: ['user0', 'user1', 'user2'],
        activeUser: ['user1'],
        /*activeUser: {
            id: 'user0',
            name: 'Aidan Bundel',
            messages: ['message0', 'message4'],
        },*/
        // activeUser: [], // chat selected
        // usersOnline: [],
    },
    // assistant: false, // if true, user0 is online
}, action) => {
    // console.log(action);
    switch (action.type) {
       /* case 'ACTIVATE_ASSISTANT':
            // console.log(action.payload.user);
            return {
                ...state,
                assistant: action.payload.assistant,
            };*/
        case 'SEND_MESSAGE':
            // console.log(action.receiver);
            return {
                ...state,
                messages: {
                    ...state.messages,
                    byId: {
                        ...state.messages.byId,
                        [action.id]: {
                            id: action.id,
                            author: action.author.name,
                            message: action.message,
                            receiver: action.receiver.name,
                        }
                    },
                    allIds: [...state.messages.allIds, action.id]
                },
                users: {
                    ...state.users,
                    byId: {
                        ...state.users.byId,
                        [action.author.id]: {
                            ...state.users.byId[action.author.id],
                            messages: [...state.users.byId[action.author.id].messages, action.id]
                        }
                    },
                    // allIds: [...state.users.allIds, 'user3'],
                    /*activeUser: {
                        ...state.users.activeUser,
                        messages: [...state.users.activeUser.messages, action.id]
                    }*/
                }
            };
        /*case 'MESSAGE_RECEIVED':
            // console.log(action.activeUser);
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
                            receiver: action.activeUser.name,
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
                    /!*activeUser: {
                        ...state.users.activeUser,
                        messages: [...state.users.activeUser.messages, action.id]
                    }*!/
                }
            };*/
        case 'MESSAGE_SELECTED':
            // console.log(action.payload);
            return {
                ...state,
                messages: {
                    ...state.messages,
                    messageSelected: action.payload,
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
        case 'ADD_USER':
            console.log('reducer: ADD_USER');
            break;
            /*return {
                ...state,
                users: {
                    ...state.users,
                    byId: {
                        ...state.users.byId,
                        [action.id]: {
                            id: action.id,
                            name: action.name,
                            messages: [],
                        }
                    },
                    allIds: [...state.users.allIds, action.id],
                }
            };*/
        case 'USERS_LIST': // TODO: check case
            // console.log(action.users);
            return {
                ...state,
                users: {
                    ...state.users,
                    usersOnline: action.users,
                }
            };
            // return action.users;
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
