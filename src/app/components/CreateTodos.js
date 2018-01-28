import React, { Component } from 'react';

export default class TodosList extends Component {
    constructor(props) {
        super(props);

        this.handleCreate = this.handleCreate.bind(this);

        this.state = {
            isEditing: false
        };
    }

    handleCreate(event) {
        event.preventDefault();
        this.props.createTask(this.refs.createInput.value);
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleCreate}>
                <input className="input" type="text" placeholder="What I need to do?" />
                <button className="btn btn--green">+</button>
            </form>
        );
    }
}
