import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const styles = {
    chatContent: {
        overflowY: 'scroll',
        height: '100%',
        paddingBottom: 150,
    },
};

const Conversation = ({ messages }) => (
    <div style={ styles.chatContent } >
        <ul>
            { messages.map(message => (
                <Message
                    key={ message.id }
                    { ...message }
                />
            )) }
        </ul>
    </div>
);

Conversation.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};

export default Conversation;