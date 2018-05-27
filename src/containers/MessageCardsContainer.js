import { connect } from 'react-redux';
import ChatCards from '../chat/MessageCards';
import { selectMessage } from '../actions';

/*const mapStateToProps = (state) => ({
    assistant: state.assistant,
});*/

const mapDispatchToProps = dispatch => ({
    dispatch: (scenario) => {
        dispatch(selectMessage(scenario))
    }
});

export const MessageCardsContainer = connect(
    null,
    // mapStateToProps,
    mapDispatchToProps,
)(ChatCards);
