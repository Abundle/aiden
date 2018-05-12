// import * as types from '../actions/ActionTypes';

const activeUserReducer = (state = [], action) => {
    switch (action.type) {
        //case types.SEND_MESSAGE:
        case 'CHAT_SELECTED':
            // console.log(action.payload);
            return action.payload;
            /*return [
                // ...state,
                {
                    id: action.user.id,
                    name: action.user.name,
                    // openChat: true,
                }
            ];*/
        /*case types.SELECT_CHAT:
            console.log(action.openChat);
            return [
                {
                    user: action.user,
                    // openChat: true,
                }
            ];*/
        /*case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id,
                }
            ]);
        case types.ADD_USER:
            return state.concat([
                {
                    name: action.name,
                    id: action.id,
                }
            ]);
        case types.USERS_LIST:
            return action.users;*/
        default:
            return state; //|| {};
    }
};

export default activeUserReducer;
