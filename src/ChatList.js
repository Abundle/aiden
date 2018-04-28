import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Slide from 'material-ui/transitions/Slide';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';

// Custom import
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import avatar4 from './assets/avatar4.jpg';

let date = new Date();
let time = date.getHours() + ':' + date.getMinutes();

const chatList = [ /*TODO: add timestamp*/
    { id: 1, name: 'Dave Kellie', avatar: avatar1, message: 'Lorem ipsum haha' },
    { id: 2, name: 'Kellie Max', avatar: avatar2, message: 'Lorem ipsum hihi' },
    { id: 3, name: 'Max Jack', avatar: avatar3, message: 'Lorem ipsum hoho' },
    { id: 4, name: 'Jack Dave', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 5, name: 'Jack Dave', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 6, name: 'Jack Dave', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 7, name: 'Jack Dave', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 8, name: 'Jack Dave', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 9, name: 'Max Jack', avatar: avatar3, message: 'Lorem ipsum hoho' },
    { id: 10, name: 'Max Jack', avatar: avatar3, message: 'Lorem ipsum hoho' },
];

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - (20px + 56px))',
        backgroundColor: theme.palette.background.paper,
        overflowY: 'scroll',
        overflow: 'hidden'
    },
    toolBar: {
        padding: 0,
    },
    chat: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        // paddingLeft: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper,
    },
    flex: {
        flex: 1,
        // textAlign: 'center',
    },
});

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2,
            open: false,
            selectedChat: 'a'
        };
    }

    handleClickOpen = (event, name) => {
        this.setState({ open: true, selectedChat: name }); // TODO: scroll to top when clicked
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        // const { state }  = this.state;

        return (
            <div className={ classes.root }
                // style={ this.state.open ? { overflowY: 'hidden' } : { overflowY: 'scroll' } }
            >
                <AppBar elevation={ 0 } position='static' color='secondary'>
                    <Toolbar>
                        <Typography variant='headline' color='default'>
                            Chats
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Slide
                    direction='right'
                    in={ !this.state.open }
                    mountOnEnter
                    unmountOnExit
                >
                <List>
                    { chatList.map((data) => (
                        <ListItem
                            key={ data.id }
                            value={ data.name }
                            onClick={ event => this.handleClickOpen(event, data.name) }
                            button
                            divider
                        >
                            <Avatar alt={ data.name } src={ data.avatar }/>
                            <ListItemText primary={ data.name } secondary={ data.message }/>

                            <ListItemSecondaryAction>
                                <Typography variant='caption' color='primary'> {/*gutterBottom*/}
                                    { time }
                                </Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )) }
                </List>
                </Slide>

                <Slide
                    direction='left'
                    in={ this.state.open }
                    mountOnEnter
                    unmountOnExit
                >
                    <Paper
                        className={ classes.chat }
                        onClose={ this.handleClose }
                    >
                        <AppBar elevation={ 0 } position='static' color='secondary'>
                            <Toolbar className={ classes.toolBar }>
                                <IconButton color='inherit' onClick={ this.handleClose } aria-label='Close'>
                                    <Icon>chevron_left</Icon>
                                </IconButton>
                                <Typography variant='title' color='inherit' className={ classes.flex }>
                                    { this.state.selectedChat }
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    </Paper>
                </Slide>
            </div>
        );
    }

}

ChatList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatList);