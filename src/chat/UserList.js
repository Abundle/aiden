import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

let time = moment().format('HH:mm');

const styles = theme => ({
    root: {
        height: 'calc(100% - 64px)',
        overflowY: 'scroll',
    },
});

class UserList extends Component {
    handleClick(name) {
        this.props.dispatch(name);
        this.props.onOpen();
    }

    render() {
        const { classes, users, messages } = this.props;

        return (
            <List className={ classes.root }>
                { Object.keys(users.byId).map((user, id) => {
                    let messageArray =  users.byId[user].messages;
                    let lastMessage = messageArray[messageArray.length - 1];

                    return (
                        <div key={ id }>
                            { id !== 0 &&
                            <ListItem
                                value={ users.byId[user].name }
                                onClick={ () => this.handleClick(users.byId[user].id) }
                                button
                                divider
                            >
                                <Avatar alt={ users.byId[user].name } src={ users.byId[user].avatar }/>
                                <ListItemText primary={ users.byId[user].name } secondary={ messages.byId[lastMessage].message }/>

                                <ListItemSecondaryAction>
                                    <Typography variant='caption' color='primary'>
                                        { time }
                                    </Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                            }
                        </div>
                    ) }
                ) }
            </List>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserList);