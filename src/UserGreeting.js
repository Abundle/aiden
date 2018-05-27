import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        padding: 15,
        paddingBottom: 0,
        textAlign: 'center',
    },
};

function UserGreeting(props) {
    const { classes, users, assistant } = props;
    const userGreeting = assistant ? (
        <Typography variant='display1'>
            { users.byId['user0'].name }
        </Typography>
    ) : (
        <Typography variant='display1'>
            { users.byId['user1'].name }
        </Typography>
    );


    // console.log(assistant);
    return (
        <div className={ classes.root }>
            { userGreeting }
        </div>
    );
}

UserGreeting.propTypes = {
    // users: PropTypes.[].isRequired,
    // assistant: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserGreeting);