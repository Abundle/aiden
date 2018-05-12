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
    render() {
        const { classes, users } = this.props;

        return (
            <List className={ classes.root }>
                { users.map((user) => (
                    <ListItem
                        key={ user.id }
                        value={ user.name }
                        onClick={ () => this.props.dispatch(user) }
                        // onClick={ () => this.props.selectChat(user) }
                        // onClick={ (event) => this.handleOpen(event, user.name, user.id) }
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
                )) }
            </List>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserList);
// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));