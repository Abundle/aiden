import React, { Component } from 'react';
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
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

// Local import
import avatar1 from '../assets/avatar1.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';
import avatar5 from '../assets/avatar5.jpg';
import avatar6 from '../assets/avatar6.jpg';
import avatar8 from '../assets/avatar8.jpg';
import avatar9 from '../assets/avatar9.jpg';

const contactGroups = {
    'Business': {
        description: 'Will not disclose private information. Assistant uses formal language',
    },
    'Friends':{
        description: 'May disclose private information. Assistant simulates previous messaging behaviour',
    },
    'Family': {
        description: 'Allowed to disclose private information. Assistant simulates previous messaging behaviour',
    },
};

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
    subHeader: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class ContactGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openBusiness: false,
            openFamily: false,
            openFriends: false,

            checked: ['Business', 'Family', 'Friends'],
        }
    }

    handleToggle = value => event => {
        this.setState({ [value]: event.target.checked });
    };

    handleBusiness = () => {
        this.setState({ openBusiness: !this.state.openBusiness });
    };

    handleFamily = () => {
        this.setState({ openFamily: !this.state.openFamily });
    };

    handleFriends = () => {
        this.setState({ openFriends: !this.state.openFriends });
    };

    render() {
        const { classes } = this.props;
        const { openBusiness, openFamily, openFriends } = this.state;

        return (
            <Slide
                direction='left'
                in={ this.props.open }
                mountOnEnter
                unmountOnExit
            >
                <Paper
                    className={ classes.root }
                >
                    <AppBar elevation={ 0 } position='static' color='secondary'>
                        <Toolbar className={ classes.toolBar }>
                            <IconButton onClick={ this.props.onClose } aria-label='Close'>
                                <Icon>chevron_left</Icon>
                            </IconButton>
                            <Typography variant='title'>
                                Contact groups
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <List
                        className={ classes.list }
                        subheader={ <div /> }
                    >
                        <div>
                            <ListSubheader className={ classes.subHeader }>Assistant per contact group</ListSubheader>
                            <ListItem dense>
                                <ListItemText secondary='Note that the assistant will
                                always allow urgent matters to come through'/>
                            </ListItem>
                            {/*<ListItem>
                                <Button variant='outlined'>
                                    Learn More
                                </Button>
                            </ListItem>*/}

                            { Object.keys(contactGroups).map((id) => (
                                <ListItem
                                    key={ id }
                                    //dense
                                    button
                                    onClick={ this.handleToggle(id) }
                                >
                                    <Checkbox
                                        color='primary'
                                        checked={ this.state.checked.indexOf(id) !== -1 }
                                        tabIndex={ -1 }
                                        disableRipple
                                    />
                                    <ListItemText primary={ id } secondary={ contactGroups[id].description }/>
                                </ListItem>
                            )) }
                        </div>

                        <div>
                            <ListSubheader className={ classes.subHeader }>Suggestion for groups</ListSubheader>

                            <ListItem button onClick={ this.handleBusiness }>
                                <ListItemIcon>
                                    <Icon>work</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Business' />

                                { openBusiness ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon> }
                            </ListItem>

                            <Collapse in={ openBusiness } timeout='auto' unmountOnExit>
                                <List component='div' disablePadding>
                                    <ListItem className= {classes.nested }>
                                        <Avatar alt='Dave Kellie' src={ avatar1 }/>
                                        <ListItemText inset primary='Dave Kellie'/>

                                        <ListItemSecondaryAction>
                                            <IconButton aria-label='Delete'>
                                                <Icon>remove</Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem className= {classes.nested }>
                                        <Avatar alt='John Johnsen' src={ avatar5 }/>
                                        <ListItemText inset primary='John Johnsen' />

                                        <ListItemSecondaryAction>
                                            <IconButton aria-label='Delete'>
                                                <Icon>remove</Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem button className= {classes.nested }>
                                        <ListItemIcon>
                                            <Icon>add</Icon>
                                        </ListItemIcon>
                                        <ListItemText primary='Add a contact' />
                                    </ListItem>
                                </List>
                            </Collapse>

                            <ListItem button onClick={ this.handleFriends }>
                                <ListItemIcon>
                                    <Icon>work</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Friends'/>

                                { openFriends ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon> }
                            </ListItem>

                            <Collapse in={ openFriends } timeout='auto' unmountOnExit>
                                <List component='div' disablePadding>
                                    <ListItem className= { classes.nested }>
                                        <Avatar alt='Ali Connors' src={ avatar4 }/>
                                        <ListItemText inset primary='Ali Connors'/>

                                        <ListItemSecondaryAction>
                                            <IconButton aria-label='Delete'>
                                                <Icon>remove</Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem className= { classes.nested }>
                                        <Avatar alt='Richard Roe' src={ avatar9 }/>
                                        <ListItemText inset primary='Richard Roe' />

                                        <ListItemSecondaryAction>
                                            <IconButton aria-label='Delete'>
                                                <Icon>remove</Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem className= { classes.nested }>
                                        <Avatar alt='Trevor Holten' src={ avatar8 }/>
                                        <ListItemText inset primary='Trevor Holten' />

                                        <ListItemSecondaryAction>
                                            <IconButton aria-label='Delete'>
                                                <Icon>remove</Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem button className= { classes.nested }>
                                        <ListItemIcon>
                                            <Icon>add</Icon>
                                        </ListItemIcon>
                                        <ListItemText primary='Add a contact' />
                                    </ListItem>
                                </List>
                            </Collapse>

                            <ListItem button onClick={ this.handleFamily }>
                                <ListItemIcon>
                                    <Icon>favorite</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Family' />

                                { openFamily ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon> }
                            </ListItem>

                            <Collapse in={ openFamily } timeout='auto' unmountOnExit>
                                <List component='div' disablePadding>
                                    <ListItem className= { classes.nested }>
                                        <Avatar alt='Amy Bundel' src={ avatar3 }/>
                                        <ListItemText inset primary='Amy Bundel'/>

                                        <ListItemSecondaryAction>
                                            <IconButton aria-label='Delete'>
                                                <Icon>remove</Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem className= { classes.nested }>
                                        <Avatar alt='Hannah Bundel' src={ avatar6 }/>
                                        <ListItemText inset primary='Hannah Bundel' />

                                        <ListItemSecondaryAction>
                                            <IconButton aria-label='Delete'>
                                                <Icon>remove</Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <ListItem button className= { classes.nested }>
                                        <ListItemIcon>
                                            <Icon>add</Icon>
                                        </ListItemIcon>
                                        <ListItemText primary='Add a contact' />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </div>

                        {/*<ListItem button>
                            <ListItemIcon>
                                <Icon>add</Icon>
                            </ListItemIcon>
                            <ListItemText primary='Add a custom group' />
                        </ListItem>*/}
                    </List>
                </Paper>
            </Slide>
        )
    }
}

ContactGroups.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactGroups);