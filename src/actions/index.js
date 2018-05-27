// import * as types from './ActionTypes';

let nextMessageId = 5;
// let nextUserId = 3;

export const sendMessage = (message, author, receiver) => ({
    type: 'SEND_MESSAGE',
    id: 'message' + nextMessageId++,
    author,
    message,
    receiver,
});

/*export const sendMessage = (message, author, activeUser) => ({
    type: 'SEND_MESSAGE',
    id: 'message' + nextMessageId++,
    author,
    message,
    activeUser, // receiver
});*/

export const selectMessage = scenario => ({
    type: 'MESSAGE_SELECTED',
    payload: scenario,
});

export const selectChat = id => ({
    type: 'CHAT_SELECTED',
    payload: id,
});

/*export const messageReceived = (message, author, activeUser) => {
    return {
        type: 'MESSAGE_RECEIVED',
        id: 'message' + nextMessageId++,
        author,
        message,
        activeUser, // receiver
    }
};*/

/*export const activateAssistant = boolean => {
    return {
        type: 'ACTIVATE_ASSISTANT',
        payload: { assistant: boolean },
    }
};*/

/*export const populateUsersList = users => ({
    type: 'USERS_LIST',
    users,
});*/
