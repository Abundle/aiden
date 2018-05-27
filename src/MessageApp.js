import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Local import
import { ChatContainer } from './containers/ChatContainer';

const styles = theme => ({
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: 'lightblue',
    },
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
    },
});

class MessageApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                <div className={ classes.container }>
                    <ChatContainer
                        open={ true }
                        onClose={ this.handleClose }
                    />
                </div>
            </div>
        );
    }
}

MessageApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageApp);