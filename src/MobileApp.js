import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

// Local import
import Activity from './activity/Activity';
import Calendar from './calendar/Calendar';
import ChatList from './chat/ChatList';
import Settings from './settings/Settings';

const styles = {
    /*root: {
        position: 'absolute',
        // Minus top margin in App.js
        height: 'calc(100% - 10px)',
        width: '100%',
    },*/
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

class MobileApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className='mobile-app'>
                { value === 0 && <Activity /> }
                { value === 1 && <Calendar /> }
                { value === 2 && <ChatList assistant /> }
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

MobileApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MobileApp);