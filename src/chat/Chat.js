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
    /*handleChange(event, input) {
        // console.log(this.props.dispatch);
        this.props.dispatch(input.value, 'Me');
        input.value = '';
    }*/

    render() {
        const { classes, user, messages } = this.props;
        // let input;

        // TODO: read https://medium.freecodecamp.org/optimising-the-state-shape-of-your-react-app-with-redux-3a280e6ef436
        // console.log(user.messages);

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
                                { user.name }
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <div style={ styles.chatContent } >
                        <ul>
                            { (user.messages || []).map(id => {
                                console.log(messages.byId[id]);
                                return (
                                    <Message
                                        key={ id }
                                        author={ messages.byId[id].author }
                                        // author={ user.name }
                                    >
                                        { messages.byId[id].message }
                                    </Message>
                                )
                            }) }
                            {/*{ Object.keys(messages.byId).map((message, id) => {
                                // console.log(messages.byId[message]);
                                    return (
                                        <div key={ id }>
                                            id is: { messages.byId[message].id } ;
                                            name is: {messages.byId[message].author}
                                        </div>
                                    )
                                }
                            ) }*/}
                        </ul>
                        {/*{ user.messages
                            .filter(message => message.id)
                            .map(message => <p>{ message.id } </p>)
                        }*/}
                        {/*<ul>
                            { (user.messages || [])
                                .filter(message => message.id)
                                .map(message =>
                                    <Message
                                        key={ message.id }
                                        author={ user.name }
                                    >
                                        hello
                                    </Message>
                                )
                            }
                        </ul>*/}
                        {/*<ul>
                            { (user.messages || []).map(id => (
                                <Message
                                    key={ id }
                                    author={ user.name }
                                >
                                    hello
                                </Message>
                            )) }
                        </ul>*/}
                        {/*<ul>
                            { (user.messages || []).map(id => {
                                return this.props.messages.map(message => (
                                    <Message
                                        key={ id }
                                        { ...message }
                                    />
                                ));
                            }) }
                        </ul>*/}
                        {/*<ul>
                            { (user.messages || []).map(id => (
                                <Message
                                    key={ id }
                                    author={ user.name }
                                    { ...this.props.messages }
                                />
                            )) }
                        </ul>*/}
                        {/*{ chat }*/}
                    </div>
                    {/*<div style={ styles.chatContent } >
                    <ul>
                        { this.props.messages.map(message => (
                            <Message
                                key={ message.id }
                                { ...message }
                            />
                        )) }
                    </ul>
                </div>*/}

                    {/*<div className={ classes.sendMessage }>
                        <Paper className={ classes.input } elevation={ 3 }>
                            <Input
                                placeholder='Type a message'
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        this.handleChange(event, input);
                                    }
                                }}
                                inputRef={(node) => {
                                    input = node
                                }}
                                multiline
                                disableUnderline
                                fullWidth
                            />
                        </Paper>

                        <Button
                            variant='fab'
                            color='primary'
                            aria-label='add'
                            className={ classes.button }
                            onClick={ (event) => this.handleChange(event, input) }
                        >
                            <Icon>send</Icon>
                        </Button>
                    </div>*/}

                    <SendMessageContainer />
                </Paper>
            </Slide>
        )
    }
}

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
    // dispatch: PropTypes.func.isRequired,
    user: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    messages: PropTypes.oneOfType([
        // PropTypes.array,
        PropTypes.object,
    ]),
    /*messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired*/
};

export default withStyles(styles)(Chat);