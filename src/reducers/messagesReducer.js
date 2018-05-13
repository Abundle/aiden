const messagesReducer = (state = [
    {
        id: 0,
        message: 'hello',
    },
    {
        id: 1,
        message: 'wadklsf',
    },
    {
        id: 2,
        message: 'hi',
    },
]
    /*{1: { message: 'Nice blog' },
    2: { message: 'Keep posting' },}*/
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
