import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';

// custom import
import Phone from './Phone';
import onePlusImage from './assets/oneplus3_outline.svg'
// import samsungImage from './assets/samsung_galaxy_s4_putline.svg'

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            main: '#ff0000',
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
    /*typography: {
        fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
        fontSize: 20,
    },*/
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
                paddingBottom: 150,
            },
        },
        MuiListItemSecondaryAction: {
            root: {
                top: '35%',
                right: 10,
            },
        }
    },
});

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        // flexDirection: 'row',
        // textAlign: 'center',
        // backgroundColor: 'lightgray',
    },
};

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                <CssBaseline />
                <MuiThemeProvider theme={ theme }>
                    <Phone image={ onePlusImage } assistant />

                    {/*<Phone image={ samsungImage }/>*/}
                </ MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

