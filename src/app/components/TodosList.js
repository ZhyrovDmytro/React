import React, { Component } from 'react';
import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';

export default class TodosList extends Component {

    renderItems() {
        return this.props.todos.map((todo) =>
            (<TodosListItem
                key={todo.index}
                {...todo}
            />)
        );
    }

    render() {
        return (
            <table className="w-100">
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
