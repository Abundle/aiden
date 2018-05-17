import { takeEvery } from 'redux-saga/effects'
// import * as types from '../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage(params) {
    // console.log(params);
    yield takeEvery('ADD_MESSAGE', (action) => {
        console.log('hi');
        action.author = params.username;
        params.socket.send(JSON.stringify(action))
    });
};

export default handleNewMessage;