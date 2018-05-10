import { connect } from 'react-redux';
import Conversation from '../chat/Conversation';

export const ConversationContainer = connect(state => ({
    messages: state.messages
}), {})(Conversation);