import React, { Component } from 'react';
import TodosList from './TodosList';
import Stopwatch from './Stopwatch';
import CreateTodos from './CreateTodos';
import TodosListHeader from './TodosListHeader';
import Layout from './Layout';

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
        const newTodo = {
            task,
            isCompleted: false
        };

        this.setState({
            todos: [
                ...this.state.todos,
                newTodo
            ]
        });
    }

    render() {

        return (
            <div className="w-100">
                <h1 className="todos__title text-center">ToDo App</h1>
                <CreateTodos createTask={this.createTask} />
                <TodosList
                    todos={this.state.todos}
                />
                <Stopwatch />
                <Layout date={new Date()} />

            </div>
        );
    }

}
