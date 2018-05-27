import { connect } from 'react-redux';
import SendMessage from '../chat/SendMessage';
import { sendResponseWithTimeout } from '../actions';

const mapStateToProps = state => {
    return {
        users: state.users, // TODO: check which state subtree is needed
        messages: {
            messageSelected: state.messages.messageSelected,
        },
        scenarios: state.scenarios,
    }
};

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author, receiver, scenario) => {
        dispatch(sendResponseWithTimeout(message, author, receiver, scenario));
    }
});

export const SendMessageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SendMessage);
