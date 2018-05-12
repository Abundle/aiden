import { connect } from 'react-redux';
import Chat from '../chat/Chat';
import { sendMessage } from "../actions";

const mapStateToProps = state => ({
    user: state.activeUser,
    messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(sendMessage(message, author))
    }
});

export const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);