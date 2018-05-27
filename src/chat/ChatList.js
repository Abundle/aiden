import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

// Local import
import { UserListContainer } from '../containers/UserListContainer';
import { ChatContainer } from '../containers/ChatContainer';

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        // TODO: make bottom navigation disappear when chat is clicked
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - (20px + 56px))', //'calc(100% - 20px)',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
    },
    titleToolbar: { // TODO: move to App.js overrides
        flex: 1,
        paddingRight: theme.spacing.unit * 2,
    },
});

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: 2,
            open: false,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open }  = this.state;

        return (
            <div className={ classes.root }>
                <AppBar elevation={ 0 } position='static' color='secondary'>
                    <Toolbar classes={{ root: classes.titleToolbar }}>
                        <Typography variant='headline' color='default' className={ classes.titleToolbar }>
                            Chats {/*TODO: scroll behaviour title https://material-components-web.appspot.com/toolbar/index.html*/}
                        </Typography>
                        <IconButton color='primary' aria-label='Menu'>
                            <Icon>more_vert</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <UserListContainer
                    onOpen={ this.handleOpen }
                />

                <ChatContainer
                    open={ open }
                    onClose={ this.handleClose }
                />
            </div>
        );
    }
}

ChatList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatList);