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

import Input from 'material-ui/Input';
import Button from 'material-ui/Button';

// Local import
// import { ConversationContainer } from '../containers/ConversationContainer';
// import { SendMessageContainer } from '../containers/SendMessageContainer';
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

function Chat(props) {
    const { classes } = props;
    let input;

    const chat = !props.user.messages ? (
        null
    ) : (
        <div style={ styles.chatContent } >
            <ul>
                { props.user.messages.map(message => (
                    <Message
                        key={ message.id }
                        author={ props.user.name }
                        { ...message }
                    />
                )) }
            </ul>
        </div>
    );

    return (
        <Slide
            direction='left'
            in={ props.open }
            mountOnEnter
            unmountOnExit
        >
            <Paper
                className={ classes.root }
            >
                <AppBar elevation={ 0 } position='static' color='secondary'>
                    <Toolbar className={ classes.toolBar }>
                        <IconButton color='inherit' onClick={ props.onClose } aria-label='Close'> {/*onClick={ () => props.onClose() }*/}
                            <Icon>chevron_left</Icon>
                        </IconButton>
                        <Typography variant='title' color='inherit'>
                            { props.user.name }
                        </Typography>
                    </Toolbar>
                </AppBar>

                { chat }

                {/*<div style={ styles.chatContent } >
                    <ul>
                        { props.messages.map(message => (
                            <Message
                                key={ message.id }
                                { ...message }
                            />
                        )) }
                    </ul>
                </div>*/}

                <div className={ classes.sendMessage }>
                    <Paper className={ classes.input } elevation={ 3 }>
                        <Input
                            placeholder='Type a message'
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    this.props.dispatch(input.value, 'Me');
                                    input.value = '';
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
                        // onClick={ (event) => this.handleChange(event, input) }
                    >
                        <Icon>send</Icon>
                    </Button>
                </div>

                {/*<SendMessageContainer />*/}
            </Paper>
        </Slide>
    )
}

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    // name: PropTypes.string.isRequired,
    /*messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,*/
    // openChat: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Chat);