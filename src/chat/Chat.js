import React, { Component } from 'react';
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
import { SendMessageContainer } from '../containers/SendMessageContainer';
import Message from './Message';

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: theme.palette.background.paper,
    },
    toolBar: {
        padding: 0,
    },
    chatContent: {
        overflowY: 'scroll',
        height: '100%',
        paddingBottom: 150,
    },
    sendMessage: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        padding: 10,
    },
    input: {
        width: '15vw',
        minWidth: 215,
        padding: 10,
        // borderRadius: 10,
    },
    button: {
        minWidth: 55,
        minHeight: 55,
        marginLeft: theme.spacing.unit,
    },
});

class Chat extends Component {
    componentDidMount = (node) => {
        if (node) {
            node.addEventListener('scroll', () => console.log('scroll!'));
        }
    };

    render() {
        const { classes, users, messages } = this.props;

        return (
            <Slide
                direction='left'
                in={ this.props.open }
                mountOnEnter
                unmountOnExit
            >
                <Paper
                    className={ classes.root }
                >
                    <AppBar elevation={ 0 } position='static' color='secondary'>
                        <Toolbar className={ classes.toolBar }>
                            <IconButton color='inherit' onClick={ this.props.onClose } aria-label='Close'> {/*onClick={ () => props.onClose() }*/}
                                <Icon>chevron_left</Icon>
                            </IconButton>
                            <Typography variant='title' color='inherit'>
                                { users.activeUser.name }
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    {/*TODO: automatically scroll down/push to newest message*/}
                    <div
                        className={ classes.chatContent }
                        ref={ this.componentDidMount }
                    >
                        <ul>
                            { (users.activeUser.messages || []).map(id => {
                                // console.log(messages.byId[id]);
                                return (
                                    <Message
                                        key={ id }
                                        author={ messages.byId[id].author }
                                    >
                                        { messages.byId[id].message }
                                    </Message>
                                )
                            }) }
                        </ul>
                    </div>
                    <SendMessageContainer />
                </Paper>
            </Slide>
        )
    }
}

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
    users: PropTypes.oneOfType([
        // PropTypes.array,
        PropTypes.object,
    ]),
    messages: PropTypes.oneOfType([
        // PropTypes.array,
        PropTypes.object,
    ]),
};

export default withStyles(styles)(Chat);