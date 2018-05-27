import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

let date = new Date();
let time = date.getHours() + ':' + date.getMinutes();

const styles = theme => ({
    root: {
        width: '20vw',
        minWidth: 50,
        maxWidth: 150,
        margin: '15px 0',
        padding: 10,
    },
    me: {
        width: '20vw',
        minWidth: 50,
        maxWidth: 150,
        margin: '15px 10px 5px 100px', // TODO: fix spacing another way
        padding: 10,
        textAlign: 'right',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
});

const Message = (props) => {
    const { classes } = props;

    return (
        <Paper className={ props.author === props.sender ? classes.root : classes.me }>
            {/*<b>{ props.author }:</b><br />*/}
            { props.children }<br />

            <i>{ time }</i>
        </Paper>
    );

    /*<Paper className={ props.author === 'Me' ? classes.me : classes.root }>
        <b>{ props.author }:</b><br />
        { props.message }<br />

        <i>{ time }</i>
    </Paper>*/
};

Message.propTypes = {
    children: PropTypes.string.isRequired,
    // message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default withStyles(styles)(Message);