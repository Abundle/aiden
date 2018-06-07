// Local import
import me from '../assets/me.jpg';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
// import avatar4 from '../assets/avatar4.jpg';

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
                message: "Hey Aidan, I'm fine thank you!",
                receiver: 'Aidan Bundel',
            },
            'message2': {
                id: 'message2',
                author: 'Kellie Max',
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
                name: 'Kellie Max',
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
        },
        Whereabouts: {
            title: 'Whereabouts',
            keywords: 'Where are you? 👀',
            responses: {
                Colleague: {
                    response: 'In Laplace',
                },
                Family: {
                    response: 'At uni',
                },
                Friend: {
                    response: 'Like right next to you',
                }
            },
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
        },
        /*Planning: {
            title: 'Planning',
            keywords: 'Whatcha doin',
            response: "Nothin' much, you?",
        },*/
        AlmostThere: {
            title: 'AlmostThere',
            keywords: 'Are you on your way? 🚗',
            responses: {
                Colleague: {
                    response: 'Yes',
                },
                Family: {
                    response: "Not yet, so I'll probably be a bit later because of who I am as a person",
                },
                Friend: {
                    response: "Not yet, so I'll probably be a bit later because of who I am as a person",
                }
            },
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
        },
        Birthday: {
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
        },
        Private: { // TODO: only when sent from 'business' contact
            title: 'Private',
            keywords: 'Can I have your private email adress?',
            responses: {
                Colleague: {
                    response: 'Sorry, I cannot disclose this information',
                },
                Family: {
                    response: "You don't have it??",
                },
                Friend: {
                    response: 'aidan@outlook.com',
                }
            },
        },
        Helpdesk: { // TODO: only when sent from 'business' contact
            title: 'Helpdesk',
            keywords: 'Hey Aidan, I have some trouble with connecting my email to Outlook, can you help me?',
            responses: {
                Colleague: {
                    response: 'Have you followed the steps described here: https://tinyurl.com/y7cpeqv4',
                },
                Family: {
                    response: 'Yeah sure, have you followed the steps described here: https://tinyurl.com/y7cpeqv4',
                },
                Friend: {
                    response: 'Yeah sure, have you followed the steps described here: https://tinyurl.com/y7cpeqv4',
                }
            },
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
        /*case 'SEND_RESPONSE':
            console.log(action.receiver);
            return {
                ...state,
                messages: {
                    ...state.messages,
                    byId: {
                        ...state.messages.byId,
                        [action.id]: {
                            id: action.id,
                            author: action.author.name,
                            message: state.scenarios[action.scenario].response,
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
            };*/
        case 'MESSAGE_SELECTED':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    messageSelected: action.payload,
                }
            };
        case 'CHAT_SELECTED':
            console.log(action);
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
