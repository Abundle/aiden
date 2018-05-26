import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Local import
import { ChatContainer } from './containers/ChatContainer';
// import ChatList from './chat/ChatList';

const styles = theme => ({
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: 'lightblue',
    },
    test: {
        position: 'relative',
        width: '100%',
        // TODO: make bottom navigation disappear when chat is clicked
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - 56px)', //'calc(100% - 20px)',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
    },
    /*nav: {
        position: 'absolute',
        width: '100%',
        minWidth: 266,
        bottom: 0,
        zIndex: 1,
        border: '1px solid black',
    }*/
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
        // const { value } = this.state;

        return (
            <div className={ classes.root }>
                <div className={ classes.test }>
                    <ChatContainer
                        open={ true }
                        onClose={ this.handleClose }
                    />
                </div>

                {/*<ChatList />*/}
            </div>
        );
    }
}

MessageApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageApp);