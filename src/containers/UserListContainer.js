import { connect } from 'react-redux';
import UserList from '../UserList';
import { selectChat } from '../actions';

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = dispatch => ({
    dispatch: (user) => {
        dispatch(selectChat(user))
    }
});

export const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);