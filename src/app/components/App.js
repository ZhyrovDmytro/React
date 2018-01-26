import React, { Component } from 'react';
import TodosList from './TodosList';
import CreateTodos from './CreateTodos';
import TodosListHeader from './TodosListHeader';

const todos = [
    {
        task: 'Lorem Ipsum',
        isCompleted: false
    },
    {
        task: 'Dolore sit ammet',
        isCompleted: true
    }
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos
        };

        this.createTask = this.createTask.bind(this);
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    render() {
        return (
            <div>
                <h1>ToDo App</h1>
                <CreateTodos createTask={this.createTask} />
                <TodosList
                    todos={this.state.todos}
                />
            </div>
        );
    }

}
