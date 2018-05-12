/*
import { connect } from 'react-redux';
import SendMessage from '../chat/SendMessage';
import { sendMessage } from '../actions';

const mapStateToProps = state => ({
    // messages: state.messages,
    user: state.activeChat,
});

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(sendMessage(message, author))
    }
});

export const SendMessageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SendMessage);*/
