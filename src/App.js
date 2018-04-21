import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// custom import
import Phone from './Phone';
import onePlusImage from './assets/oneplus3_outline.svg'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f15b27',
        },
        secondary: {
            main: '#f15b27',
        },
        error: {
            main: '#e83a3a',
        },
    },
    /*typography: {
        fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
        fontSize: 20,
    },*/
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
                    <Phone image={ onePlusImage }/>

                    <Phone image={ onePlusImage }/>
                </ MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

