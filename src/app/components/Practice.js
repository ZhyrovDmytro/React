import React, { Component } from 'react';


export default class Practice extends Component {
    constructor(props) {
        super(props);
        this.state = { lapse: 0, running: false };
        this.handleRunClick = this.handleRunClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    }

    handleClearClick() {
        clearInterval(this.timer);
        this.setState({ lapse: 0, running: false });
    }

    handleRunClick() {
        this.setState(state => {
            if (this.state.running) {
                clearInterval(this.timer);
            } else {
                const startTime = Date.now() - this.state.lapse;
                this.timer = setInterval(() => {
                    this.setState({ lapse: Date.now() - startTime });
                });
            }
            return { running: !state.running };
        });
    }

    render() {
        const { lapse, running } = this.state;
        return (
            <div>
                <h2>{ lapse }ms</h2>
                <button onClick={this.handleRunClick}>{ running ? 'Stop' : 'Start' }</button>
                <button onClick={this.handleClearClick}>Clear</button>
            </div>
        );
    }
}
