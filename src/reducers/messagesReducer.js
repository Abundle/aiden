const messagesReducer = (state = {
    byId : {
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
}

/*[
    {
        id: 0,
        message: 'ladjkf',
    },
    {
        id: 1,
        message: 'aldkjf'
    }
]*/
, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return [
                ...state,
                {
                    id: action.id,
                    author: action.author,
                    message: action.message,
                }
            ];
        default:
            return state;
    }
};

export default messagesReducer;
