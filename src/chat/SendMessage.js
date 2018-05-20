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
    handleSubmit(event, input) {
        // Check if text area is empty
        if (!input.value.trim()) {
            return
        }
        this.props.dispatch(input.value, 'Me', this.props.users.activeUser);
        input.value = '';
    }

    render() {
        const { classes } = this.props;
        let input;

        return (
            <div className={ classes.root }>
                <form
                    className={ classes.form }
                    onSubmit={ event => {
                        event.preventDefault();
                        this.handleSubmit(event, input);
                    }}
                >
                    <Paper className={ classes.inputBox } elevation={ 3 }>
                        <input
                            className={ classes.input }
                            ref={ (node) => {
                                input = node;
                            }}
                            placeholder='Type a message'
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