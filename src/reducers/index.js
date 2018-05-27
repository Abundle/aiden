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
    },
    scenarios: {
        Echo: {
            title: 'Echo',
            keywords: 'Lizards are a widespread group of squamate reptiles.',
            response: 'Lizards are a widespread group of squamate reptiles.',
        },
        Hello: {
            title: 'Hello',
            keywords: 'Hi',
            response: 'Hello',
        },
        Whereabouts: {
            title: 'Whereabouts',
            keywords: 'Where u at 😂',
            response: 'Like right next to you',
        },
    }
}, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
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
                        },
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
                        },
                    },
                }
            };
        case 'SEND_RESPONSE':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    byId: {
                        ...state.messages.byId,
                        [action.id]: {
                            id: action.id,
                            author: action.author.name,
                            message: state.scenarios[action.scenario].response,
                            receiver: action.receiver.name,
                        },
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
                        },
                    },
                }
            };
        case 'MESSAGE_SELECTED':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    messageSelected: action.payload,
                }
            };
        case 'CHAT_SELECTED':
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
