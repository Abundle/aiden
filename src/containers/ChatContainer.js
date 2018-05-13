import { connect } from 'react-redux';
import Chat from '../chat/Chat';

export const ChatContainer = connect(state => ({
    user: state.activeUser,
    messages: state.messages
}), {})(Chat);

/*
const mapStateToProps = (state) => ({
    user: state.activeUser,
    messages: state.messages,
    // message: state.user.message,
});

export const ChatContainer = connect(
    mapStateToProps,
    {}
)(Chat);*/
