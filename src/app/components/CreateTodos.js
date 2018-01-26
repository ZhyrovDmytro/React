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
        this.props.createTask('asdads');
    }

    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <input type="text" placeholder="What I need to do?" />
                <button>Create</button>
            </form>
        );
    }
}
