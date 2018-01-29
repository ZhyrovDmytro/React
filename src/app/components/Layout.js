import React, { Component } from 'react';
import Header from './Header';
import App from './App';
import Practice from './Practice';
import TodosList from './TodosList';

export default class Layout extends Component {

    render() {
        return (
            <div>
                <TodosList />
                <App />
                <Practice />
            </div>
        );
    }
}

