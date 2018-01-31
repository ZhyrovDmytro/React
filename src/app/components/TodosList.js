import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';

export default class TodosList extends Component {

    renderItems() {
        const props = this.props.todos.splice(this.props, 'todos');
        let i = 0;
        return this.props.todos.map(todo =>
            (<TodosListItem
                key={(i += 1) - 1}
                {...todo}
                {...props}
            />)
        );
    }

    render() {
        return (
            <table className="w-100 mb-4">
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
