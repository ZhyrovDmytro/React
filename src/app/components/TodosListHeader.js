import React, { Component } from 'react';
import TodosList from './CreateTodos';


function TodosListHeader() {
    return (
        <thead>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

export default TodosListHeader;
