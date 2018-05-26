import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        margin: 15,
    },
    card: {
        maxWidth: 345,
        margin: 10,
        transition: 'transform 200ms ease',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.05)',
        }
    },
};

// const card = 'Lizards are a widespread group of squamate reptiles 😂';
const scenarios = {
    Echo: {
        title: 'Echo',
        keywords: 'Lizards are a widespread group of squamate reptiles 😂',
        response: 'hi',
    },
    Hello: {
        title: 'Hello',
        keywords: 'hi 😂',
        response: 'hello',
    },
};

class MessageCards extends Component {
    onClick = (scenario) => {
        // console.log(scenario);
        this.props.dispatch(scenario);
    };

    render() {
        const { classes, assistant } = this.props;

        console.log(scenarios);

        return (
            <div className={ classes.root }>
                { assistant ? (null) : (
                    Object.keys(scenarios).map(scenario => (
                        <Card
                            key={ scenario }
                            className={ classes.card }
                            onClick={ () => this.onClick(scenarios[scenario]) }
                        >
                            <CardContent>
                                <Typography gutterBottom variant='headline' component='h2'>
                                    { scenario }
                                </Typography>
                                <Typography component='p'>
                                    { scenarios[scenario].keywords }
                                </Typography>
                            </CardContent>
                        </Card>
                    ) )
                ) }
            </div>
        );
    }
}

MessageCards.propTypes = {
    dispatch: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageCards);