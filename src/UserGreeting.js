import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const styles = {
    root: {
        padding: 15,
        paddingBottom: 0,
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        margin: '0 25px',
    }
};

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1, 
        }
    }

    onClickPrevious = () => {
        if (this.state.index === 1) {
            this.setState({
                index: 1,
            });
        } else {
            this.setState({
                index: this.state.index - 1,
            });
            this.props.dispatch(this.state.index - 1);
        }
    };

    onClickNext = () => {
        if (this.state.index === 3) {
            this.setState({
                index: 3,
            });
        } else {
            this.setState({
                index: this.state.index + 1,
            });
            this.props.dispatch(this.state.index + 1);
        }
    };

    render() {
        const { classes, users, assistant } = this.props; // activeUser
        const { index } = this.state;
        const userGreeting = assistant ? (
            <div>
                <Typography variant='headline'>
                    { users.byId['user0'].name }
                </Typography>

                <Typography variant='subheading'>
                    Me
                </Typography>
            </div>
        ) : (
            <div className={ classes.container }>
                <Button
                    variant='fab'
                    color='primary'
                    aria-label='previous'
                    className={ classes.button }
                    onClick={ this.onClickPrevious }
                >
                    <Icon>chevron_left</Icon>
                </Button>

                <Typography variant='headline' component='span'>
                    { users.byId['user' + index].name }

                    <Typography variant='subheading'>
                        { users.byId['user' + index].relation }
                    </Typography>
                </Typography>

                <Button
                    variant='fab'
                    color='primary'
                    aria-label='next'
                    className={ classes.button }
                    onClick={ this.onClickNext }
                >
                    <Icon>chevron_right</Icon>
                </Button>
            </div>
        );

        return (
            <div className={ classes.root }>
                { userGreeting }
            </div>
        );
    }
}

UserGreeting.propTypes = {
    dispatch: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserGreeting);