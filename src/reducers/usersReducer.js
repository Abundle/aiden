const usersReducer = (state = [
    {
        id: 0,
        name: 'Dave Kellie',
        // message: 'hello',
    },
    {
        id: 1,
        name: 'Kellie Max',
        // message: 'hello'
    },
], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default usersReducer;