// import * as types from './ActionTypes';

let nextMessageId = 5;
// let nextUserId = 3;

export const sendMessage = (message, author, activeUser) => ({
    type: 'SEND_MESSAGE',
    id: 'message' + nextMessageId++,
    // payload: { author, message, activeUser },
    author,
    message,
    activeUser, // receiver
    // receiver: activeUser,
    // payload: [message, author],
});

export const selectMessage = scenario => ({
    type: 'MESSAGE_SELECTED',
    payload: scenario,
});

export const selectChat = user => ({
    type: 'CHAT_SELECTED',
    payload: user,
});

/*export const addUser = id => ({ // = assign user
    type: 'ADD_USER',
    id: 'user' + id,
    // name,
});*/

/*export const addUser = (name) => ({
    type: 'ADD_USER',
    id: 'user' + nextUserId++,
    name,
});*/

export const messageReceived = (message, author, activeUser) => {
    // console.log('hi');
    return {
        type: 'MESSAGE_RECEIVED',
        id: 'message' + nextMessageId++,
        author,
        message,
        activeUser, // receiver
    }
};

export const activateAssistant = boolean => {
    // console.log(boolean);
    return {
        type: 'ACTIVATE_ASSISTANT',
        payload: { assistant: boolean },
        // payload: { assistant: boolean, user },
    }
};

export const populateUsersList = users => ({
    type: 'USERS_LIST',
    users,
});

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
