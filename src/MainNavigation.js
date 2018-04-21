import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';

const styles = theme => ({
    root: {
        width: 500,
        position: 'fixed',
        bottom: 50,
        zIndex: 1,
        //width: '100%',
        border: '1px solid black',
    },
});

class MainNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'recents',
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={ value }
                onChange={ this.handleChange }
                showLabels
                className={ classes.root }
            >
                <BottomNavigationAction value='chats' label='Chats' icon={ <Icon>home</Icon> } />
                <BottomNavigationAction value='social-media' label='Social Media' icon={ <Icon>info</Icon> } />
                <BottomNavigationAction value='settings' label='Settings' icon={ <Icon>settings</Icon> } />
            </BottomNavigation>
        );
    }
}

MainNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainNavigation);

