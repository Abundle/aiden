import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        position: 'fixed',
        right: 6,
        bottom: 0,
        padding: 10,
        backgroundColor: '#ECE5DD',
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
        }
    }

    handleSubmit(event, input) {
        // Check if text area is empty
        if (!input.value.trim()) {
            return
        }
        let sender = this.props.assistant ? this.props.users.byId['user0'] : this.props.users.byId[this.props.users.activeUser];
        let receiver = this.props.assistant ? this.props.users.byId[this.props.users.activeUser] : this.props.users.byId['user0'];

        let scenario = this.props.messages.messageSelected.title;

        this.props.dispatch(input.value, sender, receiver, scenario);
        input.value = ''; // TODO: does not seem to work
    }

    render() {
        const { classes, messages, assistant } = this.props;
        let input;
        let value = messages.messageSelected.keywords || '';

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
                            value={ (!assistant && value) || '' }
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
    ]),
};

export default withStyles(styles)(SendMessage);