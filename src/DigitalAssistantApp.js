import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';

// Local import
import Activity from './activity/Activity';
import Calendar from './calendar/Calendar';
import ChatList from './chat/ChatList';
import Settings from './settings/Settings';

const styles = {
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        // backgroundColor: 'lightblue',
    },
    statusBar: {
        height: 20,
        padding: '0 4px',
        backgroundColor: '#DCDCDC',
        textAlign: 'right',
        color: '#808080',
    },
    time: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginLeft: 3,
    },
    statusIcon: {
        fontSize: 17,
        marginLeft: 3,
        // verticalAlign: 'super',
    },
    appBar: {
        flexGrow: 1,
        // zIndex: 3,
    },
    nav: {
        position: 'absolute',
        width: '100%',
        minWidth: 300,
        bottom: 0,
        zIndex: 1,
        border: '1px solid black',
    }
};

class DigitalAssistantApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state; //href='#chats'

        return (
            <div className={ classes.root }>
                <div className={ classes.statusBar }>
                    <Icon className={ classes.statusIcon }>network_wifi</Icon>
                    <Icon className={ classes.statusIcon }>network_cell</Icon>

                    {/*<Typography variant='body1' className={ classes.time }>48%</Typography>*/}
                    <Icon className={ classes.statusIcon }>battery_full</Icon>

                    <Typography variant='body1' className={ classes.time }>10:30</Typography>
                </div>

                {/*<AppBar position='static' color='default' className={ classes.appBar }>
                    <Toolbar>
                        <Typography variant='title' color='inherit'>
                            Aiden
                        </Typography>
                    </Toolbar>
                </AppBar>*/}

                { value === 0 && <Activity /> }
                { value === 1 && <Calendar /> }
                { value === 2 && <ChatList /> }
                { value === 3 && <Settings /> }

                <BottomNavigation
                    value={ value }
                    onChange={ this.handleChange }
                    showLabels
                    className={ classes.nav }
                >
                    <BottomNavigationAction label='Activity' icon={ <Icon>track_changes</Icon> } />
                    <BottomNavigationAction label='Calendar' icon={ <Icon>calendar_today</Icon> } />
                    <BottomNavigationAction label='Chats' icon={ <Icon>chat_bubble_outline</Icon> } />
                    <BottomNavigationAction label='Settings' icon={ <Icon>settings</Icon> } />
                </BottomNavigation>
            </div>
        );
    }
}

DigitalAssistantApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DigitalAssistantApp);