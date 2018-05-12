import { connect } from 'react-redux';
import Chat from '../chat/Chat';
import { sendMessage } from '../actions';

/*const getVisibleMessages = (messages, filter) => {
    switch (filter) {
        case 'SHOW_ACTIVE':
            return messages.filter(m => !m.completed);
        case 'SHOW_ALL':
            return messages;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};*/

const mapStateToProps = state => ({
    user: state.activeUser,
    // messages: getVisibleMessages(state.messages, state.visibilityFilter)
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