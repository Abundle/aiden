import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - (20px + 56px))',
        backgroundColor: 'whitesmoke', //theme.palette.secondary.main,
        overflow: 'hidden',
        flexGrow: 1,
    },
    titleToolbar: {
        flex: 1,
        paddingRight: theme.spacing.unit * 2,
    },
    list: {
        height: 'calc(100% - 64px)',
        paddingRight: 2,
        paddingBottom: theme.spacing.unit * 10,
        overflowY: 'scroll',
    },
    timeStamp: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    card: {
        minWidth: 250,
    },
    cardHeader: {
        paddingBottom: 0,
    },
    cardMessage: {
        marginBottom: 12,
    },
    appIcon: {
        verticalAlign: '-25%',
    },
});

function Calendar(props) {
    const { classes } = props;

    return (
        <div className={ classes.root }>
            <AppBar elevation={ 0 } position='static' color='secondary'> {/*TODO: move appBar within slide?*/}
                <Toolbar classes={{ root: classes.titleToolbar }}>
                    <Typography variant='headline' color='default' className={ classes.titleToolbar }>
                        Calendar
                    </Typography>
                    <IconButton color='primary' aria-label='Menu'>
                        <Icon>calendar_view_day</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className={ classes.list }>

            </div>
        </div>
    );
}

Calendar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);