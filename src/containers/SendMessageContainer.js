import { connect } from 'react-redux';
import SendMessage from '../chat/SendMessage';
import { sendMessage } from '../actions';

const mapStateToProps = (state) => {
    return {
        users: state.users, // TODO: check which state subtree is needed
        messages: {
            messageSelected: state.messages.messageSelected,
        },
        assistant: state.assistant,
    }
};

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author, activeUser) => {
        dispatch(sendMessage(message, author, activeUser))
    }
});

export const SendMessageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SendMessage);
