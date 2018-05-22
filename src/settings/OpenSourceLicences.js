import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        height: 'calc(100% - 56px)',
        overflowY: 'scroll',
    },
});

function OpenSourceLicences(props) {
    const { classes } = props;

    return (
        <Slide
            direction='up'
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
                            Open-source licences
                        </Typography>
                    </Toolbar>
                </AppBar>

                <List className={ classes.list }>
                    <ListItem>
                        <ListItemText primary='Create React App'/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Material UI'/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Redux'/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='React Redux'/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Redux Saga'/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='WS'/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Material UI Pickers'/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Moment'/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='React Big Calendar'/>
                    </ListItem>
                </List>
            </Paper>
        </Slide>
    )
}

OpenSourceLicences.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenSourceLicences);