// Local import
import me from '../assets/me.jpg';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
// import avatar4 from '../assets/avatar4.jpg';

import googleCalendar from '../assets/google_calendar.svg';
import facebook from '../assets/facebook.svg';
import whatsapp from '../assets/whatsapp.svg';
import bodySensors from '../assets/directions_run.svg'
import location from '../assets/location.svg';

const reducers = (state = {
    messages: {
        byId: {
            'message0': {
                id: 'message0',
                author: 'Aidan Bundel',
                message: 'Hi Dave! How are you? Long time no text, so they say',
                receiver: 'Dave Kellie',
            },
            'message1': {
                id: 'message1',
                author: 'Dave Kellie',
                message: "Hey Aidan, I'm good, thanks!",
                receiver: 'Aidan Bundel',
            },
            'message2': {
                id: 'message2',
                author: 'Ali Connors',
                message: 'Thanks for the info!',
                receiver: 'Aidan Bundel',
            },
            'message3': {
                id: 'message3',
                author: 'Dave Kellie',
                message: 'What have you been up to?',
                receiver: 'Aidan Bundel',
            },
            'message4': {
                id: 'message4',
                author: 'Aidan Bundel',
                message: 'Busy getting ready for demo day 😅',
                receiver: 'Dave Kellie',
            },
            'message5': {
                id: 'message5',
                author: 'Amy Bundel',
                message: 'Ekej',
                receiver: 'Aidan Bundel',
            },
        },
        allIds: ['message0', 'message1', 'message2', 'message3', 'message4'],
        messageSelected: [],
    },
    users: {
        byId: {
            'user0': {
                id: 'user0',
                name: 'Aidan Bundel',
                messages: ['message0', 'message4'],
                avatar: me,
            },
            'user1': {
                id: 'user1',
                name: 'Dave Kellie',
                messages: ['message1', 'message3'],
                avatar: avatar1,
                relation: 'Colleague',
            },
            'user2': {
                id: 'user2',
                name: 'Ali Connors',
                messages: ['message2'],
                avatar: avatar2,
                relation: 'Friend',
            },
            'user3': {
                id: 'user3',
                name: 'Amy Bundel',
                messages: ['message5'],
                avatar: avatar3,
                relation: 'Family',
            },
        },
        allIds: ['user0', 'user1', 'user2', 'user3'],
        activeUser: 'user1',
        selectedUser: 'user1',
    },
    scenarios: {
        /*Echo: {
            title: 'Echo',
            keywords: 'Lizards are a widespread group of squamate reptiles.',
            response: 'Lizards are a widespread group of squamate reptiles.',
        },*/
        Hello: {
            title: 'Hello',
            keywords: 'Hi!',
            // icon: '👋',
            responses: {
                Colleague: {
                    response: 'Hello!',
                },
                Family: {
                    response: 'Ha!',
                },
                Friend: {
                    response: 'Hi!',
                }
            },
            data: {
                icon: googleCalendar,
                app: 'Previous messages',
                color: '#0045CE',
            }
        },
        Whereabouts: {
            title: 'Whereabouts',
            keywords: 'Where are you? 👀',
            responses: {
                Colleague: {
                    response: 'Sorry, I cannot disclose this information',
                },
                Family: {
                    response: 'At uni',
                },
                Friend: {
                    response: 'In Laplace',
                }
            },
            data: {
                icon: location,
                app: 'Location',
                color: 'black',
            }
        },
        Activity: {
            title: 'Activity',
            keywords: 'Did you come by car on the way here?',
            responses: {
                Colleague: {
                    response: 'Nope',
                },
                Family: {
                    response: 'Nope, biking as usual 🚲',
                },
                Friend: {
                    response: 'Nope, biking as usual 🚲',
                }
            },
            data: {
                icon: bodySensors,
                app: 'Body sensors',
                color: 'black',
            }
        },
        /*Planning: {
            title: 'Planning',
            keywords: 'Whatcha doin',
            response: "Nothin' much, you?",
        },*/
        AlmostThere: {
            title: 'AlmostThere',
            keywords: 'Are you almost here for our appointment? 🚗',
            responses: {
                Colleague: {
                    response: 'Not yet, my apologies',
                },
                Family: {
                    response: "Not yet, so I'll probably be a bit later because of who I am as a person",
                },
                Friend: {
                    response: "Not yet, so I'll probably be a bit later because of who I am as a person",
                }
            },
            data: {
                icon: location,
                app: 'Location',
                color: 'black',
            }
        },
        Meeting: {
            title: 'Meeting',
            keywords: 'What time is the meeting with Elon today?',
            responses: {
                Colleague: {
                    response: '4pm at MetaForum!',
                },
                Family: {
                    response: "We don't have a meeting",
                },
                Friend: {
                    response: "We don't have a meeting",
                }
            },
            data: {
                icon: googleCalendar,
                app: 'Google Calendar',
                color: '#0045CE',
            }
        },
        Focus: {
            title: 'Focus',
            keywords: 'Can I call you right now?',
            responses: {
                Colleague: {
                    response: "Sorry I don't have time now, can this wait till tomorrow?",
                },
                Family: {
                    response: 'Now is not a great time, is it urgent?',
                },
                Friend: {
                    response: 'Now is not a great time, is it urgent?',
                }
            },
            data: {
                icon: facebook,
                app: 'Outlook Calendar',
                color: '#0045CE',
            }
        },
        /*Birthday: {
            title: 'Birthday',
            keywords: 'Happy birthday Aidan! 🎉',
            responses: {
                Colleague: {
                    response: 'Thanks, but it is actually not my birthday today 🤫',
                },
                Family: {
                    response: 'It is not my birthday today?',
                },
                Friend: {
                    response: 'It is not my birthday today bruh',
                }
            },
            data: {
                icon: facebook,
                app: 'Facebook',
                color: '#0045CE',
            }
        },*/
        Private: {
            title: 'Private',
            keywords: 'Can I have your email adress?',
            responses: {
                Colleague: {
                    response: 'Sorry, I cannot disclose this information',
                },
                Family: {
                    response: "I'm surprised you don't have it already, it's aidan@outlook.com",
                },
                Friend: {
                    response: "Sure, it's aidan@outlook.com",
                }
            },
            data: {
                icon: googleCalendar,
                app: 'Contact settings',
                color: '#0045CE',
            }
        },
        Helpdesk: {
            title: 'Helpdesk',
            keywords: 'Hey Aidan, I have some trouble with connecting my email to Outlook, can you help me?',
            responses: {
                Colleague: {
                    response: 'Have you followed the steps described here? https://tinyurl.com/y7cpeqv4',
                },
                Family: {
                    response: 'Yeah sure, have you followed the steps described here? https://tinyurl.com/y7cpeqv4',
                },
                Friend: {
                    response: 'Yeah sure, have you followed the steps described here? https://tinyurl.com/y7cpeqv4',
                }
            },
            data: {
                icon: whatsapp,
                app: 'Previous messages',
                color: '#075E54',
            }
        },
    }
}, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    byId: {
                        ...state.messages.byId,
                        [action.id]: {
                            id: action.id,
                            author: action.author.name,
                            message: action.message,
                            receiver: action.receiver.name,
                        },
                    },
                    allIds: [...state.messages.allIds, action.id]
                },
                users: {
                    ...state.users,
                    byId: {
                        ...state.users.byId,
                        [action.author.id]: {
                            ...state.users.byId[action.author.id],
                            messages: [...state.users.byId[action.author.id].messages, action.id]
                        },
                    },
                }
            };
        case 'SEND_RESPONSE':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    byId: {
                        ...state.messages.byId,
                        [action.id]: {
                            id: action.id,
                            author: action.author.name,
                            message: state.scenarios[action.scenario].responses[action.receiver.relation].response,
                            receiver: action.receiver.name,
                            data: state.scenarios[action.scenario].data,
                        },
                    },
                    allIds: [...state.messages.allIds, action.id]
                },
                users: {
                    ...state.users,
                    byId: {
                        ...state.users.byId,
                        [action.author.id]: {
                            ...state.users.byId[action.author.id],
                            messages: [...state.users.byId[action.author.id].messages, action.id]
                        },
                    },
                }
            };
        case 'MESSAGE_SELECTED':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    messageSelected: action.payload,
                }
            };
        case 'CHAT_SELECTED':
            return {
                ...state,
                users: {
                    ...state.users,
                    selectedUser: action.payload,
                }
            };
        case 'USER_CHANGED':
            return {
                ...state,
                users: {
                    ...state.users,
                    activeUser: 'user' + action.payload,
                }
            };
        default:
            return state;
    }
};

export default reducers;
