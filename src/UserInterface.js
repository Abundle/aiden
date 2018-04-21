import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

// custom import
import MainNavigation from './MainNavigation';

const styles = {
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: 'lightblue',
    },
};

class UserInterface extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                Test
                <MainNavigation />
            </div>
        );
    }
}

UserInterface.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInterface);