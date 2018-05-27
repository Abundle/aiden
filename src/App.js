import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Local import
import { UserGreetingContainer } from './containers/UserGreetingContainer';
import { MessageCardsContainer } from './containers/MessageCardsContainer';
// import { PhoneContainer } from './containers/PhoneContainer';
import onePlusImage from './assets/oneplus3_outline.svg';
import logoAiden from './assets/logo_aiden.png';
import samsungImage from './assets/samsung_galaxy_s4_outline.svg'
import Phone from './Phone';

const theme = createMuiTheme({
    palette: {
        primary: red, // TODO: Check theme correct usage
        secondary: {
            main: '#fff',
            light: '#fff',
        },
        /*primary: {
            main: '#ff0000',
        },*/
        /*secondary: {
            main: '#fff',
        },
        error: {
            main: '#cc0000',
        },*/
    },
    overrides: {
        MuiAppBar: {
            colorSecondary: {
                backgroundColor: '#fff',
            }
        },
        MuiBottomNavigationAction: {
            // Name of the styleSheet
            root: {
                // Name of the rule
                flex: '1',
                '&$selected': {
                    paddingTop: 8,
                },
            },
            label: {
                '&$selected': {
                    fontSize: 12, //theme.typography.pxToRem(12)
                },
            },
        },
        MuiList: {
            padding: {
                paddingTop: 0,
            },
        },
        MuiListItemSecondaryAction: {
            root: {
                right: 10,
            },
        },
    },
});

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    phone: {
        // backgroundColor: 'lightblue',
    },
    logo: {
        position: 'absolute',
        left: 0,
        margin: 15,
    }
};

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                <CssBaseline />
                <MuiThemeProvider theme={ theme }>
                    <img src={ logoAiden } className={ classes.logo } alt='Aiden logo' /> {/*TODO: Only show when assistant is enabled*/}

                    <div className={ classes.phone }>
                        <UserGreetingContainer assistant />

                        <Phone image={ onePlusImage } assistant />
                    </div>

                    <div className={ classes.phone }>
                        <UserGreetingContainer />

                        <Phone image={ samsungImage }/>
                    </div>

                    <MessageCardsContainer />
                </ MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

