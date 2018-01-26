import React, { Component } from 'react';
import TodosList from './TodosList';

export default class Header extends Component {

    render() {
        return (
            <div>
                <h1>Start!</h1>
                <TodosList />
            </div>
        );
    }
}
