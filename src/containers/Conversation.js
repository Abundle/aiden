import { connect } from 'react-redux';
import ConversationComponent from '../Conversation';

export const Conversation = connect(state => ({
    messages: state.messages
}), {})(ConversationComponent);