import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

let time = moment().format('HH:mm');

const styles = theme => ({
    root: {
        width: '20vw',
        minWidth: 50,
        maxWidth: 200,
        marginLeft: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        padding: 10,
    },
    sender: {
        width: '20vw',
        minWidth: 50,
        maxWidth: 200,
        marginRight: theme.spacing.unit,
        marginLeft: 'auto',
        marginTop: theme.spacing.unit,
        padding: 10,
        textAlign: 'right',
        backgroundColor: '#DCF8C6',
    },
    time: {
        textAlign: 'right',
        alignSelf: 'center',
    },
});

const WhatsAppMessage = (props) => {
    const { classes } = props;

    return (
        <div>
            <Paper className={ props.author === props.sender ? classes.sender : classes.root }>
                <Typography
                    variant='body2'
                    color='default'
                    className={ classes.content }
                >
                    { props.children }
                </Typography>

                <Typography
                    variant='caption'
                    className={ classes.time } // TODO: add 'realistic' time differences
                    color='default'
                >
                    { time }
                </Typography>
            </Paper>
        </div>

    );
};

WhatsAppMessage.propTypes = {
    children: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default withStyles(styles)(WhatsAppMessage);