import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import Avatar from 'material-ui/Avatar';

// import Chat from './chat/Chat';
// import Portal from './chat/Portal';
import { UserListContainer } from './containers/UserListContainer';
import { ChatContainer } from './containers/ChatContainer';

// TODO: move to store
/*const chatList = [
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
];*/

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        // TODO: make bottom navigation disappear when chat is clicked
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - (20px + 56px))', //'calc(100% - 20px)',
        backgroundColor: theme.palette.secondary.main,
        overflow: 'hidden',
    },
});

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2,
            open: false,
            //selectedChat: 'Dave Kellie',
        };
    }

    handleOpen = () => {
        // console.log(this.state.open);
        this.setState({ open: true });
    };

    handleClose = () => {
        // console.log(this.state.open);
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open }  = this.state;

        return (
            <div className={ classes.root }>
                <AppBar elevation={ 0 } position='static' color='secondary'> {/*TODO: move appBar within slide?*/}
                    <Toolbar>
                        <Typography variant='headline' color='default'>
                            Chats {/*TODO: scroll behaviour title https://material-components-web.appspot.com/toolbar/index.html*/}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <UserListContainer
                    onOpen={ this.handleOpen }
                />

                <ChatContainer
                    open={ open }
                    onClose={ this.handleClose }
                />
                {/*Handling state from https://www.nearform.com/blog/exploring-react-portals/*/}
                {/*<Chat
                    open={ open }
                    selectedChat={ selectedChat }
                    onClose={ this.handleClose }
                />*/}

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