import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 1,
        border: '1px solid black',
    },
});

class MainNavigation extends Component {
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
        const { value } = this.state;

        return (
            /*{ value === 0 && <Home/> }
            { value === 1 && <Controls /> }
            { value === 2 && <Reports /> }
            { value === 3 && <Settings /> }*/

            <BottomNavigation
                value={ value }
                onChange={ this.handleChange }
                showLabels
                className={ classes.root }
            >
                { this.props.assistantEnabled && <BottomNavigationAction label='Activity' icon={ <Icon>track_changes</Icon> } /> }
                <BottomNavigationAction label='Chats' icon={ <Icon>chat_bubble_outline</Icon> } />
                <BottomNavigationAction label='Contacts' icon={ <Icon>people</Icon> } />
                <BottomNavigationAction label='Settings' icon={ <Icon>settings</Icon> } />
            </BottomNavigation>
        );
    }
}

MainNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainNavigation);

