import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';

import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: theme.palette.background.paper,
        zIndex: 1,
    },
    toolBar: {
        padding: 0,
    },
    list: {
        height: 'calc(100% - 64px)',
        paddingRight: 2,
        paddingBottom: theme.spacing.unit * 10,
        overflowY: 'scroll',
    },
});

function AppPermissions(props) {
    const { classes } = props;

    return (
        <Slide
            direction='left'
            in={ props.open }
            mountOnEnter
            unmountOnExit
        >
            <Paper
                className={ classes.root }
            >
                <AppBar elevation={ 0 } position='static' color='secondary'>
                    <Toolbar className={ classes.toolBar }>
                        <IconButton onClick={ props.onClose } aria-label='Close'> {/*onClick={ () => props.onClose() }*/}
                            <Icon>chevron_left</Icon>
                        </IconButton>
                        <Typography variant='title'>
                            App Permissions
                        </Typography>
                    </Toolbar>
                </AppBar>

                <List className={ classes.list } >
                    <ListItem>
                        <ListItemIcon>
                            <Icon>directions_run</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Body sensors' secondary='Used to detect current activity'/>
                        <ListItemSecondaryAction>
                            <Switch color='primary' checked/>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Icon>camera_alt</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Camera' secondary='Used for taking pictures automatically'/>
                        <ListItemSecondaryAction>
                            <Switch color='primary'/>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Icon>contacts</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Contacts' secondary='Used to retrieve contact names'/>
                        <ListItemSecondaryAction>
                            <Switch color='primary' checked/>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Icon>location_on</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Location' secondary='Used to detect activity, travel means and activity'/>
                        <ListItemSecondaryAction>
                            <Switch color='primary' checked/>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Icon>mic</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Microphone' secondary='Used to listen for voice commands'/>
                        <ListItemSecondaryAction>
                            <Switch color='primary' />
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Icon>sms</Icon>
                        </ListItemIcon>
                        <ListItemText primary='SMS' secondary='Used to read and send SMS texts'/>
                        <ListItemSecondaryAction>
                            <Switch color='primary' checked/>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Icon>folder</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Storage' secondary='Used to store data locally'/>
                        <ListItemSecondaryAction>
                            <Switch color='primary'/>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Icon>phone</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Telephone' secondary='Used to receive and make phone calls'/>
                        <ListItemSecondaryAction>
                            <Switch color='primary' checked/>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
        </Slide>
    )
}

AppPermissions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppPermissions);