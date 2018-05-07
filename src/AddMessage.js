import React from 'react';
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

const AddMessage = (props) => {
    const { classes } = props;
    let input;

    return (
        <div className={ classes.root }>
            <Paper className={ classes.input } elevation={ 3 }>
                <Input
                    placeholder='Type a message'
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            props.dispatch(input.value, 'Me');
                            input.value = '';
                            e.preventDefault();
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
                onChange={ this.handleChange }
            >
                <Icon>send</Icon>
            </Button>
        </div>
    )

    /*<input
    style={ styles.input }
    onKeyPress={(e) => {
        if (e.key === 'Enter') {
            props.dispatch(input.value, 'Me');
            input.value = ''
        }
    }}
    type='text'
    ref={(node) => {
        input = node
    }}
    />*/
};

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddMessage);