import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

// Local import
import { SendMessageContainer } from '../containers/SendMessageContainer';
import Message from './Message';

let naturalSort = require('natsort');
let nodeElement;
let previous;

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
            nodeElement = node;
            this.pushMessage(node);
        }
    };

    pushMessage = (node) => { // TODO: check if height has changed
        if (node) {
            setTimeout(() => { // TODO: find different way to do this?
                node.scrollTo(0, node.scrollHeight);
            }, 50);
        }
    };

    render() {
        const { classes, assistant, users, messages } = this.props;

        let currentUser = assistant ? ('user0') : ('user1'); //users.usersOnline[0];
        let messagesSender = users.byId[currentUser].messages;
        let messagesReceiver = users.activeUser.messages || [];
        let messagesArray = messagesSender.concat(messagesReceiver);
        let current = messagesArray.length;

        if (current !== previous) {
            this.pushMessage(nodeElement);
            previous = current;
        }

        messagesArray.sort(naturalSort());

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
                    <AppBar elevation={ 0 } position='static' color='primary'>
                        <Toolbar className={ classes.toolBar }>
                            <IconButton color='inherit' onClick={ this.props.onClose } aria-label='Close'>
                                <Icon>chevron_left</Icon>
                            </IconButton>
                            <Typography variant='title' color='inherit'>
                                { users.activeUser.name }
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <div
                        className={ classes.chatContent }
                        ref={ this.componentDidMount }
                    >
                        <ul>
                            { (messagesArray || []).map(id => {
                                // console.log(users.byId[currentUser].name);
                                // console.log(messages.byId[id]);

                                return (
                                    messages.byId[id].receiver === (users.activeUser.name) ||
                                    messages.byId[id].receiver === (users.byId[currentUser].name) ?
                                        (<Message
                                            key={ id }
                                            author={ messages.byId[id].author }
                                        >
                                            { messages.byId[id].message }
                                        </Message>) : (null)
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