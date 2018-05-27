import { connect } from 'react-redux';
import MessageApp from '../MessageApp';

const mapStateToProps = (state) => ({
    users: {
        byId: state.users.byId,
        activeUser: state.users.activeUser,
    },
    messages: state.messages,
});

export const MessageAppContainer = connect(
    mapStateToProps,
    {}
)(MessageApp);