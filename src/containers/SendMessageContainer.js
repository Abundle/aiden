import { connect } from 'react-redux';
import SendMessage from '../chat/SendMessage';
import { sendMessage } from '../actions';

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        users: state.users,
        /*users: {
            activeUser: state.users.activeUser,
        },*/
    }

};

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
