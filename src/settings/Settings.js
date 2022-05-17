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
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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

// Local import
import ContactGroups  from './ContactGroups';
import OpenSourceLicences  from './OpenSourceLicences';
import AppPermissions  from './AppPermissions';
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
    //'Rather not say',
    'Retrieved from Facebook: Male',
];

/*const options = [
    'Assistant enabled on all contact groups',
    // "Assistant enabled on 'Family'",
    // "Assistant enabled on 'Friends'",
    // "Assistant enabled on 'Colleagues'",
    'Assistant disabled on all contact groups',
];*/

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
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.light,
    },
    appIcon: {
        width: 24,
    },
});

class ConfirmationDialog extends Component {
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
                        Help others call you by the proper pronoun
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
                            <FormControlLabel value={ option } key={ option } control={ <Radio color='primary'/> } label={ option } />
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

class ConnectedAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readData: true,
            postData: true,
            // antoine: true,
        };
    }

    handleChange = index => event => {
        this.setState({ [index]: event.target.checked });
    };

    render() {
        return (
            <Dialog
                open={ this.props.open }
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>{ this.props.platform }</DialogTitle>
                <DialogContent>
                    <FormControl component='fieldset'>
                        Change platform permissions
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color='primary'
                                        checked={ this.state.readData }
                                        onChange={ this.handleChange('readData') }
                                    />
                                }
                                label='Allow gathering data from this platform'
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color='primary'
                                        checked={ this.state.writeData }
                                        onChange={ this.handleChange('writeData') }
                                    />
                                }
                                label='Allow assistant to act on this platform'
                            />
                        </FormGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ this.props.onClose } color='primary'>
                        Remove account
                    </Button>

                    <Button onClick={ this.props.onClose } color='primary'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialogGender: false,
            openDialogMail: false,
            openContactGroups: false,
            openDialogPermissions: false,
            openDialogLicences: false,
            openDialogAccount: false,
            birthdate: new Date('March 6, 1996'),
            gender: 'From Facebook: Male',
            platform: 'WhatsApp',

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

    handleContactsDialog = () => {
        this.setState({ openContactGroups: !this.state.openContactGroups });
    };

    handleLicenceDialog = () => {
        this.setState({ openDialogLicences: !this.state.openDialogLicences });
    };

    handlePermissionsDialog = () => {
        this.setState({ openDialogPermissions: !this.state.openDialogPermissions });
    };

    handleAccountDialog = (platform) => {
        this.setState({
            openDialogAccount: !this.state.openDialogAccount,
            platform: platform,
        });
    };

    handleClickOpen = () => {
        this.setState({ openDialogMail: true });
    };
    handleClose = () => {
        this.setState({ openDialogMail: false });
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

                <List className={ classes.list } subheader={ <div /> }>
                    <div>
                        <ListSubheader classes={{
                            sticky: classes.subHeader,
                        }}>
                            Profile
                        </ListSubheader>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>person_outline</Icon>
                            </ListItemIcon>
                            <ListItemText primary='You' secondary='Aidan Bundel'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText inset primary={
                                <DatePicker
                                    fullWidth
                                    keyboard
                                    keyboardIcon='cake'
                                    label='Birthday from Google account'
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
                            onClick={ this.handleClickOpen }
                        >
                            <ListItemText inset primary='Email address' secondary='From Google account: aidan@outlook.com'/>
                        </ListItem>

                        <Dialog
                            open={ this.state.openDialogMail }
                            onClose={ this.handleClose }
                            aria-labelledby='form-dialog-title'
                        >
                            <DialogTitle id='form-dialog-title'>Email address</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin='dense'
                                    id='name'
                                    defaultValue='aidan@outlook.com'
                                    label='Email Address'
                                    type='email'
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={ this.handleClose } color='primary'>
                                    Cancel
                                </Button>
                                <Button onClick={ this.handleClose } color='primary'>
                                    Save
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>

                    <div>
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
                                <Switch checked color='primary' />
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
                                    color='primary'
                                />
                            </ListItemSecondaryAction>
                        </ListItem>

                        { assistantScheduled &&
                            <div>
                                <ListItem>
                                    <ListItemText inset primary='Start' />

                                    <Picker time='October 15, 2018 09:00:00' placeholder='09:00 AM'/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText inset primary='End' />

                                    <Picker time='October 15, 2018 17:00:00' placeholder='17:00 PM'/>
                                </ListItem>

                                <ListItem button>
                                    <ListItemText inset primary='Days' secondary='Enabled on Mon, Wed, Fri'/>
                                </ListItem>
                            </div>
                        }

                        <ListItem
                            button
                            onClick={ this.handleContactsDialog }
                            >
                            <ListItemIcon>
                                <Icon>people_outline</Icon>
                            </ListItemIcon>
                            <ListItemText
                                primary='Contact groups'
                                secondary='Keep business and private separate'
                            />
                        </ListItem>

                        <ListItem
                            button
                            divider
                            onClick={ this.handlePermissionsDialog }
                        >
                            <ListItemIcon>
                                <Icon>lock</Icon>
                            </ListItemIcon>
                            <ListItemText primary='App permissions'/>
                        </ListItem>
                    </div>

                    <div>
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
                            <ListItemSecondaryAction onClick={ () => this.handleAccountDialog('WhatsApp') }>
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
                            <ListItemSecondaryAction onClick={ () => this.handleAccountDialog('Facebook') }>
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
                            <ListItemSecondaryAction onClick={ () => this.handleAccountDialog('Google Calendar') }>
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
                            <ListItemSecondaryAction onClick={ () => this.handleAccountDialog('Outlook') }>
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
                            <ListItemSecondaryAction onClick={ () => this.handleAccountDialog('Instagram') }>
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
                            <ListItemSecondaryAction onClick={ () => this.handleAccountDialog('Twitter') }>
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
                    </div>

                    <div>
                        <ListSubheader component='div' classes={{
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
                    </div>
                </List>

                <ContactGroups
                    open={ this.state.openContactGroups }
                    onClose={ this.handleContactsDialog }
                />

                <ConnectedAccount
                    open={ this.state.openDialogAccount }
                    onClose={ () => this.handleAccountDialog(this.state.platform) }
                    platform={ this.state.platform }
                />

                <AppPermissions
                    open={ this.state.openDialogPermissions }
                    onClose={ this.handlePermissionsDialog }
                />

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