import { takeEvery } from 'redux-saga/effects'
// import * as types from '../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage(params) {
    // console.log(params);
    yield takeEvery('SEND_MESSAGE', (action) => {
        console.log(action, params);
        // action.id = params.id;
        // action.author = params.username;
        params.socket.send(JSON.stringify(action));
    });
};

export default handleNewMessage;