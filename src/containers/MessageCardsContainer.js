import { connect } from 'react-redux';
import ChatCards from '../chat/MessageCards';
import { selectMessage } from '../actions';

const mapStateToProps = state => ({
    scenarios: state.scenarios,
});

const mapDispatchToProps = dispatch => ({
    dispatch: (scenario) => {
        dispatch(selectMessage(scenario))
    }
});

export const MessageCardsContainer = connect(
    mapStateToProps,
    // null,
    mapDispatchToProps,
)(ChatCards);
