import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Local import
import DigitalAssistantApp from './DigitalAssistantApp';
import MessageApp from './MessageApp';

const styles = {
    root: {
        backgroundColor: 'gray',
    },
};

function UserGreeting(props) {
    const { classes, assistant } = props;
    const userGreeting = assistant ? (
        <p>[Aidan Bundel]</p>
    ) : (
        <p>[Dave Kellie]</p>
    );

    return (
        <div className={ classes.root }>
            { userGreeting }
        </div>
    );
}

UserGreeting.propTypes = {
    assistant: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserGreeting);