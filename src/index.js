import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

// Custom import
import './index.css';
import App from './App';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

ReactDOM.render(
    <Provider store={ store }>
        <MuiPickersUtilsProvider utils={ MomentUtils }>
            <App />
        </MuiPickersUtilsProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
