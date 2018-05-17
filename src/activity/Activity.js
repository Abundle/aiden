import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

// Local import
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';

let date = new Date();
// let day = date.getDay();
let monthIndex = date.getMonth();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
let month = months[monthIndex];

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
    /*title: {
        marginBottom: 16,
        fontSize: 14,
    },*/
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

function Activity(props) {
    const { classes } = props;

    // TODO: add variant='outlined

    return (
        <div className={ classes.root }>
            <AppBar elevation={ 0 } position='static' color='secondary'> {/*TODO: move appBar within slide?*/}
                <Toolbar classes={{ root: classes.titleToolbar }}>
                    <Typography variant='headline' color='default' className={ classes.titleToolbar }>
                        Activity
                    </Typography>
                    <IconButton color='primary' aria-label='Menu'>
                        <Icon>search</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className={ classes.list }>
                <Typography variant='caption' align='center' className={ classes.timeStamp }>
                    Today • { month } 18
                </Typography>

                <Card className={ classes.card } square>
                    <CardHeader
                        classes={{
                            root: classes.cardHeader,
                        }}
                        avatar={
                            <Avatar alt='Richard Roe' src={ avatar1 } className={classes.avatar} />
                        }
                        action={
                            <IconButton>
                                <Icon>more_vert</Icon>
                            </IconButton>
                        }
                        title='Richard Roe'
                        subheader='15:51'
                    />
                    <CardContent>
                        <Typography className={ classes.cardMessage } color='textSecondary'>
                            Hey Richard, yes it's at 2pm at the Googleplex <span role='img' aria-label='emoji'>⚛️</span>
                        </Typography>
                        <Typography component='p'>
                            Retrieved from:<br />
                            <Icon color='primary' className={ classes.appIcon }>calendar_today</Icon> Google Calendar
                        </Typography>
                    </CardContent>
                    {/*<CardActions>
                        <Button size='small' color='primary'>Learn More</Button>
                    </CardActions>*/}
                </Card>
                <Card className={ classes.card }>
                    <CardHeader
                        classes={{
                            root: classes.cardHeader,
                        }}
                        avatar={
                            <Avatar alt='Ali Connors' src={ avatar2 } className={classes.avatar} />
                        }
                        action={
                            <IconButton>
                                <Icon>more_vert</Icon>
                            </IconButton>
                        }
                        title='Ali Connors'
                        subheader='15:51'
                    />
                    <CardContent>
                        <Typography className={ classes.cardMessage } color='textSecondary'>
                            Hey Richard, yes it's at 2pm at the Googleplex
                        </Typography>
                        <Typography component='p'>
                            Retrieved from:<br />
                            <Icon color='primary' className={ classes.appIcon }>public</Icon> Facebook
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={ classes.card }>
                    <CardHeader
                        classes={{
                            root: classes.cardHeader,
                        }}
                        avatar={
                            <Avatar alt='Kellie Max' src={ avatar3 } className={classes.avatar} />
                        }
                        action={
                            <IconButton>
                                <Icon>more_vert</Icon>
                            </IconButton>
                        }
                        title='Kellie Max'
                        subheader='15:51'
                    />
                    <CardContent>
                        <Typography className={ classes.cardMessage } color='textSecondary'>
                            Hey Richard, yes it's at 2pm at the Googleplex
                        </Typography>
                        <Typography component='p'>
                            Retrieved from:<br />
                            <Icon color='primary' className={ classes.appIcon }>location_on</Icon> Location
                            <Icon color='primary' className={ classes.appIcon }>wifi</Icon> WiFi connection
                        </Typography>
                    </CardContent>
                </Card>


                <Typography variant='caption' align='center' className={ classes.timeStamp }>
                    Yesterday • { month } 17
                </Typography>

                <Card className={ classes.card } square>
                    <CardHeader
                        classes={{
                            root: classes.cardHeader,
                        }}
                        avatar={
                            <Avatar alt='Richard Roe' src={ avatar1 } className={classes.avatar} />
                        }
                        action={
                            <IconButton>
                                <Icon>more_vert</Icon>
                            </IconButton>
                        }
                        title='Richard Roe'
                        subheader='15:51'
                    />
                    <CardContent>
                        <Typography className={ classes.cardMessage } color='textSecondary'>
                            Hey Richard, yes it's at 2pm at the Googleplex
                        </Typography>
                        <Typography component='p'>
                            Retrieved from:<br />
                            <Icon color='primary' className={ classes.appIcon }>calendar_today</Icon> Google Calendar
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

Activity.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Activity);