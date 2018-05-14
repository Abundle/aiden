const usersReducer = (state = {
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
}, action) => {
    switch (action.type) {
        case 'CHAT_SELECTED':
            console.log(action.payload);
            return {
                ...state,
                activeUser: action.payload,
            };
            // return action.payload;
        default:
            return state;
    }
};

export default usersReducer;