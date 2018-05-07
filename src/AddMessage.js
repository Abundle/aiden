import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const styles = theme => ({
    root: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        padding: 10,
        // backgroundColor: 'blue',
    },
    input: {
        width: '15vw',
        minWidth: 215,
        padding: 10,
        borderRadius: 10,
        // position
    },
    button: {
        minWidth: 56,
        minHeight: 56,
        marginLeft: theme.spacing.unit,
    },
});

class AddMessage extends Component {
    handleChange = (event, input) => { // TODO: check if textfield is empty
        console.log(event);
        this.props.dispatch(input.value, 'Me');
        input.value = '';
    };

    render() {
        const {classes} = this.props;
        let input;

        return (
            <div className={ classes.root }>
                <Paper className={ classes.input } elevation={ 3 }>
                    <Input
                        placeholder='Type a message'
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                        onKeyPress={ (event) => {
                            if (event.key === 'Enter') {
                                this.handleChange(event, input);
                                event.preventDefault();
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
            </div>
        )
    };
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddMessage);