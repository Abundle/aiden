import { connect } from 'react-redux';
import UserList from '../UserList';
import { selectChat } from '../actions';

const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: (user) => {
        dispatch(selectChat(user))
    },
    onOpen: ownProps.onOpen,
});

export const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);