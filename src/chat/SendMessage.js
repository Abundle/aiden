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
    },
    input: {
        width: '14.8vw',
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

class SendMessage extends Component {
    handleChange = (event, input) => { // TODO: check if textfield is empty
        this.props.dispatch(input.value, 'Me');
        input.value = '';
    };

    render() {
        const { classes } = this.props;
        let input;

        return (
            <div className={ classes.root }>
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
                        /*onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                this.props.dispatch(input.value, 'Me');
                                input.value = '';
                            }
                        }}*/
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

SendMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendMessage);