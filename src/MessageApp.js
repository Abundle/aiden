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
import { SendMessageContainer } from './containers/SendMessageContainer';
import Message from './chat/Message';
import me from './assets/me.jpg';

let naturalSort = require('natsort');
let nodeElement;
let previous;

let date = new Date();
let time = date.getHours() + ':' + date.getMinutes();

const styles = theme => ({
    root: {
        position: 'relative',
        // Minus height of status bar + Extra
        height: 'calc(100% - 25px)',
        width: '100%',
        backgroundColor: 'lightblue',
    },
    statusBar: {
        height: 20,
        padding: '0 4px',
        backgroundColor: '#DCDCDC',
        textAlign: 'right',
        color: '#808080',
    },
    time: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginLeft: 3,
    },
    statusIcon: {
        fontSize: 17,
        marginLeft: 3,
    },
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
    },
    paper: {
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
    },
});

class MessageApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

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

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes, users, messages } = this.props;

        let userSender = users.byId['user1'];
        let userReceiver = users.byId['user0'];

        let messagesSender = userSender.messages || [];
        let messagesReceiver = userReceiver.messages || [];
        let messagesArray = messagesSender.concat(messagesReceiver);
        let current = messagesArray.length;

        if (current !== previous) {
            this.pushMessage(nodeElement);
            previous = current;
        }

        messagesArray.sort(naturalSort());
        // console.log(users.byId['user0']);

        return (
            <div className={ classes.root }>
                <div className={ classes.statusBar }>
                    <Icon className={ classes.statusIcon }>network_wifi</Icon>
                    <Icon className={ classes.statusIcon }>network_cell</Icon>
                    <Icon className={ classes.statusIcon }>battery_full</Icon>

                    <Typography variant='body1' className={ classes.time }>{ time }</Typography>
                </div>

                <div className={ classes.container }>
                    <Slide
                        direction='left'
                        in={ true }
                        mountOnEnter
                        unmountOnExit
                    >
                        <Paper className={ classes.paper }>
                            <AppBar elevation={ 0 } position='static' color='default'>
                                <Toolbar className={ classes.toolBar }>
                                    <IconButton disabled color='inherit' onClick={ this.props.onClose } aria-label='Close'>
                                        <Icon>chevron_left</Icon>
                                    </IconButton>

                                    <Typography variant='title' color='inherit' className={ classes.title }>
                                        { userReceiver.name }
                                    </Typography>

                                    <Avatar alt={ users.byId['user0'].name } src={ me } className={ classes.avatar }/>
                                </Toolbar>
                            </AppBar>

                            <div
                                className={ classes.chatContent }
                                ref={ this.componentDidMount }
                            >
                                <ul className={ classes.messages }>
                                    { (messagesArray || []).map(id => {

                                        return (
                                            userSender.name === messages.byId[id].receiver ||
                                            userSender.name === messages.byId[id].author    ?
                                                (<Message
                                                    key={ id }
                                                    author={ messages.byId[id].author }
                                                    sender={ userSender.name }
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
                </div>
            </div>
        );
    }
}

MessageApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageApp);