import { connect } from 'react-redux';
import SendMessage from '../chat/SendMessage';
import { sendMessage } from '../actions';

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        users: state.users,
        // messages: state.messages,
        /*users: {
            activeUser: state.users.activeUser,
        },*/
    }
    // TODO: https://stackoverflow.com/questions/48676074/react-select-with-redux-form-value-undefined-after-first-submit
};

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author, activeUser) => {
        // console.log(message);
        dispatch(sendMessage(message, author, activeUser))
    }
});

export const SendMessageContainer = connect(
    mapStateToProps,
    //() => ({}),
    mapDispatchToProps
)(SendMessage);
