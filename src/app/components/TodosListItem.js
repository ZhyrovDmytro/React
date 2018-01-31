import React, { Component } from 'react';

export default class TodosListItem extends Component {
    constructor(props) {
        super(props);

        this.onCancelClick = this.onCancelClick.bind(this);
        this.inEditClick = this.inEditClick.bind(this);
        this.renderAction = this.renderAction.bind(this);
        this.toggleTask = this.toggleTask.bind(this);

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

    toggleTask(task) {
        const foundTodo = this.props.todos.find(this.state.todos, todo => todo.task === task);

        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    renderTask() {
        const { task, isCompleted } = this.props;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        return (
            <td
                onClick={this.toggleTask}
                role="presentation"
                style={taskStyle}
                className="todos__task"
            >
                {task}
            </td>
        );
    }

    renderAction() {
        if (this.state.isEditing) {
            return (
                <td className="todos__controls">
                    <button className="btn btn--ctrl btn--save" />
                    <button className="btn btn--ctrl btn--cancel" onClick={this.onCancelClick} />
                </td>
            );
        }
        return (
            <td className="todos__controls">
                <button className="btn btn--ctrl btn--edit" onClick={this.inEditClick} />
                <button className="btn btn--ctrl btn--delete" />
            </td>
        );
    }


    render() {
        return (
            <tr>
                {this.renderTask()}
                {this.renderAction()}
            </tr>
        );
    }

}
