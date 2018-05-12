import { connect } from 'react-redux';
import Chat from '../chat/Chat';
import { sendMessage } from '../actions';

const mapStateToProps = (state) => ({
    user: state.activeUser,
    // messages: state.messages,
    // message: state.user.message,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (message, author) => {
        // console.log(author, message);
        dispatch(sendMessage(message, author))
    },
});

export const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);