import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

/*const initialState = {
    activeChat: 'Dave Kellie',
    users: [
        {
            id: 1,
            name: 'Dave Kellie',
            message: 'hello',
        },
        {
            id: 2,
            name: 'Kellie Max',
            message: 'hello'
        },
        {
            id: 3,
            name: 'Max Jack'
        },
    ],
    messages: [
        {
            id: 0,
            author: 'Lorem Ipsum' ,
            message: 'hello'
        },
        {
            id: 1,
            author: 'Ipsum Lorem',
            message: 'hi'
        },
    ]
};*/

const store = createStore(
    rootReducer
    //initialState,
);

/*store.subscribe(() => {
    console.log(store.getState());
});*/

// register ourselves as present in the chat
// store.dispatch(addUser('Me'));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
