import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

// Local import
import events from './events';
import './react-big-calendar.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

/*interface View {
    static title(date: Date, { formats: DateFormat[], culture: string?, ...props }): string
    static navigate(date: Date, action: 'PREV' | 'NEXT' | 'DATE'): Date
}*/

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
    calendar: {
        height: 'calc(100% - (20px + 56px))',
        backgroundColor: theme.palette.secondary.light,
    },
});

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: 'calendar_today',
            view: 'month',
        }
    }

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
                       {/* <IconButton color='primary' aria-label='Menu' onClick={ () => {
                            this.setState({ view: 'agenda' })
                        }}>*/}
                        <IconButton color='primary' aria-label='Menu' onClick={ () => this.handleClick(icon) }>
                            <Icon>{ icon }</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <BigCalendar
                    className={ classes.calendar }
                    toolbar={ false }
                    selectable
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
                    scrollToTime={ new Date(1970, 1, 1, 6) }
                    defaultDate={ new Date() }
                    onSelectEvent={ event => alert(event.title + ' ' + event.setByAssistant) }
                    onSelectSlot={ slotInfo =>
                        alert(
                            `selected slot: \n\nstart ${ slotInfo.start.toLocaleString() } ` +
                            `\nend: ${ slotInfo.end.toLocaleString() }` +
                            `\naction: ${ slotInfo.action }`
                        )
                    }
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