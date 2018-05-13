// import * as types from '../actions/ActionTypes';

const activeUserReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHAT_SELECTED':
            console.log(action.payload);
            return action.payload;
        default:
            return state; //|| {};
    }
};

export default activeUserReducer;
