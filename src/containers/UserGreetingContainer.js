import { connect } from 'react-redux';
import UserGreeting from '../UserGreeting';
import { changeUser } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    assistant: ownProps.assistant,
    users: {
        byId: state.users.byId,
    },
});

const mapDispatchToProps = dispatch => ({
    dispatch: (index) => {
        dispatch(changeUser(index))
    }
});

export const UserGreetingContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserGreeting);
