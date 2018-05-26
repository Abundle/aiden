import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        padding: 15,
        // backgroundColor: 'gray',
        textAlign: 'center',
    },
};

function UserGreeting(props) {
    const { classes, assistant } = props;
    const userGreeting = assistant ? (
        <Typography variant='display1'>
            [Aidan Bundel]
        </Typography>
    ) : (
        <Typography variant='display1'>
            [Dave Kellie]
        </Typography>
    );

    return (
        <div className={ classes.root }>
            { userGreeting }
        </div>
    );
}

UserGreeting.propTypes = {
    assistant: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserGreeting);