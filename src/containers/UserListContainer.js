import { connect } from 'react-redux';
import UserList from '../chat/UserList';
import { selectChat } from '../actions';

const mapStateToProps = (state) => ({
    users: state.users,
    messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (id) => {
        dispatch(selectChat(id))
    },
});

export const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);