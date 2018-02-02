import React, { Component } from 'react';

export default class Data extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() {
        const display = this.state.isShowingText ? this.props.text : '';
        return (
            <div>
                <h1>Some {display}</h1>
            </div>
        );
    }
}
