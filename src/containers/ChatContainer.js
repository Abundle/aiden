import { connect } from 'react-redux';
import Chat from '../chat/Chat';

const mapStateToProps = state => ({
    users: {
        byId: state.users.byId,
        activeUser: state.users.activeUser,
    },
    messages: state.messages,
});

export const ChatContainer = connect(
    mapStateToProps,
    {}
)(Chat);
