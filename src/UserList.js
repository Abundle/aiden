import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

// Local import
import avatar1 from './assets/avatar1.jpg';
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
        const { classes, users } = this.props;

        // TODO: https://stackoverflow.com/questions/45100477/how-render-object-in-react?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
        // console.log(users.byId);

        return (
            <List className={ classes.root }>
                { Object.keys(users.byId).map((user, id) => {
                        // console.log(users.byId[user]);
                        return (
                            <ListItem
                                key={ id }
                                value={ users.byId[user].name }
                                onClick={ () => this.handleClick(users.byId[user]) }
                                button
                                divider
                            >
                                <Avatar alt={ users.byId[user].name } src={ avatar1 }/>
                                <ListItemText primary={ users.byId[user].name } secondary={ users.byId[user].messages }/>

                                <ListItemSecondaryAction>
                                    <Typography variant='caption' color='primary'>
                                        { time }
                                    </Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    }
                ) }
                {/*{ Object.keys(users.byId).map((user, id) => {
                        console.log(users.byId[user]);
                        return (
                            <div key={ id }>
                                id is: {users.byId[user].id}
                                name is: {users.byId[user].name}
                            </div>
                        )
                    }
                ) }*/}
                {/*{ users.byId.map((user) => (
                    <ListItem
                        key={ user.id }
                        value={ user.name }
                        onClick={ () => this.handleClick(user) }
                        button
                        divider
                    >
                        <Avatar alt={ user.name } src={ avatar1 }/>
                        <ListItemText primary={ user.name } secondary={ user.message }/>

                        <ListItemSecondaryAction>
                            <Typography variant='caption' color='primary'>
                                { time }
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                )) }*/}
            </List>
        );
    }
}

UserList.propTypes = {
    /*users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,*/
    dispatch: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserList);