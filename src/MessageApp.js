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
import { SendMessageContainer } from './containers/SendMessageContainer';
import Message from './chat/Message';

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
        const { classes, users, messages, assistant } = this.props;

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