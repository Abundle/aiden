// import * as types from './ActionTypes';

let nextMessageId = 2;
// let nextUserId = 0;

export const sendMessage = (message, author) => {
    // console.log(message);
    return {
        type: 'SEND_MESSAGE',
        id: nextMessageId++,
        /*message,
        author,*/
        payload: [message, author],
    }
};

/*export const sendMessage = (message, author) => ({
    type: types.SEND_MESSAGE,
    id: nextMessageId++,
    message,
    author,
});*/

export const selectChat = (user) => ({
    type: 'CHAT_SELECTED',
    payload: user,
});

/*export const VisibilityFilters = {
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL',
};*/

/*export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name,
});

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author,
});

export const populateUsersList = (users) => ({
    type: types.USERS_LIST,
    users,
});*/
