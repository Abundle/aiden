import { connect } from 'react-redux';
import UserGreeting from '../UserGreeting';

const mapStateToProps = (state) => ({
    assistant: state.assistant,
});

export const UserGreetingContainer = connect(
    mapStateToProps,
    {}
)(UserGreeting);
