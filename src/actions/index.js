let nextMessageId = 0;

export const addMessage = message => ({
    type: 'ADD_MESSAGE',
    id: nextMessageId++,
    message
});