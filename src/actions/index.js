// import * as types from './ActionTypes';

let nextMessageId = 5;
let delay = 1000;
const userAssistant = 'Aidan Bundel';  // TODO: get from Redux store if possible?
// let nextUserId = 3;

export const sendMessage = (message, author, receiver) => ({
    type: 'SEND_MESSAGE',
    id: 'message' + nextMessageId++,
    message,
    author,
    receiver,
});

export const sendResponseWithTimeout = (message, author, receiver, scenario) => {
    return dispatch => {
        dispatch(sendMessage(message, author, receiver));

        if (receiver.name === userAssistant) {
            setTimeout(() => {
                // console.log(scenario);
                dispatch(sendResponse(scenario, receiver, author));
            }, delay);
        }
    };
};

export const sendResponse = (scenario, author, receiver) => ({ //message, scenario
    type: 'SEND_RESPONSE',
    id: 'message' + nextMessageId++,
    scenario,
    author,
    receiver,
});

export const selectMessage = scenario => ({
    type: 'MESSAGE_SELECTED',
    payload: scenario,
});

export const selectChat = id => ({
    type: 'CHAT_SELECTED',
    payload: id,
});
