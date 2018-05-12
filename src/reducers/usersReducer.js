const usersReducer = (state = [
    {
        id: 0,
        name: 'Dave Kellie',
        messages: [
            {
                id: 0,
                message: 'hao',
                // time: '16:15',
            },
            {
                id: 1,
                message: 'adfl',
            },
        ],
    },
    {
        id: 1,
        name: 'Kellie Max',
        messages: [
            {
                id: 0,
                message: 'hello',
            },
            {
                id: 1,
                message: 'hi',
            },
        ],
    },
], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default usersReducer;