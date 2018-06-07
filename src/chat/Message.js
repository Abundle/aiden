import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// Local import
import logoAidenBlack from '../assets/logo_aiden_badge.svg';

let date = new Date();
let time = date.getHours() + ':' + date.getMinutes();

const styles = theme => ({
    root: {
        width: '20vw',
        minWidth: 50,
        maxWidth: 200,
        marginLeft: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        // margin: '15px 0',
        padding: 10,
    },
    sender: {
        width: '20vw',
        minWidth: 50,
        maxWidth: 150,
        marginRight: theme.spacing.unit,
        marginLeft: 'auto',
        marginBottom: theme.spacing.unit,
        padding: 10,
        textAlign: 'right',
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
    time: {
        alignSelf: 'center',
    },
    avatar: {
        height: 25,
        width: 25,
        marginLeft: 'auto',
        marginRight: 0,
        padding: 3,
    },
    footer: {
        display: 'flex',
    }
});

const Message = (props) => {
    const { classes } = props;
    const assistant = props.author === 'Aidan Bundel' ? 'assistant' : null; // TODO: connect with settings
    // console.log(assistant);

    return (
        <Paper className={ props.author === props.sender ? classes.sender : classes.root }>
            {/*<b>{ props.author }:</b><br />*/}
            <Typography
                variant='body2'
                color={ props.author === props.sender ? 'secondary' : 'default' }
                className={ classes.content }
            >
                { props.children }
            </Typography>

            <div className={ classes.footer }>
                <Typography
                    variant='caption'
                    className={ classes.time }
                    color={ props.author === props.sender ? 'secondary' : 'default' }
                >
                    { time }
                </Typography>

                { assistant && <Avatar alt='Assistant Aiden' src={ logoAidenBlack } className={ classes.avatar }/> }
            </div>

            {/*<div className={ classes.footer }>
                { assistant && <Avatar alt='Assistant Aiden' src={ logoAidenBlack } className={ classes.avatar }/> }

                <Typography
                    variant='caption'
                    className={ classes.time }
                    color={ props.author === props.sender ? 'secondary' : 'default' }
                >
                    { time }
                </Typography>
            </div>*/}
        </Paper>
    );
};

Message.propTypes = {
    children: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default withStyles(styles)(Message);