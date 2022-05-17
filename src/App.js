import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';

// Local import
import { UserGreetingContainer } from './containers/UserGreetingContainer';
import { MessageCardsContainer } from './containers/MessageCardsContainer';
import MobileApp from './MobileApp';
import onePlusImage from './assets/oneplus3_outline.svg';
import logoAiden from './assets/logo_aiden.png';
import samsungImage from './assets/samsung_galaxy_s4_outline.svg'
import Phone from './Phone';

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            main: '#fff',
            light: '#fff',
        },
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
                    fontSize: 12,
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
    demo: {
        width: 225,
        height: '100%',
        paddingTop: 16,
    },
    logo: {
        left: 0,
    },
    introduction: {
        marginTop: 100,
    },
};

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                <CssBaseline />

                <MuiThemeProvider theme={ theme }>
                    <MobileApp />

                    <div className='demo'>
                        <div className={ classes.demo }>
                            <img src={ logoAiden } className={ classes.logo } alt='Aiden logo' />

                            <Typography variant='title' gutterBottom className={ classes.introduction }>
                                Hi there!
                            </Typography>

                            <Typography variant='body1' gutterBottom align='justify'>
                               Meet my digital assistant Aiden. Shoot me a message as a colleague, family, friend or browse
                                through the assistant application.
                            </Typography>

                            <br />

                            <Typography variant='caption'>
                                Aidan Bundel <br />
                                Industrial Design TU/e
                            </Typography>
                        </div>
                    </div>

                    <div className='demo'>
                        <UserGreetingContainer assistant />

                        <Phone image={ onePlusImage } assistant />
                    </div>

                    <div className='demo'>
                        <MessageCardsContainer />
                    </div>

                    <div className='demo'>
                        <UserGreetingContainer />

                        <Phone image={ samsungImage }/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

