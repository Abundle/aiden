import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Slide from 'material-ui/transitions/Slide';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

// Local import
import { ConversationContainer } from '../containers/ConversationContainer';
import { SendMessageContainer } from '../containers/SendMessageContainer';

const styles = theme => ({
    toolBar: {
        padding: 0,
    },
    chatContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: theme.palette.background.paper,
    },
});

function Chat(props) {
    const { classes } = props;

    return (
        <Slide
            direction='left'
            in={ props.open }
            mountOnEnter
            unmountOnExit
        >
            <Paper
                className={ classes.chatContainer }
            >
                <AppBar elevation={ 0 } position='static' color='secondary'>
                    <Toolbar className={ classes.toolBar }>
                        <IconButton color='inherit' onClick={ props.onClose } aria-label='Close'> {/*onClick={ () => props.onClose() }*/}
                            <Icon>chevron_left</Icon>
                        </IconButton>
                        <Typography variant='title' color='inherit'>
                            { props.selectedChat }
                        </Typography>
                    </Toolbar>
                </AppBar>

                <ConversationContainer />

                <SendMessageContainer />
            </Paper>
        </Slide>
    )
}

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat);