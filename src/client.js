// import * as types from '../constants/ActionTypes';
// import { messageReceived } from './actions';
import { addUser, activateAssistant } from './actions';

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => { // initial connection
        socket.send(JSON.stringify({
            type: 'ADD_USER',
            name: username
        }));
    };
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // console.log(data);

        switch (data.type) {
            case 'ACTIVATE_ASSISTANT':
                dispatch(activateAssistant(data.payload));
                break;
            case 'ADD_MESSAGE':
                // dispatch(messageReceived(data.message, data.author));
                break;
            case 'ADD_USER':
                dispatch(addUser(data.name));
                break;
            /*case 'USERS_LIST':
                dispatch(populateUsersList(data.users));
                break;*/
            default:
                break;
        }
    };

    return socket;
};

export default setupSocket;