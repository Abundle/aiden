import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

// Custom import
// import { addUser } from './actions';
import './index.css';
import App from './App';
import rootReducer from './reducers';

import createSagaMiddleware from 'redux-saga'
import handleNewMessage from './saga';
import setupSocket from './client';

const username = 'John Doe';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);
const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

/*store.subscribe(() => {
    console.log(store.getState());
});*/

// register ourselves as present in the chat
// store.dispatch(addUser('Me'));

ReactDOM.render(
    <Provider store={ store }>
        <MuiPickersUtilsProvider utils={ MomentUtils }>
            <App />
        </MuiPickersUtilsProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
