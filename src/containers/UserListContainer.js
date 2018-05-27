import { connect } from 'react-redux';
import UserList from '../chat/UserList';
import { selectChat } from '../actions';

const mapStateToProps = (state) => ({
    users: state.users,
    messages: state.messages, // TODO: check which state subtree is needed
    // assistant: state.assistant,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (user) => {
        dispatch(selectChat(user))
    },
});

export const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);