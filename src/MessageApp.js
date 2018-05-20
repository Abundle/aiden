import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation, { BottomNavigationAction } from '@material-ui/core/BottomNavigation';
import Icon from '@material-ui/core/Icon';

// Local import
import ChatList from './chat/ChatList';

const styles = {
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: 'lightblue',
    },
    nav: {
        position: 'absolute',
        width: '100%',
        minWidth: 266,
        bottom: 0,
        zIndex: 1,
        border: '1px solid black',
    }
};

class DigitalAssistant extends Component {
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
            <div className={ classes.root }>
                { value === 0 && <div>hi</div> }
                { value === 1 && <ChatList /> }
                { value === 2 && <div>hi hi again</div> }

                <BottomNavigation
                    value={ value }
                    onChange={ this.handleChange }
                    showLabels
                    className={ classes.nav }
                >
                    <BottomNavigationAction label='Mail' icon={ <Icon>mail_outline</Icon> } />
                    {/*<BottomNavigationAction label='Contacts' icon={ <Icon>people</Icon> } />*/}
                    <BottomNavigationAction label='Chats' icon={ <Icon>chat_bubble_outline</Icon> } />
                    <BottomNavigationAction label='Settings' icon={ <Icon>settings</Icon> } />
                </BottomNavigation>
            </div>
        );
    }
}

DigitalAssistant.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DigitalAssistant);