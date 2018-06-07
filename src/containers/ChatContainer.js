import { connect } from 'react-redux';
import Chat from '../chat/Chat';

const mapStateToProps = state => ({
    users: {
        byId: state.users.byId,
        selectedUser: state.users.selectedUser,
    },
    messages: state.messages,
    // scenarios: state.scenarios,
});

export const ChatContainer = connect(
    mapStateToProps,
    {}
)(Chat);
