import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Local import
import events from './events';
import './react-big-calendar.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('ko', {
    week: {
        dow: 1,
        doy: 1,
    },
});

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - (20px + 56px))',
        backgroundColor: theme.palette.secondary.main,
        // backgroundColor: 'whitesmoke',
        overflow: 'hidden',
        flexGrow: 1,
    },
    titleToolbar: {
        flex: 1,
        paddingRight: theme.spacing.unit * 2,
    },
    subHeader: {
        paddingLeft: theme.spacing.unit * 3,
    },
    calendar: {
        height: 'calc(100% - (20px + 56px))',
        backgroundColor: theme.palette.secondary.light,
    },
});

class EventDialog extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        let startDate = this.props.event.start;
        let endDate = this.props.event.end;

        return (
            <Dialog open={ this.props.open } aria-labelledby='simple-dialog-title'>
                <DialogTitle id='simple-dialog-title'>{ this.props.event.title }</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Start: { startDate.toLocaleString() }   <br />
                        End: { endDate.toLocaleString() }       <br />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    checked={ this.state.checked }
                                    onChange={ this.handleChange('checked') }
                                />
                            }
                            label='Allow assistant access'
                        />
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={ this.props.onClose } color='primary'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: 'calendar_today',
            view: 'month',
            open: false,
            event: events[0],
        }
    }

    handleDialog = (event) => {
        this.setState({
            open: !this.state.open,
            event: event,
        });
    };

    handleClick = (icon) => {
        let newState = icon === 'view_module' ?
            { icon: 'calendar_today', view: 'month' } : { icon: 'view_module', view: 'agenda' };
        this.setState(newState);
    };

    render() {
        const { classes } = this.props;
        const { icon } = this.state;

        let calendarHeader = ({ label }) => {
            // console.log(label.charAt(0));
            return (
                <div>{ label.charAt(0) }</div>
            );
        };

        return (
            <div className={ classes.root }>
                <AppBar elevation={ 0 } position='static' color='secondary'>
                    <Toolbar classes={{ root: classes.titleToolbar }}>
                        <Typography variant='headline' color='default' className={ classes.titleToolbar }>
                            Calendar
                        </Typography>
                        <IconButton color='primary' aria-label='Menu' onClick={ () => this.handleClick(icon) }>
                            <Icon>{ icon }</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Typography variant='caption' color='default' gutterBottom className={ classes.subHeader }>
                    Events imported from Google Calendar and Outlook
                </Typography>

                <BigCalendar
                    className={ classes.calendar }
                    toolbar={ false }
                    selectable
                    step={ 60 }
                    events={ events }
                    defaultView='month'
                    views={ ['month', 'agenda'] }
                    view={ this.state.view }
                    onView={ (view)=> {
                        this.setState({view})
                    }}
                    formats={{
                        dateFormat: 'D',
                        // monthHeaderFormat: 'MM',
                    }}
                    components={{
                        month: { header: calendarHeader },
                    }}
                    // scrollToTime={ new Date(2018, 1, 1, 6) }
                    defaultDate={ new Date() }
                    onSelectEvent={ (event) => this.handleDialog(event) }
                    // onSelectEvent={ event => alert(event.title + ' ' + event.setByAssistant) }
                    /*onSelectSlot={ slotInfo =>
                        alert(
                            `selected slot: \n\nstart ${ slotInfo.start.toLocaleString() } ` +
                            `\nend: ${ slotInfo.end.toLocaleString() }` +
                            `\naction: ${ slotInfo.action }`
                        )
                    }*/
                />

                <EventDialog
                    open={ this.state.open }
                    onClose={ () => this.handleDialog(this.state.event) }
                    event={ this.state.event }
                />

                {/*<BigCalendar
                    events={ events }
                    startAccessor='start'
                    endAccessor='end'
                    views={{ month: true }}
                />*/}
            </div>
        );
    };
}

Calendar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);