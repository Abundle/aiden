import React, { Component, PureComponent }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { DatePicker, TimePicker } from 'material-ui-pickers';

// Class ConfirmationDialog
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Class ConfirmationDialog
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Local import
import OpenSourceLicences  from './OpenSourceLicences';
import whatsapp from '../assets/whatsapp.svg';
import facebook from '../assets/facebook.svg';
import googleCalendar from '../assets/google_calendar.png';
import outlook from '../assets/outlook.png';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

const pronouns = [
    'Female',
    'Male',
    'Neutral',
    'Rather not say',
    "Retrieve from 'Connected accounts'",
];

const options = [
    'Assistant enabled',
    'Assistant enabled on custom groups', // TODO: Elaborate this option
    'Assistant disabled',
];


const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',
        // Minus status bar, app bar and bottom navigation
        height: 'calc(100% - (20px + 56px))',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
        flexGrow: 1,
    },
    list: {
        height: 'calc(100% - 64px)',
        paddingRight: 2,
        paddingBottom: theme.spacing.unit * 10,
        overflowY: 'scroll',
    },
    dialog: {
        width: '80%',
        maxHeight: 435,
    },
    subHeader: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.light,
    },
    appIcon: {
        width: 24,
    },
});

class ConfirmationDialog extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state.value = this.props.gender;
    }

    state = {};

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.gender) {
            this.setState({ value: nextProps.value });
        }
    }

    radioGroup = null;

    handleEntering = () => {
        this.radioGroup.focus();
    };

    handleCancel = () => {
        this.props.onClose(this.props.value);
    };

    handleOk = () => {
        this.props.onClose(this.state.value);
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value, ...other } = this.props;

        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth='xs'
                onEntering={ this.handleEntering }
                aria-labelledby='confirmation-dialog-title'
                { ...other }
            >
                <DialogTitle id='confirmation-dialog-title'>Pronouns</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Help other call you by the proper pronoun
                    </DialogContentText>
                    <RadioGroup
                        ref={ node => {
                            this.radioGroup = node;
                        } }
                        aria-label='gender'
                        name='gender'
                        value={ this.state.value }
                        onChange={ this.handleChange }
                    >
                        { pronouns.map(option => (
                            <FormControlLabel value={ option } key={ option } control={ <Radio /> } label={ option } />
                        )) }
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ this.handleCancel } color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={ this.handleOk } color='primary'>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

ConfirmationDialog.propTypes = {
    onClose: PropTypes.func,
    value: PropTypes.string,
};

class Picker extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(this.props.time),
        };
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { selectedDate } = this.state;

        return (
            <TimePicker
                clearable
                ampm={ false }
                value={ selectedDate }
                onChange={ this.handleDateChange }
            />
        );
    }
}

class SimpleListMenu extends React.Component {
    state = {
        anchorEl: null,
        selectedIndex: 1,
    };

    button = undefined;

    handleClickListItem = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, anchorEl: null });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        // const { classes } = this.props;
        const { anchorEl } = this.state;

        return (
            <div>
                <ListItem
                    divider
                    button
                    aria-haspopup='true'
                    aria-controls='lock-menu'
                    aria-label='Messaging preferences'
                    onClick={ this.handleClickListItem }
                >
                    <ListItemIcon>
                        <Icon>message</Icon>
                    </ListItemIcon>
                    <ListItemText
                        primary='Messaging preferences'
                        secondary={ options[this.state.selectedIndex] }
                    />
                </ListItem>
                <Menu
                    id='lock-menu'
                    anchorEl={ anchorEl }
                    open={ Boolean(anchorEl) }
                    onClose={ this.handleClose }
                >
                    { options.map((option, index) => (
                        <MenuItem
                            key={ option }
                            selected={ index === this.state.selectedIndex }
                            onClick={ event => this.handleMenuItemClick(event, index) }
                        >
                            { option }
                        </MenuItem>
                    )) }
                </Menu>
            </div>
        );
    }
}

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialogGender: false,
            openDialogLicences: false,
            birthdate: new Date('March 6, 1996'),
            // date: new Date(),
            gender: 'Male',

            assistantScheduled: true,
        };
    }
    button = undefined;

    handleGenderDialog = event => {
        this.setState({ openDialogGender: true });
    };
    handleGenderDialogClose = value => {
        this.setState({ gender: value, openDialogGender: false });
    };

    handleLicenceDialog = () => {
        this.setState({ openDialogLicences: !this.state.openDialogLicences });
    };

    handleDateChange = date => {
        this.setState({ birthdate: date });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { birthdate, gender, assistantScheduled } = this.state;

        return (
            <div className={ classes.root }>
                <AppBar elevation={ 0 } position='static' color='secondary'>
                    <Toolbar>
                        <Typography variant='headline' color='default' className={ classes.titleToolbar }>
                            Settings
                        </Typography>
                    </Toolbar>
                </AppBar>

                <List className={ classes.list } subheader={<ListSubheader />}>
                    <ListSubheader classes={{
                        sticky: classes.subHeader,
                    }}>
                        Profile
                    </ListSubheader>
                    <ListItem>
                        <Avatar>
                            <Icon>person_outline</Icon>
                        </Avatar>
                        <ListItemText primary='You' secondary='Aidan Bundel'/>
                    </ListItem>
                    <ListItem>
                        {/*<ListItemIcon>
                            <Icon>cake</Icon>
                        </ListItemIcon>*/}

                        <ListItemText inset primary={
                            <DatePicker
                                fullWidth
                                keyboard
                                label='Birthday'
                                format='DD/MM/YYYY'
                                placeholder='06/03/1996'
                                // handle clearing outside => pass plain array if you are not controlling value outside
                                mask={ value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : []) }
                                value={ birthdate }
                                onChange={ this.handleDateChange }
                                disableOpenOnEnter
                                animateYearScrolling={ false }
                            />
                        }/>
                    </ListItem>
                    <ListItem
                        button
                        aria-haspopup='true'
                        aria-controls='gender-menu'
                        aria-label='Gender'
                        onClick={ this.handleGenderDialog }
                    >
                        <ListItemText inset primary='Gender' secondary={ gender }/>
                    </ListItem>
                    <ConfirmationDialog
                        classes={{
                            paper: classes.dialog,
                        }}
                        open={ this.state.openDialogGender }
                        onClose={ this.handleGenderDialogClose }
                        value={ gender }
                    />

                    <ListItem
                        button
                        divider
                    >
                        <ListItemText inset primary='Email address' secondary='aidan@outlook.com'/>
                    </ListItem>

                    <ListSubheader classes={{
                        sticky: classes.subHeader,
                    }}>
                        Assistant Aiden
                    </ListSubheader>
                    <ListItem>
                        <ListItemIcon>
                            <Icon>assistant</Icon>
                        </ListItemIcon>
                        <ListItemText primary='On/off' />
                        <ListItemSecondaryAction>
                            <Switch checked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Icon>schedule</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Schedule' secondary='Enable Aiden at specific times'/>
                        <ListItemSecondaryAction>
                            <Switch
                                checked={ assistantScheduled }
                                onChange={ this.handleChange('assistantScheduled') }
                                value='assistantScheduled'
                            />
                        </ListItemSecondaryAction>
                    </ListItem>

                    { assistantScheduled &&
                        <div>
                            <ListItem>
                                <ListItemText inset primary='Start' />

                                <Picker time='October 15, 2018 09:00:00' placeholder='09:00 AM'/>
                                {/*<TimePicker
                                    clearable
                                    ampm={ false }
                                    value={ date }
                                    // placeholder='09:00 AM'
                                    onChange={ this.handleDateChange }
                                />*/}
                            </ListItem>
                            <ListItem>
                                <ListItemText inset primary='End' />

                                <Picker time='October 15, 2018 17:00:00' placeholder='17:00 PM'/>
                            </ListItem>
                        </div>
                    }

                    <ListItem
                        button
                        >
                        <ListItemIcon>
                            <Icon>group</Icon>
                        </ListItemIcon>
                        <ListItemText
                            primary='Contact groups'
                            secondary='Contact groups help you keep business and private separate'
                        />
                    </ListItem>
                    <SimpleListMenu />
                    {/*<ListItem
                        divider
                        button
                    >
                        <ListItemIcon>
                            <Icon>message</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Messaging preferences' secondary='Assistant always enabled'/>
                    </ListItem>*/}

                    <ListSubheader classes={{
                        sticky: classes.subHeader,
                    }}>
                        Connected accounts
                    </ListSubheader>
                    <ListItem>
                        <ListItemIcon>
                            <img className={ classes.appIcon } src={ whatsapp } alt='WhatsApp'/>
                        </ListItemIcon>
                        <ListItemText primary='WhatsApp' />
                        <ListItemSecondaryAction>
                            <IconButton aria-label='Settings'>
                                <Icon>settings</Icon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <img className={ classes.appIcon } src={ facebook } alt='Facebook'/>
                        </ListItemIcon>
                        <ListItemText primary='Facebook' />
                        <ListItemSecondaryAction>
                            <IconButton aria-label='Settings'>
                                <Icon>settings</Icon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <img className={ classes.appIcon } src={ googleCalendar } alt='Google Calendar'/>
                        </ListItemIcon>
                        <ListItemText primary='Google Calendar' />
                        <ListItemSecondaryAction>
                            <IconButton aria-label='Settings'>
                                <Icon>settings</Icon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <img className={ classes.appIcon } src={ outlook } alt='Outlook'/>
                        </ListItemIcon>
                        <ListItemText primary='Outlook' />
                        <ListItemSecondaryAction>
                            <IconButton aria-label='Settings'>
                                <Icon>settings</Icon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <img className={ classes.appIcon } src={ instagram } alt='Instagram'/>
                        </ListItemIcon>
                        <ListItemText primary='Instagram' />
                        <ListItemSecondaryAction>
                            <IconButton aria-label='Settings'>
                                <Icon>settings</Icon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <img className={ classes.appIcon } src={ twitter } alt='Twitter'/>
                        </ListItemIcon>
                        <ListItemText primary='Twitter' />
                        <ListItemSecondaryAction>
                            <IconButton aria-label='Settings'>
                                <Icon>settings</Icon>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem button divider>
                        <ListItemIcon>
                            <Icon>add</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Add an account' />
                    </ListItem>

                    {/*<ListSubheader classes={{
                        sticky: classes.subHeader,
                    }}>General</ListSubheader>
                    <ListItem>
                        <ListItemIcon>
                            <Icon>wifi</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Profile name' />
                        <ListItemSecondaryAction>
                            <Switch checked />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Icon>bluetooth</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Birthday' />
                        <ListItemSecondaryAction>
                            <Switch/>
                        </ListItemSecondaryAction>
                    </ListItem>*/}

                    <ListSubheader classes={{
                        sticky: classes.subHeader,
                    }}>
                        About
                    </ListSubheader>
                    <ListItem>
                        <ListItemText primary='App version' secondary='v0.1.0'/>
                    </ListItem>
                    <ListItem
                        button
                        onClick={ this.handleLicenceDialog }
                    >
                        <ListItemText primary='Open-source licences' secondary='Licence details for open-source software'/>
                    </ListItem>
                </List>

                <OpenSourceLicences
                    open={ this.state.openDialogLicences }
                    onClose={ this.handleLicenceDialog }
                />
            </div>
        );
    };
}

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);