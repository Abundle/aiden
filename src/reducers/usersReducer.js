const usersReducer = (state = [
    {
        id: 0,
        name: 'Dave Kellie',
        messages: [0, 1],
    },
    {
        id: 1,
        name: 'Kellie Max',
        messages: [2],
    },
]
                      /*[
    {
        0: {
            name: 'Dave Kellie',
            message: [0, 1]
        },
        1: {
            name: 'Kellie Max',
            message: [2]
        }
    }
]*/, action) => {
    switch (action.type) {
        /*case 'SEND_MESSAGE':
            console.log(action.author, action.message);
            return state;*/
            // TODO: read http://nalwaya.com/javascript/2016/05/02/react-js-best-practices.html & https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb
        default:
            return state;
    }
};

export default usersReducer;