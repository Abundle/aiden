import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// Local import
import avatar1 from '../assets/avatar1.jpg';
/*import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import avatar4 from './assets/avatar4.jpg';*/

let date = new Date();
let time = date.getHours() + ':' + date.getMinutes();

const styles = theme => ({
    root: {
        // TODO: make variable come from bottom navigation itself
        height: 'calc(100% - 64px)',
        overflowY: 'scroll',
    },
});

class UserList extends Component {
    handleClick(user) {
        this.props.dispatch(user);
        this.props.onOpen();
    }

    render() {
        const { classes, users, messages, assistant } = this.props;

        // TODO: https://stackoverflow.com/questions/45100477/how-render-object-in-react?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

        // console.log(users.byId['user0'].name);
        return (
            <List className={ classes.root }>
                { assistant ? (
                    Object.keys(users.byId).map((user, id) => {
                        let messageArray =  users.byId[user].messages;
                        let lastMessage = messageArray[messageArray.length - 1];
                        // let test = messages.byId[lastMessage].message === undefined ? 'hi' : 'ho';

                        return (
                            <div key={ id }>
                            { id !== 0 &&
                                <ListItem
                                    value={ users.byId[user].name }
                                    onClick={ () => this.handleClick(users.byId[user]) }
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
                        value={ users.byId['user0'].name }
                        onClick={ () => this.handleClick(users.byId['user0']) }
                        button
                        divider
                    >
                        <Avatar alt={ users.byId['user0'].name } src={ avatar1 }/>
                        <ListItemText primary={ users.byId['user0'].name } secondary='[should be empty]' />

                        <ListItemSecondaryAction>
                            <Typography variant='caption' color='primary'>
                                { time }
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                ) }

                {/*{ Object.keys(users.byId).map((user, id) => {
                    let messageArray =  users.byId[user].messages;
                    let lastMessage = messageArray[messageArray.length - 1];
                    // let test = messages.byId[lastMessage].message === undefined ? 'hi' : 'ho';

                    return (
                        <ListItem
                            key={ id }
                            value={ users.byId[user].name }
                            onClick={ () => this.handleClick(users.byId[user]) }
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
                    ) }
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