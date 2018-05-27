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
import avatar1 from '../assets/avatar1.jpg';

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
        // backgroundColor: theme.palette.background.paper,
    },
    toolBar: {
        padding: 0,
        backgroundColor: theme.palette.background.paper,
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
        // borderRadius: 10,
    },
    button: {
        minWidth: 55,
        minHeight: 55,
        marginLeft: theme.spacing.unit,
    },
    avatar: {
        marginLeft: 'auto',
        marginRight: theme.spacing.unit * 2,
    },
    title: {
        marginLeft: 'auto',
        // marginRight: theme.spacing.unit * 3,
    },
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
        const { classes, users, messages } = this.props;

        let userAssistant = users.byId['user0'];
        let userSelected = users.activeUser;

        let messagesUserAssistant = userAssistant.messages || [];
        let messagesUserSelected = users.byId[userSelected].messages || [];
        let messagesArray = messagesUserAssistant.concat(messagesUserSelected);
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
                <Paper className={ classes.root }>
                    <AppBar elevation={ 0 } position='static' color='default'>
                        <Toolbar className={ classes.toolBar }>
                            <IconButton color='inherit' onClick={ this.props.onClose } aria-label='Close'>
                                <Icon>chevron_left</Icon>
                            </IconButton>

                            <Typography variant='title' color='inherit' className={ classes.title }>
                                { users.byId[userSelected].name }
                            </Typography>

                            <Avatar alt={ users.byId['user0'].name } src={ avatar1 } className={ classes.avatar }/>
                        </Toolbar>
                    </AppBar>

                    <div
                        className={ classes.chatContent }
                        ref={ this.componentDidMount }
                    >
                        <ul className={ classes.messages }>
                            { (messagesArray || []).map(id => {

                                return (
                                    users.byId[userSelected].name === messages.byId[id].receiver ||
                                    users.byId[userSelected].name === messages.byId[id].author    ?
                                        (<Message
                                            key={ id }
                                            author={ messages.byId[id].author }
                                            sender={ userAssistant.name }
                                            // assistant={ assistant }
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