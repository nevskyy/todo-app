import React from 'react';
import {TodoItem} from '../TodoItem';
import './App.scss';
import todoData from '../../todosData';

console.log(todoData);

export class App extends React.Component {
  state = {
    todos: todoData,
  }

  handleChange = (id) => {
    console.log(id);

    this.setState(state => {
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo;
      })

      return {todos: updatedTodos}
    })
  }

  render() {
    const todoItems = this.state.todos.map(todo =>
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChange={this.handleChange}
      />
    )

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}
