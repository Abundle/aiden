// import * as types from './ActionTypes';

let nextMessageId = 4;
let nextUserId = 3;

export const sendMessage = (message, author, activeUser) => ({
    type: 'SEND_MESSAGE',
    id: 'message' + nextMessageId++,
    author,
    message,
    activeUser, // receiver
    // payload: [message, author],
});

export const selectChat = (user) => ({
    type: 'CHAT_SELECTED',
    payload: user,
});

export const addUser = (name) => ({
    type: 'ADD_USER',
    id: 'user' + nextUserId++,
    name,
});

export const activateAssistant = (boolean) => {
    console.log(boolean);
    return {
        type: 'ACTIVATE_ASSISTANT',
        payload: boolean,
    }
};

/*export const messageReceived = (message, author) => ({
    type: 'MESSAGE_RECEIVED',
    id: nextMessageId++,
    message,
    author,
});

export const populateUsersList = (users) => ({
    type: 'USERS_LIST',
    users,
});*/
