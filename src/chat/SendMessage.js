import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        position: 'fixed',
        bottom: 0,
        padding: 10,
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: '15vw',
        minWidth: 215,
        padding: 10,
        // borderRadius: 10,
    },
    input: {
        width: '100%',
        border: 'none',
        fontSize: 16,
        '&:focus': {
            outline: 'none',
        },
        '&::placeholder': {
            opacity: 0.5, // TODO: load from theme
        }
    },
    button: {
        minWidth: 55,
        minHeight: 55,
        marginLeft: theme.spacing.unit,
    },
});

class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            // value: messages.messageSelected.keywords
        }
    }

    handleSubmit(event, input) {
        // this.props.onSend();

        // Check if text area is empty
        if (!input.value.trim()) {
            return
        }
        let sender = this.props.assistant ? this.props.users.byId['user0'] : this.props.users.byId['user1'];
        // let sender = this.props.assistant ? ('Aidan Bundel') : ('Dave Kellie'); // TODO: retrieve from Redux store
        let receiver = this.props.assistant ? this.props.users.byId[this.props.users.activeUser] : this.props.users.byId['user0'];
        // let receiver = this.props.assistant ? this.props.users.activeUser : this.props.users.byId['user0'];
        // console.log(sender, this.props.users.activeUser);

        this.props.dispatch(input.value, sender, receiver);
        // this.props.dispatch(input.value, sender, this.props.users.activeUser); //Me
        input.value = '';
    }

    render() {
        const { classes, messages, assistant, users } = this.props;
        let input;
        let value = messages.messageSelected.keywords || '';
        // console.log(messages.messageSelected.keywords);

        return (
            <div className={ classes.root }>
                <form
                    className={ classes.form }
                    onSubmit={ (event, assistant) => {
                        event.preventDefault();
                        if (!assistant) {
                            this.handleSubmit(event, input);
                        }
                    }}
                    /*onSubmit={ (event) => this.props.onSend(event) }*/
                >
                    <Paper className={ classes.inputBox } elevation={ 3 }>
                        <input
                            className={ classes.input }
                            ref={ (node) => {
                                input = node;
                            }}
                            placeholder='Select a message card'
                            // placeholder='Type a message'
                            // defaultValue=''
                            value={ !assistant && value }
                        />
                    </Paper>
                    <Button
                        variant='fab'
                        type='submit'
                        color='primary'
                        aria-label='add'
                        className={ classes.button }
                    >
                        <Icon>send</Icon>
                    </Button>
                </form>
            </div>
        )
    };
}

SendMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    activeUser: PropTypes.oneOfType([
        PropTypes.array,
        // PropTypes.object,
    ]),
};

export default withStyles(styles)(SendMessage);