import { connect } from 'react-redux';
import Chat from '../chat/Chat';

const mapStateToProps = (state) => ({
    users: {
        activeUser: state.users.activeUser,
    },
    // user: state.activeUser,
    messages: state.messages
});

export const ChatContainer = connect(
    mapStateToProps,
    {}
)(Chat);

/*export const ChatContainer = connect(state => ({
    activeUser: state.activeUser,
    // user: state.activeUser,
    messages: state.messages
}), {})(Chat);*/
