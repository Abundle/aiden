import { connect } from 'react-redux';
import Chat from '../chat/Chat';

const mapStateToProps = (state) => ({
    users: {
        byId: state.users.byId,
        activeUser: state.users.activeUser,
        // usersOnline: state.users.usersOnline,
    },
    messages: state.messages,
    // assistant: state.assistant,
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
