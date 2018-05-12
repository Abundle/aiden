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
                message: 'lorem',
            },
        ],
    },
], action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            console.log(action.user);
            return state;
            // TODO: read http://nalwaya.com/javascript/2016/05/02/react-js-best-practices.html
        default:
            return state;
    }
};

export default usersReducer;