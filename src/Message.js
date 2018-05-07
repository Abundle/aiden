import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

let date = new Date();
let time = date.getHours() + ':' + date.getMinutes();

const styles = theme => ({
    root: {
        width: '10vw',
        minWidth: 50,
        margin: '15px 10px 5px 75px',
        padding: 10,
        textAlign: 'right',
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
    },
});

const Message = (props) => {
    const { classes } = props;

    return (
        <Paper className={ classes.root }>
            <b>{ props.author }:</b><br />
            { props.message }<br />

            <i>{ time }</i>
        </Paper>
    );
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default withStyles(styles)(Message);