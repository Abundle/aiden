import { connect } from 'react-redux';
import SendMessage from '../chat/SendMessage';
import { sendMessage } from '../actions';

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        users: state.users, // TODO: check which state subtree is needed
    }
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
