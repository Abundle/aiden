import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

// custom import
import DigitalAssistantApp from './DigitalAssistantApp';
import MessageApp from './MessageApp';

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
        const { classes, assistant } = this.props; /*TODO: fix disappearance on resize*/
        const ui = assistant ? (
            <DigitalAssistantApp />
        ) : (
            <MessageApp/>
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

Phone.defaultProps = {
    assistant: false,
};

Phone.propTypes = {
    assistant: PropTypes.bool,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Phone);