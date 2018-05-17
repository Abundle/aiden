import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListSubheader, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Switch from 'material-ui/Switch';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

// Local import


const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - (20px + 56px))',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
        flexGrow: 1,
    },
});

function Settings(props) {
    const { classes } = props;

    return (
        <div className={ classes.root }>
            <AppBar elevation={ 0 } position='static' color='secondary'>
                <Toolbar>
                    <Typography variant='headline' color='default' className={ classes.titleToolbar }>
                        Settings
                    </Typography>
                </Toolbar>
            </AppBar>

            <List>
                <ListSubheader>General</ListSubheader>
                <ListItem>
                    <ListItemIcon>
                        <Icon>wifi</Icon>
                    </ListItemIcon>
                    <ListItemText primary='Wi-Fi' />
                    <ListItemSecondaryAction>
                        <Switch checked />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Icon>bluetooth</Icon>
                    </ListItemIcon>
                    <ListItemText primary='Bluetooth' />
                    <ListItemSecondaryAction>
                        <Switch/>
                    </ListItemSecondaryAction>
                </ListItem>

                <ListSubheader>Account</ListSubheader>
                <ListItem>
                    <ListItemIcon>
                        <Icon>wifi</Icon>
                    </ListItemIcon>
                    <ListItemText primary='Profile name' />
                    <ListItemSecondaryAction>
                        <Switch checked />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Icon>bluetooth</Icon>
                    </ListItemIcon>
                    <ListItemText primary='Birthday' />
                    <ListItemSecondaryAction>
                        <Switch/>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    );
}

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);