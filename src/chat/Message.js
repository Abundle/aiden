import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

// Local import
import logoAidenBlack from '../assets/logo_aiden_badge.svg';

let time = moment().format('HH:mm');

const styles = theme => ({
    root: {
        width: '20vw',
        minWidth: 50,
        maxWidth: 200,
        marginLeft: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        // margin: '15px 0',
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
        // color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
    },
    time: {
        textAlign: 'right',
        alignSelf: 'center',
    },
    avatar: {
        height: 25,
        width: 25,
        marginLeft: 0,
        marginRight: 'auto',
        padding: 3,
    },
    footer: {
        display: 'flex',
    },
    appIcon: {
        width: 18,
        marginRight: 5,
        verticalAlign: '-25%',
    },
    dataRetrieved: {
        width: '20vw',
        minWidth: 50,
        maxWidth: 200,
        marginRight: theme.spacing.unit,
        marginLeft: 'auto',
        marginBottom: theme.spacing.unit,
        padding: 10,
        textAlign: 'right',
        backgroundColor: '#ffe6e6',
        // backgroundColor: theme.palette.secondary,
    },
});

const Message = (props) => {
    const { classes } = props;
    const assistant = props.author === 'Aidan Bundel' ? 'assistant' : null; // TODO: connect with settings

    return (
        <div>
            <Paper className={ props.author === props.sender ?
                ['mobile-message', classes.sender].join(' ') : ['mobile-message', classes.root].join(' ') }
            >
                {/*<b>{ props.author }:</b><br />*/}
                <Typography
                    variant='body2'
                    color={ props.author === props.sender ? 'secondary' : 'default' }
                    className={ classes.content }
                >
                    { props.children }
                </Typography>

                <div className={ assistant ? classes.footer : null }>
                    { assistant && props.data && <Avatar alt='Assistant Aiden' src={ logoAidenBlack } className={ classes.avatar }/> }

                    <Typography
                        variant='caption'
                        className={ classes.time } // TODO: add 'realistic' time differences
                        color={ props.author === props.sender ? 'secondary' : 'default' }
                    >
                        { time }
                    </Typography>
                </div>
            </Paper>

            { assistant && props.author === props.sender && props.data &&
                <Paper className={ ['mobile-message', classes.dataRetrieved].join(' ') }>
                    <Typography variant='caption' component='div' gutterBottom>
                        Retrieved from:
                    </Typography>
                    <Typography style={{ color: props.data.color }}>
                        <img className={ classes.appIcon } src={ props.data.icon } alt={ props.data.app }/>
                        { props.data.app }
                    </Typography>
                </Paper>
            }
        </div>

    );
};

Message.propTypes = {
    children: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default withStyles(styles)(Message);