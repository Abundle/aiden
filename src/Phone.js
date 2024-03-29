import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Local import
import DigitalAssistantApp from './DigitalAssistantApp';
import { MessageAppContainer } from './containers/MessageAppContainer';

const styles = {
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '15px 75px',
        height: '45vw', // original image: 640x1280px
        minHeight: 682,
        width: '22vw',
        minWidth: 340,
    },
    image: {
        height: '100%',
    },
    screen: {
        position: 'absolute',
        height: '34.75vw',
        minHeight: 534.45,
        width: '19.55vw',
        minWidth: 300.45,
    },
    mobile: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'blue',
    },
};

class Phone extends Component {
    render() {
        const { classes, assistant } = this.props;
        const ui = assistant ? (
            <DigitalAssistantApp />
        ) : (
            <MessageAppContainer />
        );

        return (
            <div className={ classes.root }>
                <img className={ classes.image } src={ this.props.image } alt='phone'/>

                <div className={ classes.screen }>
                    { ui }
                </div>
            </div>
        );
    }
}

Phone.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Phone);