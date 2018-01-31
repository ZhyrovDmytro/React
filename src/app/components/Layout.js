import React, { Component } from 'react';
import App from './App';
import Practice from './Practice';
import TodosList from './TodosList';

function Layout() {
    return (
        <div>
            <TodosList />
            <App />
            <Practice />
        </div>
    );
}

export default Layout;
