import { connect } from 'react-redux';
import UserGreeting from '../UserGreeting';

const mapStateToProps = (state, ownProps) => ({
    assistant: ownProps.assistant,
    users: {
        byId: state.users.byId,
    },
});

export const UserGreetingContainer = connect(
    mapStateToProps,
    {}
)(UserGreeting);
