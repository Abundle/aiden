import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

// Local import
import { SendMessageContainer } from '../containers/SendMessageContainer';
import Message from './Message';

let naturalSort = require('natsort');
let nodeElement;
let previousMessagesLength;

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    toolBar: {
        padding: 0,
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        marginLeft: theme.spacing.unit * 2,
    },
    chatContent: {
        overflowY: 'scroll',
        height: '100%',
        paddingBottom: 150,
        backgroundColor: '#ECE5DD',
    },
    messages: {
        padding: 0,
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
    },
    button: {
        minWidth: 55,
        minHeight: 55,
        marginLeft: theme.spacing.unit,
    },
    dateTime: {
        margin: theme.spacing.unit,
    }
});

class Chat extends Component {
    componentDidMount = (node) => {
        if (node) {
            nodeElement = node;
            this.pushMessage(node);
        }
    };

    pushMessage = (node) => {
        if (node) {
            setTimeout(() => { 
                node.scrollTo(0, node.scrollHeight);
            }, 50);
        }
    };

    render() {
        const { classes, users, messages } = this.props;

        let userAssistant = users.byId['user0'];
        let userSelected = users.selectedUser;

        let messagesUserAssistant = userAssistant.messages || [];
        let messagesUserSelected = users.byId[userSelected].messages || [];
        let messagesArray = messagesUserAssistant.concat(messagesUserSelected);
        let currentMessagesLength = messagesArray.length;

        if (currentMessagesLength !== previousMessagesLength) {
            this.pushMessage(nodeElement);
            previousMessagesLength = currentMessagesLength;
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
                    <AppBar elevation={ 0 } position='static' color='default'>
                        <Toolbar className={ classes.toolBar }>
                            <IconButton color='inherit' onClick={ this.props.onClose } aria-label='Close'>
                                <Icon>chevron_left</Icon>
                            </IconButton>

                            <Avatar alt={ users.byId[userSelected].name } src={ users.byId[userSelected].avatar } className={ classes.avatar }/>

                            <div>
                                <Typography variant='title' color='inherit' className={ classes.header }>
                                    { users.byId[userSelected].name }
                                </Typography>
                                <Typography variant='caption' className={ classes.header }>
                                    Online
                                </Typography>
                            </div>
                        </Toolbar>
                    </AppBar>

                    <div
                        className={ classes.chatContent }
                        ref={ this.componentDidMount }
                    >
                        <Typography variant='caption' align='center' className={ classes.dateTime }>
                            June 8
                        </Typography>

                        <ul className={ classes.messages }>
                            { (messagesArray || []).map(id => {
                                return (
                                    users.byId[userSelected].name === messages.byId[id].receiver ||
                                    users.byId[userSelected].name === messages.byId[id].author    ?
                                        (<Message
                                            key={ id }
                                            author={ messages.byId[id].author }
                                            sender={ userAssistant.name }
                                            data={ messages.byId[id].data }
                                        >
                                            { messages.byId[id].message }
                                        </Message>) : (null)
                                )
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