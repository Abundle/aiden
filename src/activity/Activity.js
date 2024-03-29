import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Moment from 'react-moment'; 

// Local import
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar8 from '../assets/avatar8.jpg';
import avatar9 from '../assets/avatar9.jpg';
import facebook from '../assets/facebook.svg';
import googleCalendar from '../assets/google_calendar.svg';
import whatsApp from '../assets/whatsapp.svg';

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - (20px + 56px))',
        backgroundColor: 'whitesmoke',
        overflow: 'hidden',
        flexGrow: 1,
    },
    titleToolbar: {
        flex: 1,
        paddingRight: theme.spacing.unit * 2,
    },
    list: {
        height: 'calc(100% - 56px)',
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
    summaryCardHeader: {
        backgroundColor: '#B71C1C',
    },
    summaryCardText: {
        color: theme.palette.secondary.light,
    },
    cardHeader: {
        paddingBottom: 0,
    },
    cardMessage: {
        marginBottom: 12,
    },
    systemIcon: {
        verticalAlign: '-25%',
    },
    googleCalendar: {
        color: '#0045CE',
    },
    whatsApp: {
        color: '#075E54',
    },
    facebook: {
        color: '#3C5A98',
    },
    appIcon: {
        width: 24,
        marginRight: 5,
        verticalAlign: '-25%',
    },
});

class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl  } = this.state;
        const date = new Date(2018, 5, 8);
        const today = <Moment format='MMM Do, YYYY'>{ date }</Moment>;

        return (
            <div className={ classes.root }>
                <AppBar elevation={ 0 } position='static' color='secondary'>
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
                    <Card className={ classes.card } square>
                        <CardHeader
                            classes={{
                                root: classes.summaryCardHeader,
                                title: classes.summaryCardText,
                                subheader: classes.summaryCardText,
                            }}
                            action={
                                <IconButton
                                    aria-owns={ anchorEl ? 'simple-menu' : null }
                                    aria-haspopup='true'
                                    onClick={ this.handleClick }
                                >
                                    <Icon color='secondary'>more_vert</Icon>
                                </IconButton>
                            }
                            title='Today'
                            subheader={ today }
                            color='secondary'
                        />
                        <CardContent>
                            <Typography color='textSecondary' component='div' gutterBottom>
                                Today you have been talking to 3 people on 1 platform.<br />
                                2 appointments have been requested.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Menu
                        id='simple-menu'
                        anchorEl={ anchorEl }
                        open={ Boolean(anchorEl) }
                        onClose={ this.handleClose }
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <MenuItem onClick={ this.handleClose }>Sort by date</MenuItem>
                        <MenuItem onClick={ this.handleClose }>Sort by name</MenuItem>
                        <MenuItem onClick={ this.handleClose }>Sort by platform</MenuItem>
                    </Menu>


                    <Typography variant='caption' align='center' className={ classes.timeStamp }>
                        Yesterday • <Moment format='MMMM Do' subtract={{ days: 1 }}>{ date }</Moment>
                    </Typography>

                    <Card className={ classes.card } square>
                        <CardHeader
                            classes={{
                                root: classes.cardHeader,
                            }}
                            avatar={
                                <Avatar alt='Richard Roe' src={ avatar9 } className={classes.avatar} />
                            }
                            title='To: Richard Roe'
                            subheader="'Happy birthday Aidan! 🎉' at 15:51"
                        />
                        <CardContent>
                            <Typography className={ classes.cardMessage }>
                                Thanks man!
                            </Typography>

                            <Typography color='textSecondary' component='div' gutterBottom>
                                Retrieved from:
                            </Typography>
                            <Typography className={ classes.whatsApp }>
                                <img className={ classes.appIcon } src={ whatsApp } alt='WhatsApp'/> WhatsApp
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={ classes.card }>
                        <CardHeader
                            classes={{
                                root: classes.cardHeader,
                            }}
                            avatar={
                                <Avatar alt='Ali Connors' src={ avatar2 } className={classes.avatar}/>
                            }
                            title='To: Ali Connors'
                            subheader="'Have you ever seen Blade Runner?' at 15:45"
                        />
                        <CardContent>
                            <Typography className={ classes.cardMessage }>
                                I have! About a year ago in the cinema
                            </Typography>

                            <Typography color='textSecondary' component='div' gutterBottom>
                                Retrieved from:
                            </Typography>
                            <Typography color='primary' className={ classes.facebook }>
                                <img className={ classes.appIcon } src={ facebook } alt='Facebook'/> Facebook
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={ classes.card }>
                        <CardHeader
                            classes={{
                                root: classes.cardHeader,
                            }}
                            avatar={
                                <Avatar alt='Kellie Max' src={ avatar8 } className={classes.avatar} />
                            }
                            title='To: Trevor Holten'
                            subheader="'Did you arrive home safely?' at 00:30"
                        />
                        <CardContent>
                            <Typography className={ classes.cardMessage }>
                                I did yes <span role='img' aria-label='emoji'>😌️</span>
                            </Typography>

                            <Typography color='textSecondary' component='div' gutterBottom>
                                Retrieved from:
                            </Typography>
                            <Typography color='primary'>
                                <Icon className={ classes.systemIcon }>location_on</Icon> Location
                                <Icon className={ classes.systemIcon }>wifi</Icon> WiFi connection
                            </Typography>
                        </CardContent>
                    </Card>


                    <Typography variant='caption' align='center' className={ classes.timeStamp }>
                        <Moment format='MMMM Do' subtract={{ days: 2 }}>{ date }</Moment>
                    </Typography>

                    <Card className={ classes.card } square>
                        <CardHeader
                            classes={{
                                root: classes.cardHeader,
                            }}
                            avatar={
                                <Avatar alt='Dave Kellie' src={ avatar1 } className={classes.avatar} />
                            }
                            title='To: Dave Kellie'
                            subheader="'Hi Aidan, we have a meeting today right?' at 08:30"
                        />
                        <CardContent>
                            <Typography className={ classes.cardMessage }>
                                Hi Dave, at 2pm at the Googleplex
                            </Typography>

                            <Typography color='textSecondary' component='div' gutterBottom>
                                Retrieved from:
                            </Typography>
                            <Typography className={ classes.googleCalendar }>
                                <img className={ classes.appIcon } src={ googleCalendar } alt='Google Calendar'/> Google Calendar
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

Activity.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Activity);