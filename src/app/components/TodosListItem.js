import React, { Component } from 'react';

export default class TodosListItem extends Component {
    constructor(props) {
        super(props);

        this.onCancelClick = this.onCancelClick.bind(this);
        this.inEditClick = this.inEditClick.bind(this);
        this.renderAction = this.renderAction.bind(this);

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
                <td>
                    <button className="btn btn--ctrl btn--save" />
                    <button className="btn btn--ctrl btn--cancel" onClick={this.onCancelClick} />
                </td>
            );
        }
        return (
            <td>
                <button className="btn btn--ctrl btn--edit" onClick={this.inEditClick} />
                <button className="btn btn--ctrl btn--delete" />
            </td>
        );
    }


    render() {
        return (
            <tr>
                <td className="todos__task">{this.props.task}</td>
                {this.renderAction()}
            </tr>
        );
    }

}
