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
    padding: {
        paddingLeft: theme.spacing.unit * 3,
    },
    noPadding: {
        paddingLeft: 0,
    },
    /*container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
    },*/
});

class Chat extends Component {
    componentDidMount = (node) => {
        if (node) {
            nodeElement = node;
            this.pushMessage(node);

            /*node.addEventListener('scroll', () => {
                console.log(node.scrollHeight);
            });*/
        }
    };

    pushMessage = (node) => {
        // console.log(event)
        if (node) {
            setTimeout(() => { // TODO: find different way to do this?
                node.scrollTo(0, node.scrollHeight);
            }, 50);
        }
    };

    render() {
        const { classes, assistant, users, messages } = this.props;

        let userAssistant = users.byId['user0'];
        let userMessageApp = users.byId['user1'];
        let userSender = assistant ? userAssistant : userMessageApp;
        let userReceiver = assistant ? userMessageApp : userAssistant;

        let messagesSender = userSender.messages || [];
        let messagesReceiver = userReceiver.messages || [];
        let messagesArray = messagesSender.concat(messagesReceiver);
        let current = messagesArray.length;

        console.log(nodeElement);
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
                <Paper className={ classes.root }>
                    <AppBar elevation={ 0 } position='static' color='primary'>
                        <Toolbar className={ classes.toolBar }>
                            { assistant &&
                                <IconButton color='inherit' onClick={ this.props.onClose } aria-label='Close'>
                                    <Icon>chevron_left</Icon>
                                </IconButton>
                            }
                            <Typography variant='title' color='inherit' className={ assistant ? classes.noPadding : classes.padding }>
                                { userReceiver.name }
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <div
                        className={ classes.chatContent }
                        ref={ this.componentDidMount }
                    >
                        <ul>
                            { (messagesArray || []).map(id => {
                                // console.log(id);
                                return (
                                    <Message
                                        key={ id }
                                        author={ messages.byId[id].author }
                                        sender={ userReceiver.name }
                                    >
                                        { messages.byId[id].message }
                                    </Message>
                                )

                                /*return (
                                    messages.byId[id].receiver === (userAssistant.name) ||
                                    messages.byId[id].receiver === (userSender.name) ?
                                        (<Message
                                            key={ id }
                                            author={ messages.byId[id].author }
                                        >
                                            { messages.byId[id].message }
                                        </Message>) : (null)
                                )*/
                            }) }
                        </ul>
                    </div>

                    <SendMessageContainer assistant/>
                </Paper>
            </Slide>
        )
    }
}

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
    users: PropTypes.oneOfType([
        PropTypes.object,
    ]),
    messages: PropTypes.oneOfType([
        PropTypes.object,
    ]),
};

export default withStyles(styles)(Chat);