import { connect } from 'react-redux';
import SendMessage from '../chat/SendMessage';
import { sendMessage } from '../actions';

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(sendMessage(message, author))
    }
});

export const SendMessageContainer = connect(() => ({}), mapDispatchToProps)(SendMessage);