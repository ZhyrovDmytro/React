import React, { Component } from 'react';

export default class TodosList extends Component {
    constructor(props) {
        super(props);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            isEditing: false,
            inputValue: ''
        };
    }

    handleCreate(event) {
        if (this.state.inputValue !== '') {
            this.props.createTask(this.state.inputValue);
            this.setState({
                inputValue: ''
            });
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.currentTarget.value
        });
    }

    render() {
        return (
            <form className="form">
                <input
                    className="input"
                    type="text"
                    placeholder="What I need to do?"
                    value={this.state.inputValue}
                    onChange={(e) => this.handleInputChange(e)}
                />
                <button
                    type="button"
                    className="btn btn--green"
                    onClick={() => this.handleCreate()}
                >
                    +
                </button>
            </form>
        );
    }
}
