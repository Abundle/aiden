// import * as types from '../constants/ActionTypes';
// import { messageReceived } from './actions';
import { activateAssistant, messageReceived, populateUsersList } from './actions'; //addUser

const setupSocket = (dispatch, id) => { // username
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => { // initial connection
        socket.send(JSON.stringify({
            type: 'ADD_USER',
            payload: id,
            // name: username
        }));
    };
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // console.log(data);

        switch (data.type) {
            case 'ACTIVATE_ASSISTANT':
                dispatch(activateAssistant(data.payload.assistant));
                // dispatch(activateAssistant(data.payload.assistant, data.payload.user));
                // dispatch(addUser(data.users));
                break;
            case 'SEND_MESSAGE':
                console.log('hi');
                dispatch(messageReceived(data.message, data.author));
                break;
            /*case 'ADD_MESSAGE':
                // dispatch(messageReceived(data.message, data.author));
                break;
            case 'ADD_USER':
                dispatch(addUser(data.name));
                break;*/
            case 'USERS_LIST': // dispatch 'users online' action
                dispatch(populateUsersList(data.payload.users));
                // console.log(data.payload.users);
                break;
            default:
                console.log(data);
                break;
        }
    };

    return socket;
};

export default setupSocket;