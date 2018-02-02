import React, { Component } from 'react';
import Clock from './Clock';

function Layout() {
    return (
        <div className="layout">
            <Clock />
        </div>
    );
}

function Call() {
    setInterval(Layout(), 1000);
}

export default Layout;
