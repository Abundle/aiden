import React from 'react';
import ReactDOM from 'react-dom';

import Chat from './Chat';

class Portal extends React.Component {
    constructor(props) {
        super(props);

        this.rootSelector = document.getElementById('root-chat');
        this.container = document.createElement('div');
    }

    componentDidMount() {
        this.rootSelector.appendChild(this.container);
    }

    componentWillUnmount() {
        this.rootSelector.removeChild(this.container);
    }

    render() {
        return ReactDOM.createPortal(<Chat {...this.props} />, this.container);
    }
}

export default Portal;