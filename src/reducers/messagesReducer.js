const messagesReducer = (state = {
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
}, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            // console.log(action.activeUser);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.id]: {
                        id: action.id,
                        author: action.author,
                        message: action.message,
                    }
                },
                allIds: [...state.allIds, action.id]
            };
        default:
            return state;
    }
};

export default messagesReducer;
