import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

// Local import
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import avatar4 from './assets/avatar4.jpg';
import Chat from './chat/Chat';
// import Portal from './chat/Portal';

let date = new Date();
let time = date.getHours() + ':' + date.getMinutes();

const chatList = [ /*TODO: add timestamp*/
    { id: 1, name: 'Dave Kellie', avatar: avatar1, message: 'Lorem ipsum haha' },
    { id: 2, name: 'Kellie Max', avatar: avatar2, message: 'Lorem ipsum hihi' },
    { id: 3, name: 'Max Jack', avatar: avatar3, message: 'Lorem ipsum hoho' },
    { id: 4, name: 'Jack Dave', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 5, name: 'Jack Dave', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 6, name: 'Dave Jack', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 7, name: 'Jack Dave', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 8, name: 'Jack Dave', avatar: avatar4, message: 'Lorem ipsum huhu' },
    { id: 9, name: 'Max Jack', avatar: avatar3, message: 'Lorem ipsum hoho' },
    { id: 10, name: 'Max Jack', avatar: avatar3, message: 'Lorem ipsum hoho' },
];

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        // TODO: make bottom navigation dissappear when chat is clicked
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - (20px + 56px))', //'calc(100% - 20px)',
        backgroundColor: theme.palette.secondary.main,
        overflow: 'hidden',
    },
    chatList: {
        // TODO: make variable come from bottom navigation itself
        height: 'calc(100% - 64px)',
        overflowY: 'scroll',
    },

    // Chat style properties
    toolBar: {
        padding: 0,
    },
    chatContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: theme.palette.background.paper,
    },
});

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2,
            open: false,
            selectedChat: 'Dave Kellie',
        };
    }

    handleOpen = (event, name) => {
        this.setState({ open: true, selectedChat: name });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open, selectedChat }  = this.state;

        return (
            <div className={ classes.root }>
                <AppBar elevation={ 0 } position='static' color='secondary'> {/*TODO: move appBar within slide?*/}
                    <Toolbar>
                        <Typography variant='headline' color='default'>
                            Chats {/*TODO: scroll behaviour title https://material-components-web.appspot.com/toolbar/index.html*/}
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/*<Slide
                    direction='right'
                    in={ !open }
                    mountOnEnter
                    unmountOnExit
                >*/}
                <List className={ classes.chatList }>
                    { chatList.map((data) => (
                        <ListItem
                            key={ data.id }
                            value={ data.name }
                            onClick={ (event) => this.handleOpen(event, data.name) }
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
                {/*</Slide>*/}

                {/*From https://www.nearform.com/blog/exploring-react-portals/*/}
                <Chat
                    open={ open }
                    selectedChat={ selectedChat }
                    onClose={ this.handleClose }
                />

                {/*<Portal
                    open={ open }
                    selectedChat={ 'My Portal Modal' }
                    onClose={ this.handleClose }
                />*/}
            </div>
        );
    }
}

ChatList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatList);