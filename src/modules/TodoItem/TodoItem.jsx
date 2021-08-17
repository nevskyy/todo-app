import React from 'react';
import './TodoItem.scss';

export const TodoItem = (props) => {
  console.log(props);
  return(
    <div className={props.todo.completed ? "todo-item completed" : "todo-item notCompleted"}>
      <input
        type="checkBox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p>{props.todo.text}</p>
    </div>
  )
}