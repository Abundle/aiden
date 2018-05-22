// import * as types from './ActionTypes';

let nextMessageId = 4;
// let nextUserId = 3;

export const sendMessage = (message, author, activeUser) => ({
    type: 'SEND_MESSAGE',
    id: 'message' + nextMessageId++,
    // payload: { author, message, activeUser },
    author,
    message,
    activeUser, // receiver
    // payload: [message, author],
});

export const selectChat = user => ({
    type: 'CHAT_SELECTED',
    payload: user,
});

export const addUser = id => ({ // = assign user
    type: 'ADD_USER',
    id: 'user' + id,
    // name,
});

/*export const addUser = (name) => ({
    type: 'ADD_USER',
    id: 'user' + nextUserId++,
    name,
});*/

export const messageReceived = (message, author) => {
    console.log('hi');
    return {
        type: 'MESSAGE_RECEIVED',
        id: nextMessageId++,
        message,
        author,
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
