import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

// custom import
import UserInterface from './UserInterface';

const styles = {
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px 150px',
        height: '45vw', // original image: 640x1280px
        width: '22vw',
    },
    image: {
        height: '100%'
    },
    screen: {
        position: 'absolute',
        height: '34.75vw', //665
        width: '19.55vw', //374
        backgroundColor: 'gray',
    },
};

class Phone extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                <img className={ classes.image } src={ this.props.image } alt='phone'/> {/*TODO: fix disappearance on resize*/}

                <div className={ classes.screen }>
                    <UserInterface />
                </div>
            </div>
        );
    }
}

Phone.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Phone);