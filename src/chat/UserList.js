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

/*let date = new Date();
let time = date.getHours() + ':' + date.getMinutes();*/

const styles = theme => ({
    root: {
        // TODO: make variable come from bottom navigation itself
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

        /*const userAssistant = 'user0';
        let messageArrayAssistant =  users.byId[userAssistant].messages;
        let lastMessageAssistant = messageArrayAssistant[messageArrayAssistant.length - 1];*/

        // TODO: https://stackoverflow.com/questions/45100477/how-render-object-in-react?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
        // TODO: lastMessage does not seem to work

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

                {/*{ assistant ? (
                    Object.keys(users.byId).map((user, id) => {
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
                                    <Avatar alt={ users.byId[user].name } src={ avatar1 }/>
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
                    )
                ) : (
                    <ListItem
                        value={ users.byId[userAssistant].name }
                        onClick={ () => this.handleClick(users.byId[userAssistant]) }
                        button
                        divider
                    >
                        <Avatar alt={ users.byId[userAssistant].name } src={ avatar1 }/>
                        <ListItemText primary={ users.byId[userAssistant].name } secondary={ messages.byId[lastMessageAssistant].message } />

                        <ListItemSecondaryAction>
                            <Typography variant='caption' color='primary'>
                                { time }
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                ) }*/}
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