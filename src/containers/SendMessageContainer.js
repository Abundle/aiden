import { connect } from 'react-redux';
import SendMessage from '../chat/SendMessage';
import { sendMessage } from '../actions';

const mapStateToProps = (state) => ({
    users: {
        activeUser: state.users.activeUser,
    },
    // activeUser: state.activeUser,
});

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author, activeUser) => {
        dispatch(sendMessage(message, author, activeUser))
    }
});

export const SendMessageContainer = connect(
    mapStateToProps,
    //() => ({}),
    mapDispatchToProps
)(SendMessage);
