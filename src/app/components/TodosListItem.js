import React, { Component } from 'react';

export default class TodosListItem extends Component {
    constructor(props) {
        super(props);

        this.inEditClick = this.inEditClick.bind(this);
        this.renderAction = this.renderAction.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);

        this.state = {
            isEditing: false
        };
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    inEditClick() {
        this.setState({ isEditing: true });
    }

    renderAction() {
        if (this.state.isEditing) {
            return (
                <td key="td">
                    <button className="btn">Save</button>
                    <button className="btn" onClick={this.onCancelClick}>Cancel</button>
                </td>
            );
        }
        return (
            <td key="td">
                <button className="btn" onClick={this.inEditClick}>Edit</button>
                <button className="btn">Delete</button>
            </td>
        );
    }


    render() {
        return (
            <tr key="tr">
                <td className="todos__task">{this.props.task}</td>
                {this.renderAction()}
            </tr>
        );
    }

}
